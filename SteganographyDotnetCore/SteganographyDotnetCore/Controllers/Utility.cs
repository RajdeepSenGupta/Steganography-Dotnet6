using SteganographyDotnetCore.Models;

namespace SteganographyDotnetCore.Controllers
{
  public class Utility
  {
    public Utility()
    {

    }

    public string GetImageDirectoryName()
    {
      return Path.Combine(Directory.GetCurrentDirectory(), StringConstants.ParentImageDirectory);
    }

    public string ConvertStringToBinary(string text)
    {
      string convertedString = string.Empty;

      foreach (char character in text)
      {
        convertedString += new string(AsciiCharacterToEightBitBinary(character));
      }

      return convertedString;
    }

    public char ConvertBinaryToCharacter(string binaryString)
    {
      int asciiValue = 0;
      int power = 0;

      for (int i = binaryString.Length - 1; i >= 0; i--)
      {
        int bit = (int)char.GetNumericValue(binaryString[i]);
        asciiValue += bit * (int)Math.Pow(2, power++);
      }

      return (char)asciiValue;
    }

    public char[] AsciiCharacterToEightBitBinary(int asciiCharacter)
    {
      string binaryRepresentation = string.Empty;
      int binaryChunkSize = 8;

      while (binaryChunkSize > 0)
      {
        if (asciiCharacter > 0)
        {
          binaryRepresentation += (asciiCharacter % 2).ToString();
          asciiCharacter /= 2;
        }
        else
        {
          binaryRepresentation += "0";
        }

        binaryChunkSize--;
      }

      return binaryRepresentation.Reverse().ToArray();
    }
  }
}
