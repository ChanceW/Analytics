using System.Data;
using System.Data.SqlClient;

namespace Analytics.DataAccess
{
    public static class SqlHelper
    {
        public static DataSet ExecuteDataTableSqlDA(string connection, string sqlCmd)
        {
            SqlConnection conn = new SqlConnection(connection);
            DataSet dt = new DataSet();
            SqlDataAdapter da = new SqlDataAdapter(sqlCmd, conn);
            da.Fill(dt);
            return dt;
        }
    }
}
