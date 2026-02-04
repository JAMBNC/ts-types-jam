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
      .record(
        z
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
          .describe("Defines how visual content is transferred to the medium."),
        z
          .object({
            pricingGroup: z.string().optional(),
            /**Pricing group names keyed by supported process.*/
            vendorColorName: z
              .string()
              .describe("Pricing group names keyed by supported process.")
              .optional(),
          })
          .passthrough(),
      )
      .describe("Pricing group names keyed by supported process."),
    /**The string name of the vendor.*/
    vendorName: z.string().describe("The string name of the vendor."),
  })
  .passthrough();
export type VendorColor = z.infer<typeof VendorColor>;
