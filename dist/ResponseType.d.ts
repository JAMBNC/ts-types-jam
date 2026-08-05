import { z } from "zod";
declare const _ResponseType: z.ZodLiteral<"merchantResponse">;
type _ResponseTypeSchema = typeof _ResponseType;
export interface ResponseTypeSchema extends _ResponseTypeSchema {
}
export declare const ResponseType: ResponseTypeSchema;
export type ResponseType = z.infer<typeof ResponseType>;
export {};
//# sourceMappingURL=ResponseType.d.ts.map