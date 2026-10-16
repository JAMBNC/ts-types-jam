import { z } from "zod";

const _SlotRole = z.enum([
  "logo",
  "title",
  "subtitle",
  "body",
  "image",
  "address",
  "returnAddress",
  "contact",
  "accent",
  "legal",
]);
type _SlotRoleSchema = typeof _SlotRole;
export interface SlotRoleSchema extends _SlotRoleSchema {}
export const SlotRole: SlotRoleSchema = _SlotRole;
export type SlotRole = z.infer<typeof SlotRole>;
