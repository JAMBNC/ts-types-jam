import { z } from "zod";
declare const _Status: z.ZodLiteral<"CREATED">;
type _StatusSchema = typeof _Status;
export interface StatusSchema extends _StatusSchema {
}
export declare const Status: StatusSchema;
export type Status = z.infer<typeof Status>;
export {};
//# sourceMappingURL=Status.d.ts.map