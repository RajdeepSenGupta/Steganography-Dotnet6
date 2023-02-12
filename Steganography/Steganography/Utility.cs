namespace Steganography
{
    public static class Utility
    {
        private static double lastPercentageDone;

        public static void PrintPercentageDone(int currentPixel, int totalNumberOfPixels)
        {
            double percentageDone = ((double)currentPixel / totalNumberOfPixels) * 100;

            if (percentageDone - lastPercentageDone > 0.005 || percentageDone == 100)
            {
                Console.Clear();
                Console.WriteLine("Percentage Done - " + Math.Round(percentageDone, 3) + "%");

                lastPercentageDone = percentageDone;
            }
        }

        public static string ConvertStringToBinary(string text)
        {
            string convertedString = string.Empty;

            foreach (char character in text)
            {
                convertedString += new string(AsciiCharacterToEightBitBinary(character));
            }

            return convertedString;
        }

        public static char ConvertBinaryToCharacter(string binaryString)
        {
            int asciiValue = 0;
            int power = 0;
            
            for(int i = binaryString.Length - 1; i >= 0; i--)
            {
                int bit = (int)char.GetNumericValue(binaryString[i]);
                asciiValue += bit * (int)Math.Pow(2, power++);
            }

            return (char)asciiValue;
        }

        private static char[] AsciiCharacterToEightBitBinary(int asciiCharacter)
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
