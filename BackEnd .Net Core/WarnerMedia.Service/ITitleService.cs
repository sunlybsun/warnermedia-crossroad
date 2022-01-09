using WarnerMedia.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WarnerMedia.Service
{
    public interface ITitleService
    {
        List<Title> getAllTitles();
        List<Title> getAllTitlesByName(string name);
    }
}
