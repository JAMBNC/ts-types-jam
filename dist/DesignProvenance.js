import { z } from "zod";
import { DesignSourceIssue } from "./DesignSourceIssue.js";
const _DesignProvenance = z
    .object({
    /**The detector or person that produced the interpretation.*/
    proposedBy: z
        .string()
        .describe("The detector or person that produced the interpretation.")
        .optional(),
    /**The prepress reviewer who confirmed it. Absent while the template is still a candidate.*/
    confirmedBy: z
        .string()
        .describe("The prepress reviewer who confirmed it. Absent while the template is still a candidate.")
        .optional(),
    /**SHA-256 of the artifact the interpretation was derived from.*/
    sourceSha256: z
        .string()
        .describe("SHA-256 of the artifact the interpretation was derived from.")
        .optional(),
    /**The intake settings version the interpreter ran on. Absent when it ran on fusion's bundled files.*/
    intakeSettingsVersion: z
        .number()
        .int()
        .gte(1)
        .describe("The intake settings version the interpreter ran on. Absent when it ran on fusion's bundled files.")
        .optional(),
    /**Problems with the artifact itself, found while preparing it, e.g. no ink names the die, or two files compete to be the back.*/
    sourceIssues: z
        .array(DesignSourceIssue)
        .describe("Problems with the artifact itself, found while preparing it, e.g. no ink names the die, or two files compete to be the back.")
        .optional(),
})
    .strict()
    .describe("Who proposed the interpretation and who signed off on it. Detectors propose, prepress confirms.");
/**Who proposed the interpretation and who signed off on it. Detectors propose, prepress confirms.*/
export const DesignProvenance = _DesignProvenance;
