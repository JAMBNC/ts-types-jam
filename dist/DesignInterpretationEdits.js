import { z } from "zod";
import { DesignAnchorEdit } from "./DesignAnchorEdit.js";
import { DesignFoldEdit } from "./DesignFoldEdit.js";
import { DesignPanelRename } from "./DesignPanelRename.js";
import { DesignPlacementEdit } from "./DesignPlacementEdit.js";
import { DesignRegionEdit } from "./DesignRegionEdit.js";
const _DesignInterpretationEdits = z
    .object({
    placements: z.array(DesignPlacementEdit).optional(),
    anchors: z.array(DesignAnchorEdit).optional(),
    regions: z.array(DesignRegionEdit).optional(),
    renames: z.array(DesignPanelRename).optional(),
    /**The fold model inputs prepress changed. The interpretation is re-folded under them.*/
    fold: DesignFoldEdit.optional(),
})
    .strict()
    .describe("Every edit prepress made to an interpretation in one designer session, kept beside the design rather than in it. Hermes publishes it, the host files it with the next version, and the fold engine refolds under it. An absent list means no edits of that kind.");
/**Every edit prepress made to an interpretation in one designer session, kept beside the design rather than in it. Hermes publishes it, the host files it with the next version, and the fold engine refolds under it. An absent list means no edits of that kind.*/
export const DesignInterpretationEdits = _DesignInterpretationEdits;
