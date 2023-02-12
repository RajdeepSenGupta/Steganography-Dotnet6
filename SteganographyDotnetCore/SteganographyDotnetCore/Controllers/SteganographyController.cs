using Microsoft.AspNetCore.Mvc;
using SteganographyDotnetCore.Models;
using SteganographyDotnetCore.Repository;

namespace SteganographyDotnetCore.Controllers
{
  [Route("api/[controller]")]
  public class SteganographyController : Controller
  {
    #region Private variables

    private readonly Utility _utility;
    private readonly ISteganographyRepository _steganographyRepository;

    #endregion

    #region Constructor

    public SteganographyController(Utility utility,
      ISteganographyRepository steganographyRepository)
    {
      _utility = utility;
      _steganographyRepository = steganographyRepository;
    }

    #endregion

    #region Public methods

    [HttpPost("upload")]
    [RequestSizeLimit(100_000_000)]
    public async Task<IActionResult> UploadOriginalImageAsync()
    {
      string imagesDirectoryPath = _utility.GetImageDirectoryName();

      // Get file details
      IFormFile imageFile = HttpContext.Request.Form.Files[0];
      string fileExtension = Path.GetExtension(imageFile.FileName);

      string originalImagePath = Path.Combine(imagesDirectoryPath, imageFile.FileName);

      if (!System.IO.File.Exists(originalImagePath))
      {
        // Save file in the original images directory
        Stream fileStream = imageFile.OpenReadStream();
        using (Stream outputFile = System.IO.File.Create(originalImagePath))
        {
          byte[] buffer = new byte[8 * 1024];
          int len;
          while ((len = fileStream.Read(buffer, 0, buffer.Length)) > 0)
          {
            outputFile.Write(buffer, 0, len);
          }
          outputFile.Close();
        }
      }

      byte[] generatedFileByteArray = await System.IO.File.ReadAllBytesAsync(originalImagePath);
      string contentType = "image/" + fileExtension.Split('.')[1];

      return File(generatedFileByteArray, contentType);
    }

    [HttpPost("encode")]
    public async Task<IActionResult> EncodeTextAsync([FromBody] EncodeDetailsAC detailsToEncode)
    {
      Tuple<bool, string> response = _steganographyRepository.EncodeText(detailsToEncode);

      if (!response.Item1)
      {
        return BadRequest(response.Item2);
      }
      else
      {
        string encodedImagePath = response.Item2;
        string fileExtension = Path.GetExtension(encodedImagePath);
        byte[] generatedFileByteArray = await System.IO.File.ReadAllBytesAsync(encodedImagePath);
        string contentType = "image/" + fileExtension.Split('.')[1];

        return File(generatedFileByteArray, contentType);
      }
    }

    [HttpPost("decode")]
    public IActionResult DecodeText([FromBody] DecodeDetailsAC detailsToDecode)
    {
      Tuple<bool, string> response = _steganographyRepository.DecodeText(detailsToDecode.OriginalFileName);

      if (!response.Item1)
      {
        return BadRequest(response.Item2);
      }
      else
      {
        return Ok(new { DecodedText = response.Item2 });
      }
    }

    #endregion

    #region Private methods

    

    #endregion
  }
}
