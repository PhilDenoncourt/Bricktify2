import {Injectable} from '@angular/core';
import { ColorService } from "./color.service";
import { PartsService } from "./parts.service";

import {IPart} from '../models/ipart';
import {IColor} from '../models/icolor';
import {IBrick} from '../models/ibrick';

declare var _: _.LoDashStatic;

@Injectable()
export class BricksService {
  public bricks: [IBrick];

  constructor(public colors: ColorService, public parts:PartsService) {
    this.bricks = [{designId: 3005, color: 26}, {designId: 3005, color: 23}, {
      designId: 3005,
      color: 112
    }, {designId: 3005, color: 37}, {designId: 3005, color: 212}, {designId: 3005, color: 191}, {
      designId: 3005,
      color: 226
    }, {designId: 3005, color: 222}, {designId: 3005, color: 25}, {designId: 3005, color: 321}, {
      designId: 3005,
      color: 140
    }, {designId: 3005, color: 199}, {designId: 3005, color: 308}, {designId: 3005, color: 217}, {
      designId: 3005,
      color: 27
    }, {designId: 3005, color: 141}, {designId: 3005, color: 38}, {designId: 3005, color: 221}, {
      designId: 3005,
      color: 268
    }, {designId: 3005, color: 154}, {designId: 3005, color: 138}, {designId: 3005, color: 107}, {
      designId: 3005,
      color: 18
    }, {designId: 3005, color: 28}, {designId: 3005, color: 323}, {designId: 3005, color: 45}, {
      designId: 3005,
      color: 194
    }, {designId: 3005, color: 2}, {designId: 3005, color: 120}, {designId: 3005, color: 125}, {
      designId: 3005,
      color: 198
    }, {designId: 3005, color: 3}, {designId: 3005, color: 119}, {designId: 3005, color: 11}, {
      designId: 3005,
      color: 124
    }, {designId: 3005, color: 102}, {designId: 3005, color: 312}, {designId: 3005, color: 22}, {
      designId: 3005,
      color: 29
    }, {designId: 3005, color: 106}, {designId: 3005, color: 16}, {designId: 3005, color: 104}, {
      designId: 3005,
      color: 21
    }, {designId: 3005, color: 192}, {designId: 3005, color: 135}, {designId: 3005, color: 151}, {
      designId: 3005,
      color: 153
    }, {designId: 3005, color: 232}, {designId: 3005, color: 5}, {designId: 3005, color: 103}, {
      designId: 3005,
      color: 1
    }, {designId: 3005, color: 24}, {designId: 3005, color: 111}, {designId: 3005, color: 311}, {
      designId: 3005,
      color: 40
    }, {designId: 3005, color: 43}, {designId: 3005, color: 113}, {designId: 3005, color: 48}, {
      designId: 3005,
      color: 42
    }, {designId: 3005, color: 143}, {designId: 3005, color: 49}, {designId: 3005, color: 47}, {
      designId: 3005,
      color: 157
    }, {designId: 3005, color: 126}, {designId: 3005, color: 41}, {designId: 3005, color: 44}, {
      designId: 3005,
      color: 301
    }, {designId: 3005, color: 131}, {designId: 3005, color: 114}, {designId: 3004, color: 26}, {
      designId: 3004,
      color: 23
    }, {designId: 3004, color: 112}, {designId: 3004, color: 37}, {designId: 3004, color: 212}, {
      designId: 3004,
      color: 191
    }, {designId: 3004, color: 226}, {designId: 3004, color: 222}, {designId: 3004, color: 25}, {
      designId: 3004,
      color: 321
    }, {designId: 3004, color: 140}, {designId: 3004, color: 199}, {designId: 3004, color: 308}, {
      designId: 3004,
      color: 217
    }, {designId: 3004, color: 27}, {designId: 3004, color: 141}, {designId: 3004, color: 38}, {
      designId: 3004,
      color: 221
    }, {designId: 3004, color: 268}, {designId: 3004, color: 154}, {designId: 3004, color: 138}, {
      designId: 3004,
      color: 107
    }, {designId: 3004, color: 18}, {designId: 3004, color: 28}, {designId: 3004, color: 323}, {
      designId: 3004,
      color: 45
    }, {designId: 3004, color: 194}, {designId: 3004, color: 2}, {designId: 3004, color: 120}, {
      designId: 3004,
      color: 125
    }, {designId: 3004, color: 198}, {designId: 3004, color: 3}, {designId: 3004, color: 119}, {
      designId: 3004,
      color: 11
    }, {designId: 3004, color: 124}, {designId: 3004, color: 102}, {designId: 3004, color: 312}, {
      designId: 3004,
      color: 22
    }, {designId: 3004, color: 29}, {designId: 3004, color: 106}, {designId: 3004, color: 16}, {
      designId: 3004,
      color: 104
    }, {designId: 3004, color: 21}, {designId: 3004, color: 192}, {designId: 3004, color: 135}, {
      designId: 3004,
      color: 151
    }, {designId: 3004, color: 153}, {designId: 3004, color: 232}, {designId: 3004, color: 5}, {
      designId: 3004,
      color: 103
    }, {designId: 3004, color: 1}, {designId: 3004, color: 24}, {designId: 3004, color: 111}, {
      designId: 3004,
      color: 311
    }, {designId: 3004, color: 40}, {designId: 3004, color: 43}, {designId: 3004, color: 113}, {
      designId: 3004,
      color: 48
    }, {designId: 3004, color: 42}, {designId: 3004, color: 143}, {designId: 3004, color: 49}, {
      designId: 3004,
      color: 47
    }, {designId: 3004, color: 157}, {designId: 3004, color: 126}, {designId: 3004, color: 41}, {
      designId: 3004,
      color: 44
    }, {designId: 3004, color: 301}, {designId: 3004, color: 131}, {designId: 3004, color: 114}, {
      designId: 3622,
      color: 118
    }, {designId: 3622, color: 26}, {designId: 3622, color: 23}, {designId: 3622, color: 212}, {
      designId: 3622,
      color: 222
    }, {designId: 3622, color: 25}, {designId: 3622, color: 199}, {designId: 3622, color: 27}, {
      designId: 3622,
      color: 141
    }, {designId: 3622, color: 38}, {designId: 3622, color: 221}, {designId: 3622, color: 268}, {
      designId: 3622,
      color: 28
    }, {designId: 3622, color: 194}, {designId: 3622, color: 2}, {designId: 3622, color: 125}, {
      designId: 3622,
      color: 119
    }, {designId: 3622, color: 11}, {designId: 3622, color: 102}, {designId: 3622, color: 312}, {
      designId: 3622,
      color: 22
    }, {designId: 3622, color: 105}, {designId: 3622, color: 106}, {designId: 3622, color: 16}, {
      designId: 3622,
      color: 104
    }, {designId: 3622, color: 21}, {designId: 3622, color: 192}, {designId: 3622, color: 151}, {
      designId: 3622,
      color: 5
    }, {designId: 3622, color: 1}, {designId: 3622, color: 24}, {designId: 3622, color: 40}, {
      designId: 3622,
      color: 43
    }, {designId: 3622, color: 113}, {designId: 3622, color: 42}, {designId: 3622, color: 126}, {
      designId: 3622,
      color: 131
    }, {designId: 3010, color: 118}, {designId: 3010, color: 26}, {designId: 3010, color: 23}, {
      designId: 3010,
      color: 37
    }, {designId: 3010, color: 191}, {designId: 3010, color: 226}, {designId: 3010, color: 222}, {
      designId: 3010,
      color: 25
    }, {designId: 3010, color: 140}, {designId: 3010, color: 199}, {designId: 3010, color: 27}, {
      designId: 3010,
      color: 141
    }, {designId: 3010, color: 38}, {designId: 3010, color: 221}, {designId: 3010, color: 268}, {
      designId: 3010,
      color: 154
    }, {designId: 3010, color: 138}, {designId: 3010, color: 18}, {designId: 3010, color: 28}, {
      designId: 3010,
      color: 45
    }, {designId: 3010, color: 194}, {designId: 3010, color: 2}, {designId: 3010, color: 198}, {
      designId: 3010,
      color: 39
    }, {designId: 3010, color: 3}, {designId: 3010, color: 119}, {designId: 3010, color: 11}, {
      designId: 3010,
      color: 124
    }, {designId: 3010, color: 102}, {designId: 3010, color: 312}, {designId: 3010, color: 22}, {
      designId: 3010,
      color: 29
    }, {designId: 3010, color: 105}, {designId: 3010, color: 106}, {designId: 3010, color: 16}, {
      designId: 3010,
      color: 104
    }, {designId: 3010, color: 21}, {designId: 3010, color: 192}, {designId: 3010, color: 135}, {
      designId: 3010,
      color: 151
    }, {designId: 3010, color: 5}, {designId: 3010, color: 110}, {designId: 3010, color: 1}, {
      designId: 3010,
      color: 24
    }, {designId: 3010, color: 111}, {designId: 3010, color: 40}, {designId: 3010, color: 43}, {
      designId: 3010,
      color: 113
    }, {designId: 3010, color: 48}, {designId: 3010, color: 42}, {designId: 3010, color: 143}, {
      designId: 3010,
      color: 41
    }, {designId: 3010, color: 44}, {designId: 3010, color: 131}, {designId: 3010, color: 114}, {
      designId: 3010,
      color: 129
    }, {designId: 3009, color: 118}, {designId: 3009, color: 26}, {designId: 3009, color: 23}, {
      designId: 3009,
      color: 112
    }, {designId: 3009, color: 37}, {designId: 3009, color: 191}, {designId: 3009, color: 226}, {
      designId: 3009,
      color: 25
    }, {designId: 3009, color: 321}, {designId: 3009, color: 199}, {designId: 3009, color: 217}, {
      designId: 3009,
      color: 27
    }, {designId: 3009, color: 141}, {designId: 3009, color: 38}, {designId: 3009, color: 268}, {
      designId: 3009,
      color: 154
    }, {designId: 3009, color: 138}, {designId: 3009, color: 18}, {designId: 3009, color: 28}, {
      designId: 3009,
      color: 323
    }, {designId: 3009, color: 194}, {designId: 3009, color: 2}, {designId: 3009, color: 198}, {
      designId: 3009,
      color: 100
    }, {designId: 3009, color: 3}, {designId: 3009, color: 119}, {designId: 3009, color: 11}, {
      designId: 3009,
      color: 124
    }, {designId: 3009, color: 102}, {designId: 3009, color: 312}, {designId: 3009, color: 106}, {
      designId: 3009,
      color: 16
    }, {designId: 3009, color: 104}, {designId: 3009, color: 21}, {designId: 3009, color: 192}, {
      designId: 3009,
      color: 135
    }, {designId: 3009, color: 151}, {designId: 3009, color: 153}, {designId: 3009, color: 5}, {
      designId: 3009,
      color: 1
    }, {designId: 3009, color: 24}, {designId: 3009, color: 40}, {designId: 3009, color: 43}, {
      designId: 3009,
      color: 47
    }, {designId: 3009, color: 41}, {designId: 3009, color: 44}, {designId: 3009, color: 131}, {
      designId: 3008,
      color: 26
    }, {designId: 3008, color: 23}, {designId: 3008, color: 25}, {designId: 3008, color: 140}, {
      designId: 3008,
      color: 199
    }, {designId: 3008, color: 308}, {designId: 3008, color: 27}, {designId: 3008, color: 38}, {
      designId: 3008,
      color: 221
    }, {designId: 3008, color: 268}, {designId: 3008, color: 154}, {designId: 3008, color: 138}, {
      designId: 3008,
      color: 28
    }, {designId: 3008, color: 45}, {designId: 3008, color: 194}, {designId: 3008, color: 283}, {
      designId: 3008,
      color: 2
    }, {designId: 3008, color: 119}, {designId: 3008, color: 11}, {designId: 3008, color: 312}, {
      designId: 3008,
      color: 21
    }, {designId: 3008, color: 192}, {designId: 3008, color: 151}, {designId: 3008, color: 5}, {
      designId: 3008,
      color: 1
    }, {designId: 3008, color: 24}, {designId: 3008, color: 40}, {designId: 3008, color: 48}, {
      designId: 3008,
      color: 182
    }, {designId: 3008, color: 131}, {designId: 3003, color: 26}, {designId: 3003, color: 23}, {
      designId: 3003,
      color: 37
    }, {designId: 3003, color: 222}, {designId: 3003, color: 25}, {designId: 3003, color: 140}, {
      designId: 3003,
      color: 199
    }, {designId: 3003, color: 27}, {designId: 3003, color: 141}, {designId: 3003, color: 38}, {
      designId: 3003,
      color: 221
    }, {designId: 3003, color: 268}, {designId: 3003, color: 154}, {designId: 3003, color: 138}, {
      designId: 3003,
      color: 107
    }, {designId: 3003, color: 28}, {designId: 3003, color: 45}, {designId: 3003, color: 194}, {
      designId: 3003,
      color: 2
    }, {designId: 3003, color: 6}, {designId: 3003, color: 223}, {designId: 3003, color: 198}, {
      designId: 3003,
      color: 39
    }, {designId: 3003, color: 3}, {designId: 3003, color: 119}, {designId: 3003, color: 11}, {
      designId: 3003,
      color: 124
    }, {designId: 3003, color: 102}, {designId: 3003, color: 312}, {designId: 3003, color: 22}, {
      designId: 3003,
      color: 105
    }, {designId: 3003, color: 106}, {designId: 3003, color: 16}, {designId: 3003, color: 104}, {
      designId: 3003,
      color: 21
    }, {designId: 3003, color: 192}, {designId: 3003, color: 135}, {designId: 3003, color: 151}, {
      designId: 3003,
      color: 153
    }, {designId: 3003, color: 5}, {designId: 3003, color: 1}, {designId: 3003, color: 24}, {
      designId: 3003,
      color: 111
    }, {designId: 3003, color: 40}, {designId: 3003, color: 43}, {designId: 3003, color: 113}, {
      designId: 3003,
      color: 48
    }, {designId: 3003, color: 42}, {designId: 3003, color: 182}, {designId: 3003, color: 41}, {
      designId: 3003,
      color: 44
    }, {designId: 3003, color: 131}, {designId: 3003, color: 117}, {designId: 3003, color: 114}, {
      designId: 3003,
      color: 50
    }, {designId: 3003, color: 294}, {designId: 3003, color: 28}, {designId: 3003, color: 323}, {
      designId: 3003,
      color: 45
    }, {designId: 3003, color: 194}, {designId: 3003, color: 283}, {designId: 3003, color: 2}, {
      designId: 3003,
      color: 6
    }, {designId: 3003, color: 120}, {designId: 3003, color: 125}, {designId: 3003, color: 223}, {
      designId: 3003,
      color: 198
    }, {designId: 3003, color: 100}, {designId: 3003, color: 116}, {designId: 3003, color: 39}, {
      designId: 3003,
      color: 3
    }, {designId: 3003, color: 119}, {designId: 3003, color: 11}, {designId: 3003, color: 124}, {
      designId: 3003,
      color: 102
    }, {designId: 3003, color: 312}, {designId: 3003, color: 22}, {designId: 3003, color: 29}, {
      designId: 3003,
      color: 115
    }, {designId: 3003, color: 105}, {designId: 3003, color: 145}, {designId: 3003, color: 200}, {
      designId: 3003,
      color: 20
    }, {designId: 3003, color: 106}, {designId: 3003, color: 148}, {designId: 3003, color: 297}, {
      designId: 3003,
      color: 127
    }, {designId: 3003, color: 131}, {designId: 3003, color: 16}, {designId: 3003, color: 104}, {
      designId: 3003,
      color: 21
    }, {designId: 3003, color: 192}, {designId: 3003, color: 216}, {designId: 3003, color: 4}, {
      designId: 3003,
      color: 135
    }, {designId: 3003, color: 151}, {designId: 3003, color: 136}, {designId: 3003, color: 153}, {
      designId: 3003,
      color: 232
    }, {designId: 3003, color: 132}, {designId: 3003, color: 5}, {designId: 3003, color: 111}, {
      designId: 3003,
      color: 311
    }, {designId: 3003, color: 40}, {designId: 3003, color: 43}, {designId: 3003, color: 113}, {
      designId: 3003,
      color: 48
    }, {designId: 3003, color: 42}, {designId: 3003, color: 143}, {designId: 3003, color: 49}, {
      designId: 3003,
      color: 47
    }, {designId: 3003, color: 157}, {designId: 3003, color: 182}, {designId: 3003, color: 126}, {
      designId: 3003,
      color: 41
    }, {designId: 3003, color: 44}, {designId: 3003, color: 208}, {designId: 3003, color: 103}, {
      designId: 3003,
      color: 36
    }, {designId: 3003, color: 110}, {designId: 3003, color: 1}, {designId: 3003, color: 24}, {
      designId: 3002,
      color: 26
    }, {designId: 3002, color: 23}, {designId: 3002, color: 222}, {designId: 3002, color: 25}, {
      designId: 3002,
      color: 199
    }, {designId: 3002, color: 308}, {designId: 3002, color: 27}, {designId: 3002, color: 141}, {
      designId: 3002,
      color: 38
    }, {designId: 3002, color: 221}, {designId: 3002, color: 268}, {designId: 3002, color: 154}, {
      designId: 3002,
      color: 138
    }, {designId: 3002, color: 28}, {designId: 3002, color: 45}, {designId: 3002, color: 194}, {
      designId: 3002,
      color: 2
    }, {designId: 3002, color: 6}, {designId: 3002, color: 223}, {designId: 3002, color: 119}, {
      designId: 3002,
      color: 11
    }, {designId: 3002, color: 124}, {designId: 3002, color: 102}, {designId: 3002, color: 29}, {
      designId: 3002,
      color: 105
    }, {designId: 3002, color: 106}, {designId: 3002, color: 16}, {designId: 3002, color: 21}, {
      designId: 3002,
      color: 192
    }, {designId: 3002, color: 135}, {designId: 3002, color: 151}, {designId: 3002, color: 5}, {
      designId: 3002,
      color: 36
    }, {designId: 3002, color: 1}, {designId: 3002, color: 24}, {designId: 3002, color: 40}, {
      designId: 3002,
      color: 131
    }, {designId: 3001, color: 26}, {designId: 3001, color: 23}, {designId: 3001, color: 212}, {
      designId: 3001,
      color: 191
    }, {designId: 3001, color: 226}, {designId: 3001, color: 222}, {designId: 3001, color: 25}, {
      designId: 3001,
      color: 321
    }, {designId: 3001, color: 140}, {designId: 3001, color: 199}, {designId: 3001, color: 27}, {
      designId: 3001,
      color: 141
    }, {designId: 3001, color: 38}, {designId: 3001, color: 221}, {designId: 3001, color: 268}, {
      designId: 3001,
      color: 154
    }, {designId: 3001, color: 138}, {designId: 3001, color: 107}, {designId: 3001, color: 18}, {
      designId: 3001,
      color: 28
    }, {designId: 3001, color: 323}, {designId: 3001, color: 45}, {designId: 3001, color: 194}, {
      designId: 3001,
      color: 283
    }, {designId: 3001, color: 2}, {designId: 3001, color: 223}, {designId: 3001, color: 198}, {
      designId: 3001,
      color: 3
    }, {designId: 3001, color: 119}, {designId: 3001, color: 11}, {designId: 3001, color: 124}, {
      designId: 3001,
      color: 102
    }, {designId: 3001, color: 312}, {designId: 3001, color: 105}, {designId: 3001, color: 106}, {
      designId: 3001,
      color: 16
    }, {designId: 3001, color: 104}, {designId: 3001, color: 21}, {designId: 3001, color: 192}, {
      designId: 3001,
      color: 135
    }, {designId: 3001, color: 151}, {designId: 3001, color: 153}, {designId: 3001, color: 5}, {
      designId: 3001,
      color: 36
    }, {designId: 3001, color: 1}, {designId: 3001, color: 24}, {designId: 3001, color: 40}, {
      designId: 3001,
      color: 43
    }, {designId: 3001, color: 182}, {designId: 3001, color: 41}, {designId: 3001, color: 44}, {
      designId: 3001,
      color: 301
    }, {designId: 3001, color: 131}, {designId: 3001, color: 20}, {designId: 3007, color: 26}, {
      designId: 3007,
      color: 23
    }, {designId: 3007, color: 226}, {designId: 3007, color: 25}, {designId: 3007, color: 140}, {
      designId: 3007,
      color: 199
    }, {designId: 3007, color: 27}, {designId: 3007, color: 141}, {designId: 3007, color: 221}, {
      designId: 3007,
      color: 28
    }, {designId: 3007, color: 194}, {designId: 3007, color: 283}, {designId: 3007, color: 2}, {
      designId: 3007,
      color: 3
    }, {designId: 3007, color: 119}, {designId: 3007, color: 11}, {designId: 3007, color: 102}, {
      designId: 3007,
      color: 106
    }, {designId: 3007, color: 21}, {designId: 3007, color: 151}, {designId: 3007, color: 5}, {
      designId: 3007,
      color: 36
    }, {designId: 3007, color: 1}, {designId: 3007, color: 24}, {designId: 3007, color: 40}, {
      designId: 3007,
      color: 131
    }, {designId: 3006, color: 26}, {designId: 3006, color: 23}, {designId: 3006, color: 25}, {
      designId: 3006,
      color: 199
    }, {designId: 3006, color: 27}, {designId: 3006, color: 38}, {designId: 3006, color: 28}, {
      designId: 3006,
      color: 194
    }, {designId: 3006, color: 2}, {designId: 3006, color: 11}, {designId: 3006, color: 106}, {
      designId: 3006,
      color: 21
    }, {designId: 3006, color: 192}, {designId: 3006, color: 135}, {designId: 3006, color: 151}, {
      designId: 3006,
      color: 5
    }, {designId: 3006, color: 1}, {designId: 3006, color: 24}, {designId: 3006, color: 40}, {
      designId: 3006,
      color: 131
    }];
  }

  public getAllColors(): IColor[] {
    return _.sortBy(this.colors.colors, 'color');
  }

  public getPartsWithMultipleStudsForColor(color:number): IPart[] {
    let bricks = _.filter(_.reject(this.bricks, {designId:3005}), {color:color});
    return _.filter(this.parts.parts, (part:IPart)=> {
      return _.some(bricks, (brick:IBrick)=> {
        return brick.designId == part.designId;
      });
    });
  }

  public getOneByOneBrick(color:number):IBrick {
    return _.find(this.bricks,{color:color});
  }

  public getPart(n1:number, n2:number):IPart {
    return _.find(this.parts.parts,(part:IPart)=> {
      return (part.n1 == n1 && part.n2==n2) ||(part.n1 == n2 && part.n2==n1);
    })
  }

  public getBrick(designId:number, color:number):IBrick {
    return _.find(this.bricks, {designId:designId, color:color});
  }
}
