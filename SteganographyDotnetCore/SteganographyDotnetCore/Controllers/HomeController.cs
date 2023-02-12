using Microsoft.AspNetCore.Mvc;

namespace SteganographyDotnetCore.Controllers
{
  public class HomeController : Controller
  {
    public HomeController()
    {
      
    }

    public IActionResult Index()
    {
      return View();
    }
  }
}
