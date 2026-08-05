import { z } from "zod";
const _Vendor = z.enum([
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
export const Vendor = _Vendor;
