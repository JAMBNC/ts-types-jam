import { z } from "zod";
import { Process } from "./Process.js";
import { VendorProcess } from "./VendorProcess.js";

export const VendorColor = z
  .object({
    /**The uuid for the color the vendor supports.*/
    colorId: z
      .string()
      .uuid()
      .describe("The uuid for the color the vendor supports."),
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
    /**The string name of the vendor.*/
    vendorName: z.string().describe("The string name of the vendor."),
  })
  .passthrough();
export type VendorColor = z.infer<typeof VendorColor>;
