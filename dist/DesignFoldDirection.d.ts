import { z } from "zod";
declare const _DesignFoldDirection: z.ZodEnum<{
    mountain: "mountain";
    valley: "valley";
}>;
type _DesignFoldDirectionSchema = typeof _DesignFoldDirection;
export interface DesignFoldDirectionSchema extends _DesignFoldDirectionSchema {
}
/**Which way the sheet folds, seen from the printed side.*/
export declare const DesignFoldDirection: DesignFoldDirectionSchema;
export type DesignFoldDirection = z.infer<typeof DesignFoldDirection>;
export {};
//# sourceMappingURL=DesignFoldDirection.d.ts.map