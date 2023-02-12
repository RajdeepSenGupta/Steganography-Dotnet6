namespace SteganographyDotnetCore.Controllers
{
  public class Seed
  {
    private readonly Utility _utility;

    public Seed(Utility utility)
    {
      _utility = utility;
    }

    public void SetInitialDirectories()
    {
      string imageDirectory = _utility.GetImageDirectoryName();
      if (!Directory.Exists(imageDirectory))
      {
        Directory.CreateDirectory(imageDirectory);
      }
      else
      {
        // Delete all files
        string[] filesInOriginalImagesDirectory = Directory.GetFiles(imageDirectory);
        foreach (string filePath in filesInOriginalImagesDirectory)
        {
          File.Delete(filePath);
        }
      }
    }
  }
}
