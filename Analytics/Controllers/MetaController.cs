using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

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
            string cmdText = "SELECT Id, Name FROM [Profisee].[meta].[tEntity]";
            var data = DataAccess.SqlHelper.ExecuteDataTableSqlDA(connectionString, cmdText);
            var entities = data.Tables[0];
            return JsonConvert.SerializeObject(entities); ;
        }

        [HttpGet("[action]")]
        public string Attributes()
        {
            string cmdText = "select Attribute_ID, Attribute_Name, Entity_ID, Entity_Name, Attribute_DBAEntity_ID, Attribute_DBAEntity_Name from meta.vRepo_viw_SYSTEM_SCHEMA_ATTRIBUTES a where a.Attribute_DBAEntity_ID is not null";
            var data = DataAccess.SqlHelper.ExecuteDataTableSqlDA(connectionString, cmdText);
            var entities = data.Tables[0];
            return JsonConvert.SerializeObject(entities);
        }
    }
}
