import { z } from "zod";
const _TemplateArtifact = z
    .object({
    /**SHA-256 of the artifact bytes.*/
    sha256: z.string().describe("SHA-256 of the artifact bytes."),
    /**Where the artifact is stored.*/
    url: z.string().describe("Where the artifact is stored."),
})
    .strict()
    .describe("The stored press file. Content-addressed, because identity comes from the upload action and not from anything embedded in the file.");
/**The stored press file. Content-addressed, because identity comes from the upload action and not from anything embedded in the file.*/
export const TemplateArtifact = _TemplateArtifact;
