import { z } from "zod";
declare const _TextProperties: z.ZodObject<{
    alignment: import("./Alignment.js").AlignmentSchema;
    body: z.ZodArray<z.ZodString>;
    dataSource: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    fontData: import("./Font.js").FontSchema;
    fontSize: z.ZodString;
    leading: z.ZodOptional<z.ZodNumber>;
    measurementDataSource: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    placeholder: z.ZodOptional<z.ZodBoolean>;
    rotation: z.ZodOptional<z.ZodNumber>;
    strikethrough: z.ZodBoolean;
    textLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        height: import("./Dimension.js").DimensionSchema;
        span: z.ZodObject<{
            charPositions: z.ZodString;
            fontSize: import("./Dimension.js").DimensionSchema;
            glyphIds: z.ZodString;
            glyphIDs: z.ZodOptional<z.ZodString>;
            glyphPositions: z.ZodString;
            glyphXOffsets: z.ZodString;
            glyphYOffsets: z.ZodString;
            height: import("./Dimension.js").DimensionSchema;
            text: z.ZodString;
            width: import("./Dimension.js").DimensionSchema;
            x: import("./Dimension.js").DimensionSchema;
            y: import("./Dimension.js").DimensionSchema;
        }, z.core.$loose>;
        width: import("./Dimension.js").DimensionSchema;
        x: import("./Dimension.js").DimensionSchema;
        y: import("./Dimension.js").DimensionSchema;
    }, z.core.$loose>>>;
    underline: z.ZodBoolean;
}, z.core.$loose>;
type _TextPropertiesSchema = typeof _TextProperties;
export interface TextPropertiesSchema extends _TextPropertiesSchema {
}
/**Properties for displayed text*/
export declare const TextProperties: TextPropertiesSchema;
export type TextProperties = z.infer<typeof TextProperties>;
export {};
//# sourceMappingURL=TextProperties.d.ts.map