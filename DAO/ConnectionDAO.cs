using Microsoft.Data.SqlClient;

namespace Movie.DAO
{
    public class ConnectionDAO
    {
        public static readonly SqlConnection connection = new("Data Source=ENGUIA;Initial Catalog=Movie;Persist Security Info=False;Encrypt=False;User ID=admin;Password=admin");
        public ConnectionDAO() { }

        public void RunQuerry(string querry)
        {
            SqlConnection conn = connection;
            conn.Open();

            SqlCommand command = new SqlCommand(querry, conn);

            //command.Parameters.AddWithValue("@zip","india");
            int result = command.ExecuteNonQuery();

            // result gives the -1 output.. but on insert its 1
            using (SqlDataReader reader = command.ExecuteReader())
            {
                // iterate your results here
                //Console.WriteLine(String.Format("{0}", reader["id"]));    TODO : return the value
            }

            conn.Close();
        }
}
}
