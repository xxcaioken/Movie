using Microsoft.Data.SqlClient;
using System.Data.Common;

namespace Movie.DAO
{
    public interface IMovieDao
    {
        public void Teste();
    }
    public class MovieDAO : IMovieDao
    {
        public MovieDAO() { }

        public void Teste()
        {
            ConnectionDAO connectionDAO = new ConnectionDAO();
            connectionDAO.RunQuerry("select * from dbo.atores;");
        }
    }
}
