using System.Drawing;
using System.Runtime.Versioning;

namespace Steganography
{
    [SupportedOSPlatform("windows")]
    public static class Steganography
    {
        public static void Encode(string plainText, string colorImageSourceImagePath, string destinationImagePath)
        {
            // Get the image
            Bitmap originalbmp = new Bitmap(Image.FromFile(colorImageSourceImagePath));

            int totalNumberOfPixels = originalbmp.Height * originalbmp.Width;
            int currentPixelIndex = 0;

            string binaryRepresentationOfText = Utility.ConvertStringToBinary(plainText);
            int digitIndex = 0;

            for (int row = 0; row < originalbmp.Height; row++)
            {
                for (int column = 0; column < originalbmp.Width; column++)
                {
                    Utility.PrintPercentageDone(currentPixelIndex + 1, totalNumberOfPixels);

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

                    currentPixelIndex++;
                }
            }

            // Save the image
            originalbmp.Save(destinationImagePath);
        }

        public static string Decode(string imagePath)
        {
            string decodedText = string.Empty;

            // Get the image
            Bitmap originalbmp = new Bitmap(Image.FromFile(imagePath));

            int totalNumberOfPixels = originalbmp.Height * originalbmp.Width;
            int currentPixelIndex = 0;
            bool isConvertionComplete = false;
            string binaryString = string.Empty;
            string defaultEightBitChunk = "00000000";
            int binaryChunkSize = 8;

            // Extract the last bits of each color of each pixel
            for (int row = 0; row < originalbmp.Height; row++)
            {
                for (int column = 0; column < originalbmp.Width; column++)
                {
                    Utility.PrintPercentageDone(currentPixelIndex + 1, totalNumberOfPixels);

                    // Get pixel
                    Color pixel = originalbmp.GetPixel(column, row);

                    // Get last value of each color
                    int rValue = pixel.R % 2;
                    int gValue = pixel.G % 2;
                    int bValue = pixel.B % 2;

                    binaryString += string.Concat(rValue, gValue, bValue);

                    // If last 8 bits are 0 then the decoding is complete
                    if (binaryString.Length > binaryChunkSize && binaryString.Substring(binaryString.Length - binaryChunkSize, binaryChunkSize) == defaultEightBitChunk)
                    {
                        isConvertionComplete = true;
                        break;
                    }

                    currentPixelIndex++;
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
                if (eightBitChunkedBinaryString != defaultEightBitChunk)
                {
                    decodedText += Utility.ConvertBinaryToCharacter(eightBitChunkedBinaryString);
                }
            }

            return decodedText;
        }
    }
}
