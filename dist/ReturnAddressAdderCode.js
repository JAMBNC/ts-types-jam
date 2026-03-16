import { z } from "zod";
export const ReturnAddressAdderCode = z.enum([
    "retaddress_side1",
    "retaddress_side2",
]);
