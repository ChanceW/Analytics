using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Analytics.Controllers
{
    [Route("api/[controller]")]
    public class MemberdataController : Controller
    {
        public IConfiguration Configuration { get; }
        private readonly string connectionString;

        public MemberdataController(IConfiguration configuration)
        {
            Configuration = configuration;
            connectionString = Configuration["ConnectionStrings:DefaultConnection"];
        }

        [HttpGet("[action]/{entityName}")]
        public IActionResult GetMembers(string entityName)
        {
            var sql = $"SELECT * FROM data.t{entityName}";
            var data = DataAccess.SqlHelper.ExecuteDataTableSqlDA(connectionString, sql);
            //HttpContext.Current.Request.Form["Attributes"];
            return Json(data.Tables.Count > 0 ? data.Tables[0] : null);
        }

        [HttpGet("[action]/{entity}")]
        public IActionResult GetSeries(string entity, [FromQuery(Name = "attributes")] List<string> attributes)
        {
            var sql = string.Empty;
            var data = new List<System.Data.DataTable>();
            //System.Data.DataSet data = new System.Data.DataSet();
            
            foreach(var attribute in attributes)
            {
                sql = $@"SELECT E.[{attribute}.Name] AS [Name]
                        ,COUNT(0) AS [Count] 
                        FROM data.v{entity} E
                        GROUP BY [{attribute}.Name]";
                var result = DataAccess.SqlHelper.ExecuteDataTableSqlDA(connectionString, sql);
                if(result != null && result.Tables.Count > 0)
                {
                    data.Add(result.Tables[0]);
                }             
            }
            return Json(data);
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}
