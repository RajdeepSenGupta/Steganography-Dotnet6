using SteganographyDotnetCore.Models;

namespace SteganographyDotnetCore.Repository
{
  public interface ISteganographyRepository
  {
    Tuple<bool, string> EncodeText(EncodeDetailsAC detailsToEncode);

    Tuple<bool, string> DecodeText(string imageName);
  }
}
