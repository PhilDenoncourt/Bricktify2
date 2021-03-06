import {Injectable} from '@angular/core';
import {IColor} from '../models/icolor';
@Injectable()
export class ColorService {

  public colors: [IColor];

  constructor() {
    this.colors = [{num: 118, color: 'Light bluish green', r: 179, g: 215, b: 209, a: 1, BricklinkId: 41}, {
      num: 26,
      color: 'Black',
      r: 5,
      g: 19,
      b: 29,
      a: 1,
      BricklinkId: 11
    }, {num: 23, color: 'Bright Blue', r: 0, g: 85, b: 191, a: 1, BricklinkId: 7}, {
      num: 37,
      color: 'Bright Green',
      r: 75,
      g: 159,
      b: 74,
      a: 1,
      BricklinkId: 36
    }, {num: 191, color: 'Flame yellowish orange', r: 248, g: 187, b: 61, a: 1, BricklinkId: 110}, {
      num: 198,
      color: 'Bright Reddish Lilac',
      r: 205,
      g: 98,
      b: 152,
      a: 1,
      BricklinkId: 93
    }, {num: 301, color: 'Silver', r: 224, g: 224, b: 224, a: 1, BricklinkId: 22}, {
      num: 226,
      color: 'Cool Yellow',
      r: 255,
      g: 240,
      b: 58,
      a: 1,
      BricklinkId: 103
    }, {num: 321, color: 'Dark Azur', r: 7, g: 139, b: 201, a: 1, BricklinkId: 153}, {
      num: 308,
      color: 'Dark Brown',
      r: 53,
      g: 33,
      b: 0,
      a: 1,
      BricklinkId: 120
    }, {num: 217, color: 'Brown', r: 124, g: 80, b: 58, a: 1, BricklinkId: 91}, {
      num: 141,
      color: 'Earth Green',
      r: 24,
      g: 70,
      b: 50,
      a: 1,
      BricklinkId: 80
    }, {num: 128, color: 'Dark Nougat', r: 174, g: 122, b: 89, a: 1, BricklinkId: 0}, {
      num: 38,
      color: 'Dark Orange',
      r: 169,
      g: 85,
      b: 0,
      a: 1,
      BricklinkId: 68
    }, {num: 221, color: 'Bright Purple', r: 200, g: 112, b: 160, a: 1, BricklinkId: 47}, {
      num: 154,
      color: 'Dark red',
      r: 114,
      g: 14,
      b: 15,
      a: 1,
      BricklinkId: 59
    }, {num: 196, color: 'Dark Royal blue', r: 32, g: 50, b: 176, a: 1, BricklinkId: 109}, {
      num: 199,
      color: 'Dark stone grey',
      r: 108,
      g: 110,
      b: 104,
      a: 1,
      BricklinkId: 85
    }, {num: 138, color: 'Sand yellow', r: 149, g: 138, b: 115, a: 1, BricklinkId: 69}, {
      num: 232,
      color: 'Dove blue',
      r: 125,
      g: 191,
      b: 221,
      a: 1,
      BricklinkId: 87
    }, {num: 22, color: 'Medium Reddish Violet', r: 247, g: 133, b: 177, a: 1, BricklinkId: 94}, {
      num: 12,
      color: 'Light Orange Brown',
      r: 250,
      g: 156,
      b: 28,
      a: 1,
      BricklinkId: 29
    }, {num: 18, color: 'Nougat', r: 208, g: 145, b: 104, a: 1, BricklinkId: 28}, {
      num: 50,
      color: 'Phosp. White',
      r: 224,
      g: 255,
      b: 176,
      a: 1,
      BricklinkId: 46
    }, {num: 28, color: 'Dark green', r: 35, g: 120, b: 65, a: 1, BricklinkId: 6}, {
      num: 119,
      color: 'Br. yellowish green',
      r: 187,
      g: 233,
      b: 11,
      a: 1,
      BricklinkId: 34
    }, {num: 323, color: 'Aqua', r: 173, g: 195, b: 192, a: 1, BricklinkId: 152}, {
      num: 45,
      color: 'Light blue',
      r: 180,
      g: 210,
      b: 227,
      a: 1,
      BricklinkId: 62
    }, {num: 283, color: 'Light Nougat', r: 246, g: 215, b: 179, a: 1, BricklinkId: 90}, {
      num: 6,
      color: 'Light green',
      r: 194,
      g: 218,
      b: 184,
      a: 1,
      BricklinkId: 38
    }, {num: 120, color: 'Lig. yellowish green', r: 217, g: 228, b: 167, a: 1, BricklinkId: 35}, {
      num: 125,
      color: 'Light Orange',
      r: 249,
      g: 186,
      b: 97,
      a: 1,
      BricklinkId: 32
    }, {num: 222, color: 'Light Purple', r: 228, g: 173, b: 200, a: 1, BricklinkId: 104}, {
      num: 212,
      color: 'Light Royal blue',
      r: 159,
      g: 195,
      b: 233,
      a: 1,
      BricklinkId: 105
    }, {num: 100, color: 'Light red', r: 254, g: 186, b: 189, a: 1, BricklinkId: 26}, {
      num: 208,
      color: 'Light stone grey',
      r: 230,
      g: 227,
      b: 224,
      a: 1,
      BricklinkId: 99
    }, {num: 116, color: 'Med. bluish green', r: 85, g: 165, b: 175, a: 1, BricklinkId: 40}, {
      num: 39,
      color: 'Light bluish violet',
      r: 201,
      g: 202,
      b: 226,
      a: 1,
      BricklinkId: 44
    }, {num: 3, color: 'Light yellow', r: 251, g: 230, b: 150, a: 1, BricklinkId: 33}, {
      num: 11,
      color: 'Pastel Blue',
      r: 53,
      g: 146,
      b: 195,
      a: 1,
      BricklinkId: 72
    }, {num: 124, color: 'Bright reddish violet', r: 146, g: 57, b: 120, a: 1, BricklinkId: 71}, {
      num: 102,
      color: 'Medium blue',
      r: 90,
      g: 147,
      b: 219,
      a: 1,
      BricklinkId: 42
    }, {num: 312, color: 'Medium Nougat', r: 204, g: 112, b: 42, a: 1, BricklinkId: 150}, {
      num: 29,
      color: 'Medium green',
      r: 115,
      g: 220,
      b: 161,
      a: 1,
      BricklinkId: 37
    }, {num: 268, color: 'Medium Lilac', r: 63, g: 54, b: 145, a: 1, BricklinkId: 89}, {
      num: 115,
      color: 'Med. yellowish green',
      r: 199,
      g: 210,
      b: 60,
      a: 1,
      BricklinkId: 76
    }, {num: 105, color: 'Br. yellowish orange', r: 255, g: 167, b: 11, a: 1, BricklinkId: 31}, {
      num: 194,
      color: 'Medium stone grey',
      r: 160,
      g: 165,
      b: 169,
      a: 1,
      BricklinkId: 86
    }, {num: 200, color: 'Lemon Metallic', r: 0, g: 0, b: 0, a: 1, BricklinkId: 70}, {
      num: 183,
      color: 'Metallic White',
      r: 0,
      g: 0,
      b: 0,
      a: 1,
      BricklinkId: 0
    }, {num: 140, color: 'Earth blue', r: 10, g: 52, b: 99, a: 1, BricklinkId: 63}, {
      num: 25,
      color: 'Earth Orange',
      r: 88,
      g: 57,
      b: 39,
      a: 1,
      BricklinkId: 8
    }, {num: 27, color: 'Dark grey', r: 109, g: 110, b: 92, a: 1, BricklinkId: 10}, {
      num: 2,
      color: 'Grey',
      r: 155,
      g: 161,
      b: 157,
      a: 1,
      BricklinkId: 9
    }, {num: 106, color: 'Bright orange', r: 254, g: 138, b: 24, a: 1, BricklinkId: 4}, {
      num: 36,
      color: 'Light Yellowish Orange',
      r: 243,
      g: 207,
      b: 155,
      a: 1,
      BricklinkId: 96
    }, {num: 223, color: 'Light Pink', r: 254, g: 204, b: 207, a: 1, BricklinkId: 56}, {
      num: 145,
      color: 'Sand blue metallic',
      r: 121,
      g: 136,
      b: 161,
      a: 1,
      BricklinkId: 78
    }, {num: 139, color: 'Copper', r: 174, g: 122, b: 89, a: 1, BricklinkId: 84}, {
      num: 187,
      color: 'Sand Yellow Metallic',
      r: 180,
      g: 132,
      b: 85,
      a: 1,
      BricklinkId: 81
    }, {num: 148, color: 'Metallic Dark Grey', r: 87, g: 88, b: 87, a: 1, BricklinkId: 77}, {
      num: 297,
      color: 'Warm Gold',
      r: 170,
      g: 127,
      b: 46,
      a: 1,
      BricklinkId: 115
    }, {num: 127, color: 'Gold', r: 220, g: 188, b: 129, a: 1, BricklinkId: 61}, {
      num: 131,
      color: 'Silver',
      r: 156,
      g: 163,
      b: 168,
      a: 1,
      BricklinkId: 66
    }, {num: 16, color: 'Pink', r: 252, g: 151, b: 172, a: 1, BricklinkId: 23}, {
      num: 104,
      color: 'Bright violet',
      r: 129,
      g: 0,
      b: 123,
      a: 1,
      BricklinkId: 24
    }, {num: 21, color: 'Bright red', r: 201, g: 26, b: 9, a: 1, BricklinkId: 5}, {
      num: 192,
      color: 'Reddish Brown',
      r: 88,
      g: 42,
      b: 18,
      a: 1,
      BricklinkId: 88
    }, {num: 112, color: 'Medium Bluish Violet', r: 104, g: 116, b: 202, a: 1, BricklinkId: 97}, {
      num: 216,
      color: 'Rust',
      r: 179,
      g: 16,
      b: 4,
      a: 1,
      BricklinkId: 27
    }, {num: 4, color: 'Brick Red', r: 242, g: 112, b: 94, a: 1, BricklinkId: 25}, {
      num: 135,
      color: 'Sand blue',
      r: 96,
      g: 116,
      b: 161,
      a: 1,
      BricklinkId: 55
    }, {num: 151, color: 'Sand green', r: 160, g: 188, b: 172, a: 1, BricklinkId: 48}, {
      num: 136,
      color: 'Sand violet',
      r: 8,
      g: 69,
      b: 14,
      a: 1,
      BricklinkId: 54
    }, {num: 153, color: 'Sand red', r: 214, g: 117, b: 114, a: 1, BricklinkId: 58}, {
      num: 103,
      color: 'Light grey',
      r: 230,
      g: 227,
      b: 218,
      a: 1,
      BricklinkId: 49
    }, {num: 5, color: 'Brick yellow', r: 228, g: 205, b: 158, a: 1, BricklinkId: 2}, {
      num: 107,
      color: 'Bright bluish green',
      r: 0,
      g: 143,
      b: 155,
      a: 1,
      BricklinkId: 39
    }, {num: 294, color: 'Phosh. Green', r: 189, g: 198, b: 173, a: 1, BricklinkId: 118}, {
      num: 20,
      color: 'Nature',
      r: 255,
      g: 255,
      b: 255,
      a: 1,
      BricklinkId: 60
    }, {num: 110, color: 'Bright Bluish Violet', r: 67, g: 84, b: 163, a: 1, BricklinkId: 43}, {
      num: 1,
      color: 'White',
      r: 255,
      g: 255,
      b: 255,
      a: 1,
      BricklinkId: 1
    }, {num: 24, color: 'Bright yellow', r: 242, g: 205, b: 55, a: 1, BricklinkId: 3}];
  }
}
