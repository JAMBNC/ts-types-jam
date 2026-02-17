import { z } from "zod";
export const Vendor = z.enum([
    "ADMORE",
    "DUPLI",
    "GRAPHIC_AWARDS",
    "JARED",
    "TRAFFICWORKS",
    "TAYLOR_FOLDERWORKS",
    "TAYLOR_NAVITOR",
    "TAYLOR_SIGNS",
    "TAYLOR_LABELWORKS",
]);
