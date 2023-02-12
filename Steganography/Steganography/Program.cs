using System.Drawing;
using System.Runtime.Versioning;

namespace Steganography
{
    [SupportedOSPlatform("windows")]
    public class Program
    {
        public static void Main(string[] args)
        {
            // Image paths
            string colorImageSourceImagePath = "C:\\Users\\rajde\\OneDrive\\Desktop\\Steganography\\input_col.jpg";
            string grayscaleImageSourceImagePath = "C:\\Users\\rajde\\OneDrive\\Desktop\\Steganography\\input_grayscale.jpg";
            string destinationImagePath = "C:\\Users\\rajde\\OneDrive\\Desktop\\Steganography\\output.jpg";
            string plainText = "I Love You Mona Darlinggggggggg!!!!!!!!!";

            CodeToRun codeToRun = CodeToRun.SteganographyDecoding;

            switch (codeToRun)
            {
                case CodeToRun.ColorImageToGrayscaleImage:
                    {
                        // Delete existing output file
                        if (File.Exists(destinationImagePath))
                        {
                            File.Delete(destinationImagePath);
                        }

                        // Color image to Grayscale image
                        ColorImageToGrayscaleImage(colorImageSourceImagePath, destinationImagePath);

                        break;
                    }

                case CodeToRun.SteganographyEncoding:
                    {
                        // Delete existing output file
                        if (File.Exists(destinationImagePath))
                        {
                            File.Delete(destinationImagePath);
                        }

                        Steganography.Encode(plainText, grayscaleImageSourceImagePath, destinationImagePath);

                        Console.Clear();
                        Console.WriteLine("Encoding Complete!");

                        break;
                    }

                case CodeToRun.SteganographyDecoding:
                    {
                        string decodedText = Steganography.Decode(destinationImagePath);

                        Console.Clear();
                        Console.WriteLine("Decoding Complete!\n");
                        Console.WriteLine("Decoded Text - ");
                        Console.WriteLine(decodedText);
                        break;
                    }

                default:
                    break;
            }

            Console.ReadLine();
        }

        public static void ColorImageToGrayscaleImage(string sourceImagePath, string destinationImagePath)
        {
            // Read the image as a bitmap image
            Bitmap originalbmp = new Bitmap(Image.FromFile(sourceImagePath));
            Bitmap newbmp = new Bitmap(Image.FromFile(sourceImagePath));

            int totalNumberOfPixels = originalbmp.Height * originalbmp.Width;
            int currentPixel = 1;

            // Read each pixel and set average RGB value
            for (int row = 0; row < originalbmp.Width; row++)
            {
                for (int column = 0; column < originalbmp.Height; column++)
                {
                    Utility.PrintPercentageDone(currentPixel, totalNumberOfPixels);

                    // Get the color pixel
                    Color colorValue = originalbmp.GetPixel(row, column);

                    // Get the average for black and white
                    int averageValue = (colorValue.R + colorValue.B + colorValue.G) / 3;

                    // Generate new color
                    Color newColor = Color.FromArgb(averageValue, averageValue, averageValue);

                    // Set the value to new pixel
                    newbmp.SetPixel(row, column, newColor);

                    currentPixel++;
                }
            }

            newbmp.Save(destinationImagePath);
        }
    }
}