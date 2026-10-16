import { z } from "zod";

const _DesignPlacementRule = z
  .object({
    /**The value used when a placement does not name one.*/
    default: z
      .string()
      .describe("The value used when a placement does not name one.")
      .optional(),
    /**The values a person can pick, e.g. center, left, right.*/
    options: z
      .array(z.string())
      .describe("The values a person can pick, e.g. center, left, right.")
      .optional(),
    /**How far the art box is inset from the anchor span's ends, in millimetres.*/
    insetMm: z
      .number()
      .describe(
        "How far the art box is inset from the anchor span's ends, in millimetres.",
      )
      .optional(),
  })
  .strict()
  .describe(
    "How one placement key of a fixture family may be set: the value a fixture takes when nothing picks one, the values a person can pick from, and how far in from the anchor's span the art box sits.",
  );
type _DesignPlacementRuleSchema = typeof _DesignPlacementRule;
export interface DesignPlacementRuleSchema extends _DesignPlacementRuleSchema {}
/**How one placement key of a fixture family may be set: the value a fixture takes when nothing picks one, the values a person can pick from, and how far in from the anchor's span the art box sits.*/
export const DesignPlacementRule: DesignPlacementRuleSchema =
  _DesignPlacementRule;
export type DesignPlacementRule = z.infer<typeof DesignPlacementRule>;
