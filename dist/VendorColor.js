import { z } from "zod/v4";
export const VendorColor = z
    .object({
    colorId: z
        .string()
        .uuid()
        .describe("The uuid for the color the vendor supports."),
    vendorName: z.string().describe("The string name of the vendor."),
    processes: z
        .record(z.string(), z.object({
        pricingGroup: z.string().optional(),
        vendorColorName: z
            .string()
            .describe("A vendor specific name used to refer to the color")
            .optional(),
    }))
        .describe("Pricing group names keyed by supported process."),
})
    .strict()
    .describe("Defines vendor support for a color, including supported processes and pricing groups.");
