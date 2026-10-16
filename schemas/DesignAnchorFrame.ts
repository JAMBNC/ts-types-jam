import { z } from "zod";
import { Dimension } from "./Dimension.js";

const _DesignAnchorFrame = z
  .object({
    x: Dimension,
    y: Dimension,
    width: Dimension,
    height: Dimension,
    /**Degrees clockwise on the flat sheet that make a fixture read upright in the anchor's home view. Absent is 0.*/
    rotation: z
      .number()
      .describe(
        "Degrees clockwise on the flat sheet that make a fixture read upright in the anchor's home view. Absent is 0.",
      )
      .optional(),
  })
  .strict()
  .describe(
    "The anchor's reference box on the flat sheet. A placement rule insets from the span; the rotation turns the fixture to read upright in the anchor's home view. A point fixture has a zero span, a line fixture a zero height.",
  );
type _DesignAnchorFrameSchema = typeof _DesignAnchorFrame;
export interface DesignAnchorFrameSchema extends _DesignAnchorFrameSchema {}
/**The anchor's reference box on the flat sheet. A placement rule insets from the span; the rotation turns the fixture to read upright in the anchor's home view. A point fixture has a zero span, a line fixture a zero height.*/
export const DesignAnchorFrame: DesignAnchorFrameSchema = _DesignAnchorFrame;
export type DesignAnchorFrame = z.infer<typeof DesignAnchorFrame>;
