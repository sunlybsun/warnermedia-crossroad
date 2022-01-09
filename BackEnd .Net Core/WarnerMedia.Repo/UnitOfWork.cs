using WarnerMedia.Data.Models;
using WarnerMedia.Repo.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WarnerMedia.Repo
{
    public class UnitOfWork: IUnitOfWork
    {
        private ApplicationDbContext _context;
        private Repository<Title> titleRepository;
     
        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }

        public Repository<Title> TitleRepository
        {
            get
            {

                if (this.titleRepository == null)
                {
                    this.titleRepository = new Repository<Title>(_context);
                }
                return titleRepository;
            }
        }

        public void Save()
        {
            _context.SaveChanges();
        }

     

        public void Dispose()
        {
            _context.Dispose();
        }

        
    }
}
