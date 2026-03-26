import { z } from "zod";
export const ProductUrlType = z.enum([
    "product",
    "customProduct",
    "yourLogoHere",
]);
