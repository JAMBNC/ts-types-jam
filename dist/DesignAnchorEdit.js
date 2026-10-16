import { z } from "zod";
import { DesignAnchorFrame } from "./DesignAnchorFrame.js";
import { DesignFixtureChoice } from "./DesignFixtureChoice.js";
const _DesignAnchorEdit = z
    .object({
    anchorId: z.string(),
    /**The anchor's reference box on the flat sheet. A placement rule insets from the span; the rotation turns the fixture to read upright in the anchor's home view. A point fixture has a zero span, a line fixture a zero height.*/
    frame: DesignAnchorFrame,
    /**Replaces the anchor's accepts. Absent leaves anything in the role's family.*/
    accepts: z
        .array(z.string())
        .describe("Replaces the anchor's accepts. Absent leaves anything in the role's family.")
        .optional(),
    /**A fixture placed on an anchor: which catalog fixture and how the family's placement rule positions it. The shape a purchase decomposes to and the shape a fixed anchor carries.*/
    fixed: DesignFixtureChoice.optional(),
    /**The panel a new anchor lives on.*/
    panelId: z.string().describe("The panel a new anchor lives on.").optional(),
    /**What sits on a new anchor.*/
    role: z.string().describe("What sits on a new anchor.").optional(),
    removed: z.literal(true).optional(),
})
    .strict()
    .describe("An anchor's whole editable state after prepress touched it. An edit naming an anchor the interpretation lacks adds it, given a panelId and role; removed takes it out. An edited anchor becomes a person's anchor.");
/**An anchor's whole editable state after prepress touched it. An edit naming an anchor the interpretation lacks adds it, given a panelId and role; removed takes it out. An edited anchor becomes a person's anchor.*/
export const DesignAnchorEdit = _DesignAnchorEdit;
