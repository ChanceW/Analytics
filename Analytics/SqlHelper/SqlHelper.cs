using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Analytics.ClientApp.src
{
    public class SqlHelper
    {
        public DataSet ExecuteDataTableSqlDA(SqlConnection conn, CommandType cmdType, string cmdText, SqlParameter[] cmdParms)
        {
            DataSet dt = new DataSet();
            SqlDataAdapter da = new SqlDataAdapter(cmdText, conn);
            da.Fill(dt);
            return dt;
        }
    }
}
