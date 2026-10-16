import { z } from "zod";
declare const _DesignFoldEditMode: z.ZodEnum<{
    propose: "propose";
    rederive: "rederive";
}>;
type _DesignFoldEditModeSchema = typeof _DesignFoldEditMode;
export interface DesignFoldEditModeSchema extends _DesignFoldEditModeSchema {
}
/**How the fold engine treats the edited inputs: rederive keeps the views and re-derives their placements, propose lets it propose views afresh.*/
export declare const DesignFoldEditMode: DesignFoldEditModeSchema;
export type DesignFoldEditMode = z.infer<typeof DesignFoldEditMode>;
export {};
//# sourceMappingURL=DesignFoldEditMode.d.ts.map