using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WarnerMedia.Data.Models;
using WarnerMedia.Repo.Repositories;

namespace WarnerMedia.Repo
{
    public interface IUnitOfWork
    {
        Repository<Title> TitleRepository { get; }

        void Save();
        void Dispose();
    }
}
