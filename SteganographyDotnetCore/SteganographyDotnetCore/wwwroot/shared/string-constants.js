"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringConstants = void 0;
class StringConstants {
}
exports.StringConstants = StringConstants;
// API list
StringConstants.DefaultImagePath = '../assets/images/default.jpg';
StringConstants.ImageFileUploadApi = 'api/steganography/upload';
StringConstants.Encode = 'api/steganography/encode';
StringConstants.Decode = 'api/steganography/decode';
// Errors
StringConstants.PlainTextRequired = 'Please provide a plain text to encode';
StringConstants.ImageRequiredForEncoding = 'Please upload an image before encoding';
StringConstants.ImageRequiredForDecoding = 'Please upload an image before decoding';
// Messages
StringConstants.EncodingComplete = "Encoding complete";
StringConstants.DecodingComplete = "Decoding complete";
//# sourceMappingURL=string-constants.js.map