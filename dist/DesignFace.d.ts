import { z } from "zod";
declare const _DesignFace: z.ZodEnum<{
    print: "print";
    reverse: "reverse";
}>;
type _DesignFaceSchema = typeof _DesignFace;
export interface DesignFaceSchema extends _DesignFaceSchema {
}
/**Which side of the sheet the view shows.*/
export declare const DesignFace: DesignFaceSchema;
export type DesignFace = z.infer<typeof DesignFace>;
export {};
//# sourceMappingURL=DesignFace.d.ts.map