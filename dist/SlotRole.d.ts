import { z } from "zod";
declare const _SlotRole: z.ZodEnum<{
    image: "image";
    title: "title";
    logo: "logo";
    subtitle: "subtitle";
    body: "body";
    address: "address";
    returnAddress: "returnAddress";
    contact: "contact";
    accent: "accent";
    legal: "legal";
}>;
type _SlotRoleSchema = typeof _SlotRole;
export interface SlotRoleSchema extends _SlotRoleSchema {
}
export declare const SlotRole: SlotRoleSchema;
export type SlotRole = z.infer<typeof SlotRole>;
export {};
//# sourceMappingURL=SlotRole.d.ts.map