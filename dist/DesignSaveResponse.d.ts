import { z } from "zod";
/**The response from the design save endpoint.*/
export declare const DesignSaveResponse: z.ZodObject<{
    status: z.ZodBoolean;
    designId: z.ZodString;
}, z.core.$strict>;
export type DesignSaveResponse = z.infer<typeof DesignSaveResponse>;
//# sourceMappingURL=DesignSaveResponse.d.ts.map