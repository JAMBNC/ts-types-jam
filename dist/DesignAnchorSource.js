import { z } from "zod";
const _DesignAnchorSource = z
    .enum(["face", "claim", "die", "person"])
    .describe("Who put the anchor there. A person's anchor is kept by id on every re-derive; the others are proposals and are replaced.");
/**Who put the anchor there. A person's anchor is kept by id on every re-derive; the others are proposals and are replaced.*/
export const DesignAnchorSource = _DesignAnchorSource;
