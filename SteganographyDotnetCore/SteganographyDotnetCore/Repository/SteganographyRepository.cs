using SteganographyDotnetCore.Controllers;
using SteganographyDotnetCore.Models;
using System.Drawing;
using System.Runtime.Versioning;

namespace SteganographyDotnetCore.Repository
{
  [SupportedOSPlatform("windows")]
  public class SteganographyRepository : ISteganographyRepository
  {
    #region Private variables

    private readonly Utility _utility;

    #endregion

    #region Constructor

    public SteganographyRepository(Utility utility)
    {
      _utility = utility;
    }

    #endregion

    #region Public methods

    public Tuple<bool, string> EncodeText(EncodeDetailsAC detailsToEncode)
    {
      string plainText = detailsToEncode.PlainText;
      string originalImagePath = Path.Combine(_utility.GetImageDirectoryName(), detailsToEncode.OriginalFileName);
      
      int lastIndexOfDot = detailsToEncode.OriginalFileName.LastIndexOf('.');
      string imageName = detailsToEncode.OriginalFileName.Substring(0, detailsToEncode.OriginalFileName.Length - lastIndexOfDot);
      string encodedImageName = string.Concat(imageName, "_encoded", Path.GetExtension(detailsToEncode.OriginalFileName));

      string encodedImagePath = Path.Combine(_utility.GetImageDirectoryName(), encodedImageName);

      if (!File.Exists(originalImagePath))
      {
        return new Tuple<bool, string>(false, StringConstants.OriginalImageDoesnotExistError);
      }

      // Get the image
      Bitmap originalbmp = new Bitmap(Image.FromFile(originalImagePath));

      string binaryRepresentationOfText = _utility.ConvertStringToBinary(plainText);
      int digitIndex = 0;

      for (int row = 0; row < originalbmp.Height; row++)
      {
        for (int column = 0; column < originalbmp.Width; column++)
        {
          // Get pixel
          Color pixel = originalbmp.GetPixel(column, row);

          // Convert RGB values of the pixel to closest even number (Considering 0 as even)
          int newR = pixel.R - (pixel.R % 2);
          int newG = pixel.G - (pixel.G % 2);
          int newB = pixel.B - (pixel.B % 2);

          // Set new color value
          newR = digitIndex >= binaryRepresentationOfText.Length ? newR : (newR + (int)char.GetNumericValue(binaryRepresentationOfText[digitIndex++]));
          newG = digitIndex >= binaryRepresentationOfText.Length ? newG : (newG + (int)char.GetNumericValue(binaryRepresentationOfText[digitIndex++]));
          newB = digitIndex >= binaryRepresentationOfText.Length ? newB : (newB + (int)char.GetNumericValue(binaryRepresentationOfText[digitIndex++]));

          // Generate new color
          Color newColor = Color.FromArgb(newR, newG, newB);

          // Set the value to new pixel
          originalbmp.SetPixel(column, row, newColor);
        }
      }

      originalbmp.Save(encodedImagePath);

      return new Tuple<bool, string>(true, encodedImagePath);
    }

    public Tuple<bool, string> DecodeText(string imageName)
    {
      string decodedText = string.Empty;

      string decodingImagePath = Path.Combine(_utility.GetImageDirectoryName(), imageName);
      
      if (!File.Exists(decodingImagePath))
      {
        return new Tuple<bool, string>(false, StringConstants.OriginalImageDoesnotExistError);
      }

      // Get the image
      Bitmap originalbmp = new Bitmap(Image.FromFile(decodingImagePath));

      bool isConvertionComplete = false;
      string binaryString = string.Empty;
      int binaryChunkSize = 8;

      // Extract the last bits of each color of each pixel
      for (int row = 0; row < originalbmp.Height; row++)
      {
        for (int column = 0; column < originalbmp.Width; column++)
        {
          // Get pixel
          Color pixel = originalbmp.GetPixel(column, row);

          // Get last value of each color
          int rValue = pixel.R % 2;
          int gValue = pixel.G % 2;
          int bValue = pixel.B % 2;

          binaryString += string.Concat(rValue, gValue, bValue);

          // If last 8 bits are 0 then the decoding is complete
          if (binaryString.Length > binaryChunkSize && binaryString.Substring(binaryString.Length - binaryChunkSize, binaryChunkSize) == StringConstants.DefaultEightBitChunk)
          {
            isConvertionComplete = true;
            break;
          }
        }

        if (isConvertionComplete)
        {
          break;
        }
      }

      // Divide the entire binary string to 8 bit chunks and convert to proper character
      string[] eightBitChunkedBinaryStrings = binaryString.Chunk(binaryChunkSize).Select(x => new string(x)).ToArray();
      foreach (string eightBitChunkedBinaryString in eightBitChunkedBinaryStrings)
      {
        if(eightBitChunkedBinaryString == StringConstants.DefaultEightBitChunk)
        {
          break;
        }
        else
        {
          decodedText += _utility.ConvertBinaryToCharacter(eightBitChunkedBinaryString);
        }
      }

      return new Tuple<bool, string>(true, decodedText.Trim());
    }

    #endregion

    #region Private methods
    #endregion
  }
}
