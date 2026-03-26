import { z } from "zod";
export declare const MerchantResponse: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    location: z.ZodOptional<z.ZodString>;
    nickname: z.ZodOptional<z.ZodString>;
    response: z.ZodOptional<z.ZodString>;
    responseType: z.ZodOptional<z.ZodLiteral<"merchantResponse">>;
    updatedAt: z.ZodOptional<z.ZodString>;
    votes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
}, z.core.$loose>;
export type MerchantResponse = z.infer<typeof MerchantResponse>;
//# sourceMappingURL=MerchantResponse.d.ts.map