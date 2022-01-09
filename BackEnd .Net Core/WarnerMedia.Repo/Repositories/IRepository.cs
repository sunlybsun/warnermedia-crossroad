using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace WarnerMedia.Repo.Repositories
{

    public interface IRepository<T> where T:class
    {
        IEnumerable<T> Get(Expression<Func<T, bool>> filter = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
            string includeProperties = "");
        T GetByID(int id);
        void Insert(T entity);
        void Delete(int id);
        void Delete(T entity);
        void Update(T entity);
    
    }

}
