import { z } from "zod";
const _ProductUrlType = z.enum(["product", "customProduct", "yourLogoHere"]);
export const ProductUrlType = _ProductUrlType;
