using Microsoft.AspNetCore.Mvc;
using WarnerMedia.Service;


namespace WarnerMedia.Controllers
{
    [Route("api/titles")]
    [ApiController]
    public class TitlesController : ControllerBase
    {

        private readonly ITitleService _titleService;

        public TitlesController(ITitleService titleService)
        {
            _titleService = titleService;
        }
       
      

        [HttpGet]
        public  IActionResult GetAll()
        {
            var title = _titleService.getAllTitles();
            return Ok(title);
        }

        
        
        [HttpGet("{name}")]
        public IActionResult GetByName(string name)
        {
            var title = _titleService.getAllTitlesByName(name);
            return Ok(title);
        }
        
    }
}
