import { z } from "zod";
export declare const DesignComment: z.ZodObject<{
    current_status: z.ZodString;
    date: z.ZodString;
    author: z.ZodString;
    internal: z.ZodString;
    comment: z.ZodString;
}, z.core.$loose>;
export type DesignComment = z.infer<typeof DesignComment>;
//# sourceMappingURL=DesignComment.d.ts.map