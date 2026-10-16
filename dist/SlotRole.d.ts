import { z } from "zod";
declare const _SlotRole: z.ZodEnum<{
    accent: "accent";
    address: "address";
    body: "body";
    contact: "contact";
    image: "image";
    legal: "legal";
    logo: "logo";
    returnAddress: "returnAddress";
    subtitle: "subtitle";
    title: "title";
}>;
type _SlotRoleSchema = typeof _SlotRole;
export interface SlotRoleSchema extends _SlotRoleSchema {
}
export declare const SlotRole: SlotRoleSchema;
export type SlotRole = z.infer<typeof SlotRole>;
export {};
//# sourceMappingURL=SlotRole.d.ts.map