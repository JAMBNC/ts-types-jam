import { z } from "zod";
import { CoverageAdderCodeEnum } from "./CoverageAdderCodeEnum.js";
import { ExtraAdderCode } from "./ExtraAdderCode.js";
import { FoilColorAdderCode } from "./FoilColorAdderCode.js";
import { FoilCoverageAdderCode } from "./FoilCoverageAdderCode.js";
import { FoilStampAdderCode } from "./FoilStampAdderCode.js";
import { FrameTypeAdderCode } from "./FrameTypeAdderCode.js";
import { InkColorSide1AdderCode } from "./InkColorSide1AdderCode.js";
import { InkColorSide2AdderCode } from "./InkColorSide2AdderCode.js";
import { InkCoverageAdderCode } from "./InkCoverageAdderCode.js";
import { InkStampAdderCode } from "./InkStampAdderCode.js";
import { PrintMethodAdderCode } from "./PrintMethodAdderCode.js";
import { ReturnAddressAdderCode } from "./ReturnAddressAdderCode.js";
import { VariableAddressAdderCode } from "./VariableAddressAdderCode.js";
import { WhiteInkAdderCode } from "./WhiteInkAdderCode.js";
export const AdderCodeEnum = z.union([
    CoverageAdderCodeEnum,
    ExtraAdderCode,
    FoilColorAdderCode,
    FoilCoverageAdderCode,
    FoilStampAdderCode,
    FrameTypeAdderCode,
    InkColorSide1AdderCode,
    InkColorSide2AdderCode,
    InkCoverageAdderCode,
    InkStampAdderCode,
    PrintMethodAdderCode,
    ReturnAddressAdderCode,
    VariableAddressAdderCode,
    WhiteInkAdderCode,
]);
