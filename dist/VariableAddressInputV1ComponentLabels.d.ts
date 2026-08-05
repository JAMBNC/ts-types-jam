import { z } from "zod";
declare const _VariableAddressInputV1ComponentLabels: z.ZodObject<{
    "download.description": z.ZodDefault<z.ZodString>;
    "download.button.label": z.ZodDefault<z.ZodString>;
    "download.button.icon": z.ZodDefault<z.ZodString>;
    "upload.description": z.ZodDefault<z.ZodString>;
    "upload.button.label": z.ZodDefault<z.ZodString>;
    "upload.button.icon": z.ZodDefault<z.ZodString>;
    "upload.success.label": z.ZodDefault<z.ZodString>;
    "upload.success.icon": z.ZodDefault<z.ZodString>;
    "upload.error.label": z.ZodDefault<z.ZodString>;
    "upload.error.icon": z.ZodDefault<z.ZodString>;
    "addressPreview.label": z.ZodDefault<z.ZodString>;
}, z.core.$loose>;
type _VariableAddressInputV1ComponentLabelsSchema = typeof _VariableAddressInputV1ComponentLabels;
export interface VariableAddressInputV1ComponentLabelsSchema extends _VariableAddressInputV1ComponentLabelsSchema {
}
export declare const VariableAddressInputV1ComponentLabels: VariableAddressInputV1ComponentLabelsSchema;
export type VariableAddressInputV1ComponentLabels = z.infer<typeof VariableAddressInputV1ComponentLabels>;
export {};
//# sourceMappingURL=VariableAddressInputV1ComponentLabels.d.ts.map