using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace Analytics.Controllers
{
    [Route("api/[controller]")]
    public class MetaController : Controller
    {
        [HttpGet("[action]")]
        public string Entities()
        {
            var sqlHelper = new ClientApp.src.SqlHelper();
            SqlConnection conn = new SqlConnection("Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=Profisee;Data Source=.");
            CommandType cmdType = CommandType.TableDirect;
            string cmdText = "SELECT * FROM [Profisee].[meta].[tEntity]";
            var data = sqlHelper.ExecuteDataTableSqlDA(conn, cmdType, cmdText, null);
            return "Hello World";
        }

        [HttpGet("[action]")]
        public string Attributes()
        {
            return "Hello World";
        }
    }
}
