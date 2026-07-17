import { z } from "zod";
export declare const Workspace: z.ZodObject<{
    tags: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        colorInk: "colorInk";
        foil: "foil";
        whiteInk: "whiteInk";
    }>>>;
    allowlists: z.ZodOptional<z.ZodObject<{
        processes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            process: z.ZodEnum<{
                digital: "digital";
                emboss: "emboss";
                flexography: "flexography";
                foil: "foil";
                inkjet: "inkjet";
                offset: "offset";
                screen: "screen";
                sublimation: "sublimation";
                thermal: "thermal";
            }>;
            allowCustomColors: z.ZodOptional<z.ZodBoolean>;
            allowBackgroundColor: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>>>;
        palettes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            uuid: z.ZodString;
            allowCustomColors: z.ZodOptional<z.ZodBoolean>;
            allowBackgroundColor: z.ZodOptional<z.ZodBoolean>;
            allowlist: z.ZodOptional<z.ZodObject<{
                colors: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strict>>;
        }, z.core.$strict>>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type Workspace = z.infer<typeof Workspace>;
//# sourceMappingURL=Workspace.d.ts.map