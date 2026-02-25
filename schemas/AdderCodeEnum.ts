import { z } from "zod";
import { FoilColorAdderCode } from "./FoilColorAdderCode.js";
import { FoilCoverageAdderCode } from "./FoilCoverageAdderCode.js";
import { FoilStampAdderCode } from "./FoilStampAdderCode.js";
import { FrameTypeAdderCode } from "./FrameTypeAdderCode.js";
import { InkColorSide1AdderCode } from "./InkColorSide1AdderCode.js";
import { InkColorSide2AdderCode } from "./InkColorSide2AdderCode.js";
import { PrintMethodAdderCode } from "./PrintMethodAdderCode.js";
import { VariableAddressAdderCode } from "./VariableAddressAdderCode.js";

export const AdderCodeEnum = z.union([
  FoilColorAdderCode,
  FoilCoverageAdderCode,
  FoilStampAdderCode,
  FrameTypeAdderCode,
  InkColorSide1AdderCode,
  InkColorSide2AdderCode,
  PrintMethodAdderCode,
  VariableAddressAdderCode,
]);
export type AdderCodeEnum = z.infer<typeof AdderCodeEnum>;
