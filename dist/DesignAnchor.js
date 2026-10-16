import { z } from "zod";
import { DesignAnchorFrame } from "./DesignAnchorFrame.js";
import { DesignAnchorSource } from "./DesignAnchorSource.js";
import { DesignFixtureChoice } from "./DesignFixtureChoice.js";
const _DesignAnchor = z
    .object({
    /**Stable, prepress-readable, e.g. "rightPocketSlit".*/
    id: z
        .string()
        .describe('Stable, prepress-readable, e.g. "rightPocketSlit".'),
    /**The panel the anchor lives on. Every view projects the anchor through this panel's placement.*/
    panelId: z
        .string()
        .describe("The panel the anchor lives on. Every view projects the anchor through this panel's placement."),
    /**What sits here, resolved against the anchor vocabulary in the intake settings. An open string like panel.kind and region.role.*/
    role: z
        .string()
        .describe("What sits here, resolved against the anchor vocabulary in the intake settings. An open string like panel.kind and region.role."),
    /**The anchor's reference box on the flat sheet. A placement rule insets from the span; the rotation turns the fixture to read upright in the anchor's home view. A point fixture has a zero span, a line fixture a zero height.*/
    frame: DesignAnchorFrame,
    /**Fixture codes or families that physically fit. Absent means anything in the role's family.*/
    accepts: z
        .array(z.string())
        .describe("Fixture codes or families that physically fit. Absent means anything in the role's family.")
        .optional(),
    /**A fixture placed on an anchor: which catalog fixture and how the family's placement rule positions it. The shape a purchase decomposes to and the shape a fixed anchor carries.*/
    fixed: DesignFixtureChoice.optional(),
    /**Who put the anchor there. A person's anchor is kept by id on every re-derive; the others are proposals and are replaced.*/
    source: DesignAnchorSource.optional(),
})
    .strict()
    .describe("A frame on a template where a fixture of one role can sit. Geometry plus a role, on a named panel, so left and right are the panel's and never a coordinate. Fusion proposes anchors from faces, prepress moves them, and a person's anchor survives every re-derive.");
/**A frame on a template where a fixture of one role can sit. Geometry plus a role, on a named panel, so left and right are the panel's and never a coordinate. Fusion proposes anchors from faces, prepress moves them, and a person's anchor survives every re-derive.*/
export const DesignAnchor = _DesignAnchor;
