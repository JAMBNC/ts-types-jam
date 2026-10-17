import { z } from "zod";
import { DesignRegion } from "./DesignRegion.js";
import { Dimension } from "./Dimension.js";
import { PageRestrictions } from "./PageRestrictions.js";
const _Page = z
    .object({
    height: Dimension.optional(),
    /**Unique identifier for this page.*/
    id: z.string().describe("Unique identifier for this page."),
    /**Ordered list of ingredient IDs rendered on this page.*/
    ingredientsOrdered: z
        .array(z.string())
        .describe("Ordered list of ingredient IDs rendered on this page."),
    restrictions: PageRestrictions.optional(),
    /**Regions on this page, each governing the ingredients whose restrictions name it, such as a starter photo kept inside its circle.*/
    regions: z
        .array(DesignRegion)
        .describe("Regions on this page, each governing the ingredients whose restrictions name it, such as a starter photo kept inside its circle.")
        .optional(),
    /**The DesignView this page renders, by id. A view is a page.*/
    view: z
        .string()
        .describe("The DesignView this page renders, by id. A view is a page.")
        .optional(),
    /**What a human is shown for this page, from its DesignView's label. Only a view with no page selector ui label carries one: a standard view such as closedFront is named by DesignerUiLabels, never per style.*/
    label: z
        .string()
        .describe("What a human is shown for this page, from its DesignView's label. Only a view with no page selector ui label carries one: a standard view such as closedFront is named by DesignerUiLabels, never per style.")
        .optional(),
    width: Dimension.optional(),
})
    .strict()
    .describe("A page in the design containing ordered references to ingredients.");
/**A page in the design containing ordered references to ingredients.*/
export const Page = _Page;
