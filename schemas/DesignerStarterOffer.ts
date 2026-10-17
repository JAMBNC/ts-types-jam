import { z } from "zod";

const _DesignerStarterOffer = z
  .object({
    /**The starter's id, used to fetch its design.*/
    id: z
      .number()
      .int()
      .describe("The starter's id, used to fetch its design."),
    /**Customer friendly name of the starter.*/
    label: z.string().describe("Customer friendly name of the starter."),
    /**Customer friendly description of the starter.*/
    description: z
      .string()
      .describe("Customer friendly description of the starter.")
      .optional(),
    /**The category the starter is grouped under in the picker.*/
    category: z
      .string()
      .describe("The category the starter is grouped under in the picker."),
    tags: z.array(z.string()),
    /**Primary image used for previewing the starter in cards.*/
    designPreviewImage: z
      .string()
      .url()
      .describe("Primary image used for previewing the starter in cards.")
      .optional(),
    snapshots: z.array(
      z.object({ url: z.string().url(), label: z.string() }).strict(),
    ),
    /**The workspace option the starter opens in, when it names one.*/
    workspaceOptionUuid: z
      .string()
      .regex(
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
      )
      .describe("The workspace option the starter opens in, when it names one.")
      .optional(),
  })
  .strict()
  .describe(
    "One starter the designer can offer for the loaded product: a head-start design in the product's style that the shopper opens and finishes.",
  );
type _DesignerStarterOfferSchema = typeof _DesignerStarterOffer;
export interface DesignerStarterOfferSchema extends _DesignerStarterOfferSchema {}
/**One starter the designer can offer for the loaded product: a head-start design in the product's style that the shopper opens and finishes.*/
export const DesignerStarterOffer: DesignerStarterOfferSchema =
  _DesignerStarterOffer;
export type DesignerStarterOffer = z.infer<typeof DesignerStarterOffer>;
