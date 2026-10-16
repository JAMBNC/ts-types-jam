import { z } from "zod";
declare const _DesignFindingSeverity: z.ZodEnum<{
    error: "error";
    info: "info";
    warning: "warning";
}>;
type _DesignFindingSeveritySchema = typeof _DesignFindingSeverity;
export interface DesignFindingSeveritySchema extends _DesignFindingSeveritySchema {
}
export declare const DesignFindingSeverity: DesignFindingSeveritySchema;
export type DesignFindingSeverity = z.infer<typeof DesignFindingSeverity>;
export {};
//# sourceMappingURL=DesignFindingSeverity.d.ts.map