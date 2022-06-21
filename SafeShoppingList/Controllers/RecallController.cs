using Microsoft.AspNetCore.Mvc;
using SafeShoppingList.Repositories;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SafeShoppingList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecallController : ControllerBase
    {
        private readonly IRecallRepository _recallRepository;
        public RecallController(IRecallRepository recallRepository)
        {
            _recallRepository = recallRepository;
        }


        [HttpGet("search")]
        public IActionResult Search(string BrandName, string PDescription, string Company)
        {
            return Ok(_recallRepository.Search(BrandName, PDescription, Company));
        }
        

    }
}
