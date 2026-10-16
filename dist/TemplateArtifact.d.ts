import { z } from "zod";
declare const _TemplateArtifact: z.ZodObject<{
    sha256: z.ZodString;
    url: z.ZodString;
}, z.core.$strict>;
type _TemplateArtifactSchema = typeof _TemplateArtifact;
export interface TemplateArtifactSchema extends _TemplateArtifactSchema {
}
/**The stored press file. Content-addressed, because identity comes from the upload action and not from anything embedded in the file.*/
export declare const TemplateArtifact: TemplateArtifactSchema;
export type TemplateArtifact = z.infer<typeof TemplateArtifact>;
export {};
//# sourceMappingURL=TemplateArtifact.d.ts.map