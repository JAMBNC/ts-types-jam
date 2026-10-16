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
export const SlotRole = _SlotRole;
