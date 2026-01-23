import { z } from "zod/v4";
export const DesignerInitializationPayload = z.object({
    config: z
        .any()
        .superRefine((x, ctx) => {
        const schemas = [z.record(z.string(), z.any()), z.string().url()];
        const errors = schemas.reduce((errors, schema) => ((result) => (result.error ? [...errors, result.error] : errors))(schema.safeParse(x)), []);
        if (schemas.length - errors.length !== 1) {
            ctx.addIssue({
                path: ctx.path,
                code: "invalid_union",
                unionErrors: errors,
                message: "Invalid input: Should pass single schema",
            });
        }
    })
        .describe("The designer configuration schema or URI endpoint that returns a designer configuration schema"),
    product: z
        .any()
        .superRefine((x, ctx) => {
        const schemas = [z.any(), z.string().url()];
        const errors = schemas.reduce((errors, schema) => ((result) => (result.error ? [...errors, result.error] : errors))(schema.safeParse(x)), []);
        if (schemas.length - errors.length !== 1) {
            ctx.addIssue({
                path: ctx.path,
                code: "invalid_union",
                unionErrors: errors,
                message: "Invalid input: Should pass single schema",
            });
        }
    })
        .describe("A Product schema or URI endpoint that returns a Product schema"),
    endpoints: z.object({
        design: z.object({
            save: z
                .string()
                .url()
                .describe("The endpoint URL for saving the designer data"),
        }),
        image: z
            .object({
            gallery: z
                .string()
                .url()
                .describe("The endpoint URL for fetching the users image gallery. (uses the DesignerAuth.endpointAuth)")
                .optional(),
            upload: z
                .string()
                .url()
                .describe("The endpoint URL for uploading a user image (uses the DesignerAuth.endpointAuth)")
                .optional(),
            delete: z
                .string()
                .url()
                .describe("The endpoint URL for removing an image from the gallery. (uses the DesignerAuth.endpointAuth)")
                .optional(),
            rendition: z
                .string()
                .url()
                .describe("The endpoint URL for fetching a rendition of an image from the gallery. (uses the DesignerAuth.endpointAuth)")
                .optional(),
        })
            .optional(),
        fonts: z
            .object({
            all: z
                .string()
                .url()
                .describe("The (optional) endpoint URL for retrieving all supported fonts")
                .optional(),
            get: z
                .string()
                .url()
                .describe("The endpoint URL for retrieving a font file by uuid "),
        })
            .optional(),
    }),
    auth: z.object({
        chiliAuth: z
            .string()
            .describe("The authorization token for CHILI requests")
            .optional(),
        endpointAuth: z
            .string()
            .describe("The authorization token for designer endpoint requests")
            .optional(),
    }),
    pricing: z
        .any()
        .superRefine((x, ctx) => {
        const schemas = [
            z
                .record(z.string(), z.array(z.any()))
                .describe("Price tiers keyed by product SKU."),
            z.string().url(),
        ];
        const errors = schemas.reduce((errors, schema) => ((result) => (result.error ? [...errors, result.error] : errors))(schema.safeParse(x)), []);
        if (schemas.length - errors.length !== 1) {
            ctx.addIssue({
                path: ctx.path,
                code: "invalid_union",
                unionErrors: errors,
                message: "Invalid input: Should pass single schema",
            });
        }
    })
        .describe("A DesignerPricing schema or URI endpoint that returns a DesignerPricing schema")
        .optional(),
    uiLabels: z
        .any()
        .superRefine((x, ctx) => {
        const schemas = [z.any(), z.string().url()];
        const errors = schemas.reduce((errors, schema) => ((result) => (result.error ? [...errors, result.error] : errors))(schema.safeParse(x)), []);
        if (schemas.length - errors.length !== 1) {
            ctx.addIssue({
                path: ctx.path,
                code: "invalid_union",
                unionErrors: errors,
                message: "Invalid input: Should pass single schema",
            });
        }
    })
        .describe("The UI Label schema used to configure the labels on the designer (optional)")
        .optional(),
    fonts: z
        .array(z.any())
        .describe("An (optional) array of DesignerFont schemas used to configure the fonts available in the designer. If this property is not provided, then the endpoints.fonts.all endpoint will be used to fetch the fonts.")
        .optional(),
});
