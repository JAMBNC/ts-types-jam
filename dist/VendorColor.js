import { z } from "zod";
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
        offset: z
            .object({
            pricingGroup: z.string().optional(),
            /**Pricing group names keyed by supported process.*/
            vendorColorName: z
                .string()
                .describe("Pricing group names keyed by supported process.")
                .optional(),
        })
            .passthrough(),
        digital: z
            .object({
            pricingGroup: z.string().optional(),
            /**Pricing group names keyed by supported process.*/
            vendorColorName: z
                .string()
                .describe("Pricing group names keyed by supported process.")
                .optional(),
        })
            .passthrough(),
        foil: z
            .object({
            pricingGroup: z.string().optional(),
            /**Pricing group names keyed by supported process.*/
            vendorColorName: z
                .string()
                .describe("Pricing group names keyed by supported process.")
                .optional(),
        })
            .passthrough(),
        emboss: z
            .object({
            pricingGroup: z.string().optional(),
            /**Pricing group names keyed by supported process.*/
            vendorColorName: z
                .string()
                .describe("Pricing group names keyed by supported process.")
                .optional(),
        })
            .passthrough(),
        screen: z
            .object({
            pricingGroup: z.string().optional(),
            /**Pricing group names keyed by supported process.*/
            vendorColorName: z
                .string()
                .describe("Pricing group names keyed by supported process.")
                .optional(),
        })
            .passthrough(),
        inkjet: z
            .object({
            pricingGroup: z.string().optional(),
            /**Pricing group names keyed by supported process.*/
            vendorColorName: z
                .string()
                .describe("Pricing group names keyed by supported process.")
                .optional(),
        })
            .passthrough(),
        flexography: z
            .object({
            pricingGroup: z.string().optional(),
            /**Pricing group names keyed by supported process.*/
            vendorColorName: z
                .string()
                .describe("Pricing group names keyed by supported process.")
                .optional(),
        })
            .passthrough(),
        sublimation: z
            .object({
            pricingGroup: z.string().optional(),
            /**Pricing group names keyed by supported process.*/
            vendorColorName: z
                .string()
                .describe("Pricing group names keyed by supported process.")
                .optional(),
        })
            .passthrough(),
        thermal: z
            .object({
            pricingGroup: z.string().optional(),
            /**Pricing group names keyed by supported process.*/
            vendorColorName: z
                .string()
                .describe("Pricing group names keyed by supported process.")
                .optional(),
        })
            .passthrough(),
    })
        .partial()
        .describe("Pricing group names keyed by supported process."),
    /**The string name of the vendor.*/
    vendorName: z.string().describe("The string name of the vendor."),
})
    .passthrough();
