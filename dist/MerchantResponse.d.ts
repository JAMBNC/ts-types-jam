import { z } from "zod";
declare const _MerchantResponse: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    location: z.ZodOptional<z.ZodString>;
    nickname: z.ZodOptional<z.ZodString>;
    response: z.ZodOptional<z.ZodString>;
    responseType: z.ZodOptional<import("./ResponseType.js").ResponseTypeSchema>;
    updatedAt: z.ZodOptional<z.ZodString>;
    votes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
}, z.core.$loose>;
type _MerchantResponseSchema = typeof _MerchantResponse;
export interface MerchantResponseSchema extends _MerchantResponseSchema {
}
export declare const MerchantResponse: MerchantResponseSchema;
export type MerchantResponse = z.infer<typeof MerchantResponse>;
export {};
//# sourceMappingURL=MerchantResponse.d.ts.map