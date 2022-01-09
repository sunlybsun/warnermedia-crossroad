using WarnerMedia.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WarnerMedia.Repo.Repositories
{
    public class TitleRepository : Repository<Title>, ITitlteRepository
    {
        private ApplicationDbContext _context;

        public TitleRepository(ApplicationDbContext context): base(context)
        {
            _context = context;
        }

    }
}
