import { z } from "zod";
import { DesignFindingSeverity } from "./DesignFindingSeverity.js";

const _DesignFinding = z
  .object({
    /**The check that found it, e.g. extraCovers or overhang.*/
    code: z
      .string()
      .describe("The check that found it, e.g. extraCovers or overhang."),
    severity: DesignFindingSeverity,
    /**What a reviewer reads.*/
    message: z.string().describe("What a reviewer reads."),
    /**The panel and view ids the finding is about.*/
    subjects: z
      .array(z.string())
      .describe("The panel and view ids the finding is about.")
      .optional(),
    /**Check-specific numbers, e.g. how far a panel reaches past its covers.*/
    detail: z
      .record(z.string(), z.any())
      .describe(
        "Check-specific numbers, e.g. how far a panel reaches past its covers.",
      )
      .optional(),
    /**Whether a reviewer can publish past this finding when it is an error. Absent means they can.*/
    overridable: z
      .boolean()
      .describe(
        "Whether a reviewer can publish past this finding when it is an error. Absent means they can.",
      )
      .optional(),
  })
  .strict()
  .describe(
    "One thing a preflight check found on an interpretation: which check, how much it matters, what a reviewer reads, and the panels or views it is about.",
  );
type _DesignFindingSchema = typeof _DesignFinding;
export interface DesignFindingSchema extends _DesignFindingSchema {}
/**One thing a preflight check found on an interpretation: which check, how much it matters, what a reviewer reads, and the panels or views it is about.*/
export const DesignFinding: DesignFindingSchema = _DesignFinding;
export type DesignFinding = z.infer<typeof DesignFinding>;
