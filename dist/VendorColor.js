import { z } from "zod/v4";
export const VendorColor = z
    .object({
    vendorName: z.string().describe("The string name of the vendor."),
    colorId: z
        .string()
        .uuid()
        .describe("The uuid for the color the vendor supports."),
    supportedProcesses: z
        .array(z
        .enum([
        "offset",
        "digital",
        "foil",
        "emboss",
        "screen",
        "inkjet",
        "flexography",
        "sublimation",
        "thermal",
    ])
        .describe("Defines how visual content is transferred to the medium."))
        .min(1)
        .describe("An array of processes the vendor supports for the color."),
    pricing: z
        .record(z.string(), z.string())
        .describe("Pricing group names keyed by supported process. Keys must be present in supportedProcesses."),
})
    .strict()
    .describe("Defines vendor support for a color, including supported processes and pricing groups.");
