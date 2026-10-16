import { z } from "zod";
const _DesignFoldDirection = z
    .enum(["mountain", "valley"])
    .describe("Which way the sheet folds, seen from the printed side.");
/**Which way the sheet folds, seen from the printed side.*/
export const DesignFoldDirection = _DesignFoldDirection;
