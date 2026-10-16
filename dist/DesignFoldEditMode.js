import { z } from "zod";
const _DesignFoldEditMode = z
    .enum(["rederive", "propose"])
    .describe("How the fold engine treats the edited inputs: rederive keeps the views and re-derives their placements, propose lets it propose views afresh.");
/**How the fold engine treats the edited inputs: rederive keeps the views and re-derives their placements, propose lets it propose views afresh.*/
export const DesignFoldEditMode = _DesignFoldEditMode;
