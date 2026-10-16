import { z } from "zod";
import { Dimension } from "./Dimension.js";
import { Path } from "./Path.js";

const _DesignFixture = z
  .object({
    /**The catalog code, e.g. "h1". For slits, the kind in the legacy adder code.*/
    code: z
      .string()
      .describe(
        'The catalog code, e.g. "h1". For slits, the kind in the legacy adder code.',
      ),
    /**The anchor role this fixture sits on, e.g. "slit".*/
    family: z
      .string()
      .describe('The anchor role this fixture sits on, e.g. "slit".'),
    label: z.string().optional(),
    /**A grouping a person picks from, e.g. businessCard, brochure, cd, flash, key.*/
    category: z
      .string()
      .describe(
        "A grouping a person picks from, e.g. businessCard, brochure, cd, flash, key.",
      )
      .optional(),
    width: Dimension,
    height: Dimension,
    /**The cuts, one open path each, in the art box's frame with the origin at its top-left.*/
    paths: z
      .array(Path)
      .describe(
        "The cuts, one open path each, in the art box's frame with the origin at its top-left.",
      ),
    /**A thumbnail a person picks from.*/
    previewUrl: z
      .string()
      .describe("A thumbnail a person picks from.")
      .optional(),
    /**Bumped when the geometry changes. Stamped on every render that drew it, because a design stores only the code.*/
    version: z
      .number()
      .int()
      .gte(1)
      .describe(
        "Bumped when the geometry changes. Stamped on every render that drew it, because a design stores only the code.",
      ),
  })
  .strict()
  .describe(
    "A catalog shape a purchase or a style places on an anchor: a business card slit, later a ribbon or a window. Drawn once in its own frame and placed by transform, so hermes draws it with the guide code it has and the vendor plate strokes it with the cut path code it has.",
  );
type _DesignFixtureSchema = typeof _DesignFixture;
export interface DesignFixtureSchema extends _DesignFixtureSchema {}
/**A catalog shape a purchase or a style places on an anchor: a business card slit, later a ribbon or a window. Drawn once in its own frame and placed by transform, so hermes draws it with the guide code it has and the vendor plate strokes it with the cut path code it has.*/
export const DesignFixture: DesignFixtureSchema = _DesignFixture;
export type DesignFixture = z.infer<typeof DesignFixture>;
