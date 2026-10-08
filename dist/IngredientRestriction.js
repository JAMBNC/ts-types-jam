import { z } from "zod";
import { ContentWidgetsRestriction } from "./ContentWidgetsRestriction.js";
import { DeleteRestriction } from "./DeleteRestriction.js";
import { RotateRestriction } from "./RotateRestriction.js";
import { ScaleRestriction } from "./ScaleRestriction.js";
import { SelectRestriction } from "./SelectRestriction.js";
import { StyleWidgetsRestriction } from "./StyleWidgetsRestriction.js";
import { TransformWidgetsRestriction } from "./TransformWidgetsRestriction.js";
import { TranslateRestriction } from "./TranslateRestriction.js";
import { ZIndexRestriction } from "./ZIndexRestriction.js";
import { ZIndexWidgetsRestriction } from "./ZIndexWidgetsRestriction.js";
const _IngredientRestriction = z.union([
    ZIndexRestriction,
    SelectRestriction,
    ScaleRestriction,
    TranslateRestriction,
    RotateRestriction,
    TransformWidgetsRestriction,
    ZIndexWidgetsRestriction,
    ContentWidgetsRestriction,
    StyleWidgetsRestriction,
    DeleteRestriction,
]);
export const IngredientRestriction = _IngredientRestriction;
