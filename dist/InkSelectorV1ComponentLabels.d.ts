import { z } from "zod";
declare const _InkSelectorV1ComponentLabels: z.ZodObject<{
    "selectedInk.label": z.ZodDefault<z.ZodString>;
    "imageColors.label": z.ZodDefault<z.ZodString>;
}, z.core.$loose>;
type _InkSelectorV1ComponentLabelsSchema = typeof _InkSelectorV1ComponentLabels;
export interface InkSelectorV1ComponentLabelsSchema extends _InkSelectorV1ComponentLabelsSchema {
}
export declare const InkSelectorV1ComponentLabels: InkSelectorV1ComponentLabelsSchema;
export type InkSelectorV1ComponentLabels = z.infer<typeof InkSelectorV1ComponentLabels>;
export {};
//# sourceMappingURL=InkSelectorV1ComponentLabels.d.ts.map