import { z } from "zod";
/**A font definition for injection into the designer.*/
export declare const DesignerFont: z.ZodObject<{
    uuid: z.ZodString;
    name: z.ZodString;
}, z.core.$strict>;
export type DesignerFont = z.infer<typeof DesignerFont>;
//# sourceMappingURL=DesignerFont.d.ts.map