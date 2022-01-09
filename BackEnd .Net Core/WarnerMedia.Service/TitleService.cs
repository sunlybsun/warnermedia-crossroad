using WarnerMedia.Data.Models;
using WarnerMedia.Repo;
using WarnerMedia.Repo.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WarnerMedia.Service;

namespace WarnerMedia.Service
{
    public class TitleService : ITitleService
    {
        public static readonly ApplicationDbContext _context;
        IUnitOfWork uow;
        public TitleService(ApplicationDbContext context, IUnitOfWork unitOfWork) {            
            uow = unitOfWork;
        }

        public List<Title> getAllTitles() {
            List<Title> res = new List<Title>();
            var titles = uow.TitleRepository.Get(includeProperties: "StoryLines");
            foreach (var item in titles)
            {
                res.Add(item);
            }

            return res;
        }

        public List<Title> getAllTitlesByName(string name)
        {
            List<Title> res = new List<Title>();
            var titles = uow.TitleRepository.Get(filter: t => t.TitleName.Contains(name), includeProperties: "StoryLines,Awards");
            foreach (var item in titles)
            {
                res.Add(item);
            }

            return res;
        }

    }
}
