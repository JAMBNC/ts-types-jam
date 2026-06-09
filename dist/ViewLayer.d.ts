import { z } from "zod";
export declare const ViewLayer: z.ZodEnum<{
    background: "background";
    bleed: "bleed";
    mask: "mask";
    print: "print";
}>;
export type ViewLayer = z.infer<typeof ViewLayer>;
//# sourceMappingURL=ViewLayer.d.ts.map