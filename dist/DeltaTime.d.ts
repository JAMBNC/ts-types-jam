import { z } from "zod";
declare const _DeltaTime: z.ZodNumber;
type _DeltaTimeSchema = typeof _DeltaTime;
export interface DeltaTimeSchema extends _DeltaTimeSchema {
}
/**Time since the initial load in seconds*/
export declare const DeltaTime: DeltaTimeSchema;
export type DeltaTime = z.infer<typeof DeltaTime>;
export {};
//# sourceMappingURL=DeltaTime.d.ts.map