import { z } from "zod";
/**The response from the design save endpoint.*/
export declare const DesignerSaveResponse: z.ZodObject<{
    status: z.ZodBoolean;
    designId: z.ZodString;
}, z.core.$strict>;
export type DesignerSaveResponse = z.infer<typeof DesignerSaveResponse>;
//# sourceMappingURL=DesignerSaveResponse.d.ts.map