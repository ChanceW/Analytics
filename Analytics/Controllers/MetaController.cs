using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using Microsoft.Extensions.Configuration;

namespace Analytics.Controllers
{
    [Route("api/[controller]")]
    public class MetaController : Controller
    {
        public IConfiguration Configuration { get; }
        private readonly string connectionString;

        public MetaController(IConfiguration configuration)
        {
            Configuration = configuration;
            connectionString = Configuration["ConnectionStrings:DefaultConnection"];
        }

        [HttpGet("[action]")]
        public string Entities()
        {
            string cmdText = "SELECT * FROM [Profisee].[meta].[tEntity]";
            var data = DataAccess.SqlHelper.ExecuteDataTableSqlDA(connectionString, cmdText);
            return "Hello World";
        }

        [HttpGet("[action]")]
        public string Attributes()
        {
            return "Hello World";
        }
    }
}
