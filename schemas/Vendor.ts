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
type _VendorSchema = typeof _Vendor;
export interface VendorSchema extends _VendorSchema {}
export const Vendor: VendorSchema = _Vendor;
export type Vendor = z.infer<typeof Vendor>;
