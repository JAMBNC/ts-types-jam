import { z } from "zod";
/**Defines vendor support for a color, including supported processes and pricing groups.*/
export const VendorColor = z
    .object({
    /**The uuid for the color the vendor supports.*/
    colorId: z
        .string()
        .uuid()
        .describe("The uuid for the color the vendor supports."),
    /**The string name of the vendor.*/
    vendorName: z.string().describe("The string name of the vendor."),
    /**A vendor specific name used to refer to the color*/
    vendorColorName: z
        .string()
        .describe("A vendor specific name used to refer to the color")
        .optional(),
    /**Pricing group names keyed by supported process.*/
    processes: z
        .record(z.object({
        pricingGroup: z.string(),
        /**A vendor process specific name used to refer to the color*/
        vendorColorName: z
            .string()
            .describe("A vendor process specific name used to refer to the color")
            .optional(),
    }))
        .describe("Pricing group names keyed by supported process."),
})
    .strict()
    .describe("Defines vendor support for a color, including supported processes and pricing groups.");
