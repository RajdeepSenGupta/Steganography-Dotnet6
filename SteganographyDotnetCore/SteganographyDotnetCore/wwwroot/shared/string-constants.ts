export class StringConstants {

  // API list
  public static readonly DefaultImagePath: string = '../assets/images/default.jpg';

  public static readonly ImageFileUploadApi: string = 'api/steganography/upload';

  public static readonly Encode: string = 'api/steganography/encode';

  public static readonly Decode: string = 'api/steganography/decode';

  // Errors
  public static readonly PlainTextRequired: string = 'Please provide a plain text to encode';

  public static readonly ImageRequiredForEncoding: string = 'Please upload an image before encoding';

  public static readonly ImageRequiredForDecoding: string = 'Please upload an image before decoding';

  // Messages
  public static readonly EncodingComplete: string = "Encoding complete";

  public static readonly DecodingComplete: string = "Decoding complete";
}
