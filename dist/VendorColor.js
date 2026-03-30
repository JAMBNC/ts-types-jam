import { z } from "zod";
import { Vendor } from "./Vendor.js";
import { VendorProcess } from "./VendorProcess.js";
export const VendorColor = z
    .object({
    /**The uuid for the color the vendor supports.*/
    colorId: z
        .string()
        .uuid()
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
