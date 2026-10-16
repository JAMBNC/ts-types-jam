import { z } from "zod";
declare const _DesignAnchorSource: z.ZodEnum<{
    claim: "claim";
    die: "die";
    face: "face";
    person: "person";
}>;
type _DesignAnchorSourceSchema = typeof _DesignAnchorSource;
export interface DesignAnchorSourceSchema extends _DesignAnchorSourceSchema {
}
/**Who put the anchor there. A person's anchor is kept by id on every re-derive; the others are proposals and are replaced.*/
export declare const DesignAnchorSource: DesignAnchorSourceSchema;
export type DesignAnchorSource = z.infer<typeof DesignAnchorSource>;
export {};
//# sourceMappingURL=DesignAnchorSource.d.ts.map