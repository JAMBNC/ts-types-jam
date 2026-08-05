import { z } from "zod";
const _ReturnAddressAdderCode = z.enum([
    "retaddress_side1",
    "retaddress_side2",
]);
export const ReturnAddressAdderCode = _ReturnAddressAdderCode;
