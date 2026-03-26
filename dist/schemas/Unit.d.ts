import { z } from "zod";
/**The unit of measurement for dimensions.*/
export declare const Unit: z.ZodEnum<{
    in: "in";
    mm: "mm";
    px: "px";
    pt: "pt";
}>;
export type Unit = z.infer<typeof Unit>;
//# sourceMappingURL=Unit.d.ts.map