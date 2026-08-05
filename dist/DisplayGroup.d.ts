import { z } from "zod";
declare const _DisplayGroup: z.ZodObject<{
    id: z.ZodString;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    pivots: z.ZodArray<import("./Pivot.js").PivotSchema>;
    products: z.ZodArray<import("./ProductListing.js").ProductListingSchema>;
    shoutOuts: z.ZodOptional<z.ZodArray<import("./ShoutOut.js").ShoutOutSchema>>;
}, z.core.$loose>;
type _DisplayGroupSchema = typeof _DisplayGroup;
export interface DisplayGroupSchema extends _DisplayGroupSchema {
}
export declare const DisplayGroup: DisplayGroupSchema;
export type DisplayGroup = z.infer<typeof DisplayGroup>;
export {};
//# sourceMappingURL=DisplayGroup.d.ts.map