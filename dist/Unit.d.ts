import { z } from "zod";
/**The unit of measurement for dimensions.*/
export declare const Unit: z.ZodEnum<{
    in: "in";
    mm: "mm";
    pt: "pt";
    px: "px";
}>;
export type Unit = z.infer<typeof Unit>;
//# sourceMappingURL=Unit.d.ts.map