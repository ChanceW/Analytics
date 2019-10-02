using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Analytics.Controllers
{
    public class MemberdataController : Controller
    {
        public IConfiguration Configuration { get; }
        private readonly string connectionString;

        public MemberdataController(IConfiguration configuration)
        {
            Configuration = configuration;
            connectionString = Configuration["ConnectionStrings:DefaultConnection"];
        }

        public IActionResult GetMembers(string entityName)
        {
            var sql = $"SELECT * FROM data.t{entityName}";
            var data = DataAccess.SqlHelper.ExecuteDataTableSqlDA(connectionString, sql);
            return Json(data);
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}
