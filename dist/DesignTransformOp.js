import { z } from "zod";
import { DesignFlipOp } from "./DesignFlipOp.js";
import { DesignReflectOp } from "./DesignReflectOp.js";
import { DesignRotateOp } from "./DesignRotateOp.js";
const _DesignTransformOp = z
    .discriminatedUnion("op", [DesignReflectOp, DesignFlipOp, DesignRotateOp])
    .describe("One step of a panel's placement transform. A tagged union so prepress can compose the assembly a die actually has, op by op.");
/**One step of a panel's placement transform. A tagged union so prepress can compose the assembly a die actually has, op by op.*/
export const DesignTransformOp = _DesignTransformOp;
