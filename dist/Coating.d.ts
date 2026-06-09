import { z } from "zod";
/**A coating or coloring applied to the document*/
export declare const Coating: z.ZodObject<{
    identifier: z.ZodString;
    opacity: z.ZodNumber;
    texture: z.ZodUnion<readonly [z.ZodObject<{
        hex: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        src: z.ZodString;
    }, z.core.$strict>]>;
    type: z.ZodEnum<{
        image: "image";
        color: "color";
        blank: "blank";
    }>;
    zIndex: z.ZodNumber;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strict>;
export type Coating = z.infer<typeof Coating>;
//# sourceMappingURL=Coating.d.ts.map