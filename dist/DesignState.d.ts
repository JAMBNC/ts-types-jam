import { z } from "zod";
/**The complete design state containing dimensions, pages, and ingredients.*/
export declare const DesignState: z.ZodObject<{
    coatingLocations: z.ZodRecord<z.ZodAny, z.core.SomeType>;
    dimHeight: z.ZodObject<{
        v: z.ZodNumber;
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
    }, z.core.$strict>;
    dimWidth: z.ZodObject<{
        v: z.ZodNumber;
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
    }, z.core.$strict>;
    hasBuffer: z.ZodBoolean;
    pages: z.ZodRecord<z.core.$ZodRecordKey, z.core.SomeType>;
    pagesOrdered: z.ZodArray<z.ZodString>;
    ingredients: z.ZodRecord<z.core.$ZodRecordKey, z.core.SomeType>;
}, z.core.$strict>;
export type DesignState = z.infer<typeof DesignState>;
//# sourceMappingURL=DesignState.d.ts.map