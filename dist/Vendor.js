import { z } from "zod";
export const Vendor = z.enum([
    "ADMORE",
    "DUPLI",
    "TAYLOR_FOLDERWORKS",
    "TAYLOR_NAVITOR",
    "TAYLOR_SIGNS",
    "TAYLOR_LABELWORKS",
]);
