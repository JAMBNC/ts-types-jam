import { z } from "zod";
import { CoatingAdderCode } from "./CoatingAdderCode.js";
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
import { LayoutAdderCode } from "./LayoutAdderCode.js";
import { PrintMethodAdderCode } from "./PrintMethodAdderCode.js";
import { ProofAdderCode } from "./ProofAdderCode.js";
import { ReturnAddressAdderCode } from "./ReturnAddressAdderCode.js";
import { RollAdderCode } from "./RollAdderCode.js";
import { VariableAddressAdderCode } from "./VariableAddressAdderCode.js";
import { WhiteInkAdderCode } from "./WhiteInkAdderCode.js";
const _AdderCodeEnum = z.union([
    CoatingAdderCode,
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
    LayoutAdderCode,
    PrintMethodAdderCode,
    ProofAdderCode,
    ReturnAddressAdderCode,
    RollAdderCode,
    VariableAddressAdderCode,
    WhiteInkAdderCode,
]);
export const AdderCodeEnum = _AdderCodeEnum;
