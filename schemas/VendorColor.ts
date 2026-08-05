import { z } from "zod";
import { Process } from "./Process.js";
import { Vendor } from "./Vendor.js";
import { VendorProcess } from "./VendorProcess.js";

const _VendorColor = z
  .object({
    /**The uuid for the color the vendor supports.*/
    colorId: z
      .string()
      .regex(
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
      )
      .describe("The uuid for the color the vendor supports."),
    /**Vendor specific color name*/
    colorName: z.string().describe("Vendor specific color name").optional(),
    /**Pricing group names keyed by supported process.*/
    processes: z
      .object({
        offset: VendorProcess,
        digital: VendorProcess,
        foil: VendorProcess,
        emboss: VendorProcess,
        screen: VendorProcess,
        inkjet: VendorProcess,
        flexography: VendorProcess,
        sublimation: VendorProcess,
        thermal: VendorProcess,
      })
      .partial()
      .describe("Pricing group names keyed by supported process."),
    vendor: Vendor,
  })
  .passthrough();
type _VendorColorSchema = typeof _VendorColor;
export interface VendorColorSchema extends _VendorColorSchema {}
export const VendorColor: VendorColorSchema = _VendorColor;
export type VendorColor = z.infer<typeof VendorColor>;
