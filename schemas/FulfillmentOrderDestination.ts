import { z } from "zod";

/**The ship-to address on a fulfillment order. Extra fields are allowed to tolerate channel-specific additions.*/
export const FulfillmentOrderDestination = z
  .object({
    firstName: z.union([z.string(), z.null()]).optional(),
    lastName: z.union([z.string(), z.null()]).optional(),
    company: z.union([z.string(), z.null()]).optional(),
    address1: z.union([z.string(), z.null()]).optional(),
    address2: z.union([z.string(), z.null()]).optional(),
    city: z.union([z.string(), z.null()]).optional(),
    province: z.union([z.string(), z.null()]).optional(),
    zip: z.union([z.string(), z.null()]).optional(),
    countryCode: z.union([z.string(), z.null()]).optional(),
    phone: z.union([z.string(), z.null()]).optional(),
    email: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough()
  .superRefine((value, ctx) => {
    const defined_keys = new Set([
      "firstName",
      "lastName",
      "company",
      "address1",
      "address2",
      "city",
      "province",
      "zip",
      "countryCode",
      "phone",
      "email",
    ]);
    for (const key in value) {
      if (!defined_keys.has(key)) {
        const result = z.any().safeParse(value[key]);
        if (!result.success) {
          ctx.addIssue({
            path: [...ctx.path, key],
            code: "custom",
            message: `Invalid input: must match additionalProperties schema`,
            params: {
              issues: result.error.issues,
            },
          });
        }
      }
    }
  })
  .describe(
    "The ship-to address on a fulfillment order. Extra fields are allowed to tolerate channel-specific additions.",
  );
export type FulfillmentOrderDestination = z.infer<
  typeof FulfillmentOrderDestination
>;
