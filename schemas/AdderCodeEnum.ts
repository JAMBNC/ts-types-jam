import { z } from "zod";
import { FoilColorAdderCode } from "./FoilColorAdderCode.js";
import { FoilCoverageAdderCode } from "./FoilCoverageAdderCode.js";
import { FoilStampAdderCode } from "./FoilStampAdderCode.js";
import { ForceAdderCode } from "./ForceAdderCode.js";
import { FrameTypeAdderCode } from "./FrameTypeAdderCode.js";
import { InkColorSide1AdderCode } from "./InkColorSide1AdderCode.js";
import { InkColorSide2AdderCode } from "./InkColorSide2AdderCode.js";
import { InkCoverageAdderCode } from "./InkCoverageAdderCode.js";
import { InkStampAdderCode } from "./InkStampAdderCode.js";
import { PrintMethodAdderCode } from "./PrintMethodAdderCode.js";
import { VariableAddressAdderCode } from "./VariableAddressAdderCode.js";
import { WhiteInkAdderCode } from "./WhiteInkAdderCode.js";

export const AdderCodeEnum = z.union([
  FoilColorAdderCode,
  FoilCoverageAdderCode,
  FoilStampAdderCode,
  ForceAdderCode,
  FrameTypeAdderCode,
  InkColorSide1AdderCode,
  InkColorSide2AdderCode,
  InkCoverageAdderCode,
  InkStampAdderCode,
  PrintMethodAdderCode,
  VariableAddressAdderCode,
  WhiteInkAdderCode,
]);
export type AdderCodeEnum = z.infer<typeof AdderCodeEnum>;
