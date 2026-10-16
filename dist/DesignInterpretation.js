import { z } from "zod";
import { DesignAnchor } from "./DesignAnchor.js";
import { DesignCutPathBridge } from "./DesignCutPathBridge.js";
import { DesignCutPathEnd } from "./DesignCutPathEnd.js";
import { DesignCutPathSource } from "./DesignCutPathSource.js";
import { DesignDieOrigin } from "./DesignDieOrigin.js";
import { DesignFinding } from "./DesignFinding.js";
import { DesignFold } from "./DesignFold.js";
import { DesignFolding } from "./DesignFolding.js";
import { DesignOptionalCut } from "./DesignOptionalCut.js";
import { DesignPanel } from "./DesignPanel.js";
import { DesignProvenance } from "./DesignProvenance.js";
import { DesignRegion } from "./DesignRegion.js";
import { DesignView } from "./DesignView.js";
import { Dimension } from "./Dimension.js";
import { Path } from "./Path.js";
const _DesignInterpretation = z
    .object({
    width: Dimension.optional(),
    height: Dimension.optional(),
    /**A vector path consisting of ordered control points.*/
    cutPath: Path.optional(),
    /**How the cut path was found: traced as a closed outline from the knife strokes, or the strokes' bounding box when no outline would close.*/
    cutPathSource: DesignCutPathSource.optional(),
    /**Gaps between knife strokes that tracing closed with a straight segment to make the outline.*/
    cutPathBridges: z
        .array(DesignCutPathBridge)
        .describe("Gaps between knife strokes that tracing closed with a straight segment to make the outline.")
        .optional(),
    /**Where the knife strokes stop without closing, when no outline could be traced and the cut path fell back to their bounding box.*/
    cutPathOpenEnds: z
        .array(DesignCutPathEnd)
        .describe("Where the knife strokes stop without closing, when no outline could be traced and the cut path fell back to their bounding box.")
        .optional(),
    /**The die's top-left corner on one page of the source artifact, y down from the page's top-left.*/
    dieOrigin: DesignDieOrigin.optional(),
    /**Fold lines, in the order they are folded.*/
    folds: z
        .array(DesignFold)
        .describe("Fold lines, in the order they are folded.")
        .optional(),
    /**The planar faces the folds divide the sheet into.*/
    panels: z
        .array(DesignPanel)
        .describe("The planar faces the folds divide the sheet into.")
        .optional(),
    /**Areas that govern where customer art goes on their panels, such as glue tabs, hinge bands, an envelope window or a postal clear zone.*/
    regions: z
        .array(DesignRegion)
        .describe("Areas that govern where customer art goes on their panels, such as glue tabs, hinge bands, an envelope window or a postal clear zone.")
        .optional(),
    /**Interior cuts the die drawing carries that are not the outline: slits, card slots, business-card cuts. A vendor bakes every slit style it can sell into one drawing and the customer pays for the one they order, so the base design carries none of them and these are the only record of the shapes. Held, never derived from: no panel, fold, region or view reads one.*/
    optionalCuts: z
        .array(DesignOptionalCut)
        .describe("Interior cuts the die drawing carries that are not the outline: slits, card slots, business-card cuts. A vendor bakes every slit style it can sell into one drawing and the customer pays for the one they order, so the base design carries none of them and these are the only record of the shapes. Held, never derived from: no panel, fold, region or view reads one.")
        .optional(),
    /**Where a fixture can sit: a business card slit in a pocket, a ribbon across a spine, a window in a cover. The template says what fits, the product says what is sold, and a purchase lands a fixture on an anchor. Stated on the flat sheet, projected into every view through the anchor's panel.*/
    anchors: z
        .array(DesignAnchor)
        .describe("Where a fixture can sit: a business card slit in a pocket, a ribbon across a spine, a window in a cover. The template says what fits, the product says what is sold, and a purchase lands a fixture on an anchor. Stated on the flat sheet, projected into every view through the anchor's panel.")
        .optional(),
    /**The fold model: the fixed face, the hinges joining panels across creases, and the named fold states. The hinge tree is the maximum spanning tree of the hinges by length, grown from the fixed face.*/
    folding: DesignFolding.optional(),
    /**The assembled faces a customer designs on, and the previews of the finished product. Bound to pages by Page.view, except a preview, which is never a page.*/
    views: z
        .array(DesignView)
        .describe("The assembled faces a customer designs on, and the previews of the finished product. Bound to pages by Page.view, except a preview, which is never a page."),
    /**Maps a separation name as the vendor wrote it to the role it plays, e.g. "Hinge Break" to "hinge". Configuration owned by prepress, never code.*/
    inkDictionary: z
        .record(z.string(), z.string())
        .describe('Maps a separation name as the vendor wrote it to the role it plays, e.g. "Hinge Break" to "hinge". Configuration owned by prepress, never code.')
        .optional(),
    /**Who proposed the interpretation and who signed off on it. Detectors propose, prepress confirms.*/
    provenance: DesignProvenance.optional(),
    /**What the preflight checks found when this interpretation was last folded. Derived on every fold and never edited: a reviewer reads it, and the checks and their severities are intake settings.*/
    preflight: z
        .array(DesignFinding)
        .describe("What the preflight checks found when this interpretation was last folded. Derived on every fold and never edited: a reviewer reads it, and the checks and their severities are intake settings.")
        .optional(),
})
    .strict()
    .describe("The non-derivable half of a template: which regions are views, fold direction and order, region roles, and what a vendor's separation names mean.");
/**The non-derivable half of a template: which regions are views, fold direction and order, region roles, and what a vendor's separation names mean.*/
export const DesignInterpretation = _DesignInterpretation;
