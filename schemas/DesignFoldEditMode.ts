import { z } from "zod";

const _DesignFoldEditMode = z
  .enum(["rederive", "propose"])
  .describe(
    "How the fold engine treats the edited inputs: rederive keeps the views and re-derives their placements, propose lets it propose views afresh.",
  );
type _DesignFoldEditModeSchema = typeof _DesignFoldEditMode;
export interface DesignFoldEditModeSchema extends _DesignFoldEditModeSchema {}
/**How the fold engine treats the edited inputs: rederive keeps the views and re-derives their placements, propose lets it propose views afresh.*/
export const DesignFoldEditMode: DesignFoldEditModeSchema = _DesignFoldEditMode;
export type DesignFoldEditMode = z.infer<typeof DesignFoldEditMode>;
