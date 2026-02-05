import { z } from "zod";
/**A discriminated union of all supported ingredient types.*/
export declare const Ingredient: z.ZodDiscriminatedUnion<[z.ZodObject<{
    id: z.ZodString;
    type: z.ZodLiteral<"data">;
    metadata: z.ZodRecord<z.ZodAny, z.core.SomeType>;
    isNew: z.ZodBoolean;
    viewLayer: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    rotation: z.ZodNumber;
    isDirty: z.ZodBoolean;
    simulated: z.ZodBoolean;
    isDropshadow: z.ZodBoolean;
    isTextureMask: z.ZodBoolean;
    isValidatorBoundingShape: z.ZodBoolean;
    opacity: z.ZodNumber;
    zIndex: z.ZodNumber;
    data: z.ZodObject<{
        width: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        height: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        x: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        y: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        type: z.ZodString;
        viewLayer: z.ZodString;
        layerName: z.ZodString;
        isTextureMask: z.ZodBoolean;
        tag: z.ZodString;
        path: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    id: z.ZodString;
    type: z.ZodLiteral<"fill">;
    metadata: z.ZodRecord<z.ZodAny, z.core.SomeType>;
    isNew: z.ZodBoolean;
    viewLayer: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    rotation: z.ZodNumber;
    isDirty: z.ZodBoolean;
    simulated: z.ZodBoolean;
    isDropshadow: z.ZodBoolean;
    isTextureMask: z.ZodBoolean;
    isValidatorBoundingShape: z.ZodBoolean;
    opacity: z.ZodNumber;
    zIndex: z.ZodNumber;
    color: z.ZodObject<{
        name: z.ZodString;
        representations: z.ZodObject<{
            sRGB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            US_Web_Coated_SWOP_v2: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>;
        uuid: z.ZodString;
    }, z.core.$loose>;
    rect: z.ZodObject<{
        x: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        y: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        width: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        height: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    id: z.ZodString;
    type: z.ZodLiteral<"shape">;
    metadata: z.ZodRecord<z.ZodAny, z.core.SomeType>;
    isNew: z.ZodBoolean;
    viewLayer: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    rotation: z.ZodNumber;
    isDirty: z.ZodBoolean;
    simulated: z.ZodBoolean;
    isDropshadow: z.ZodBoolean;
    isTextureMask: z.ZodBoolean;
    isValidatorBoundingShape: z.ZodBoolean;
    opacity: z.ZodNumber;
    zIndex: z.ZodNumber;
    hasFill: z.ZodBoolean;
    fillColor: z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        representations: z.ZodObject<{
            sRGB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            US_Web_Coated_SWOP_v2: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>;
        uuid: z.ZodString;
    }, z.core.$loose>, z.ZodNull]>;
    invertFill: z.ZodBoolean;
    hasStroke: z.ZodBoolean;
    strokeColor: z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        representations: z.ZodObject<{
            sRGB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            US_Web_Coated_SWOP_v2: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>;
        uuid: z.ZodString;
    }, z.core.$loose>, z.ZodNull]>;
    strokeWidth: z.ZodNumber;
    lineDash: z.ZodUnion<readonly [z.ZodArray<z.ZodNumber>, z.ZodNull]>;
    paths: z.ZodRecord<z.core.$ZodRecordKey, z.core.SomeType>;
    pathsOrdered: z.ZodArray<z.ZodString>;
    rect: z.ZodObject<{
        x: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        y: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        width: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        height: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    id: z.ZodString;
    type: z.ZodLiteral<"rectangle">;
    metadata: z.ZodRecord<z.ZodAny, z.core.SomeType>;
    isNew: z.ZodBoolean;
    viewLayer: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    rotation: z.ZodNumber;
    isDirty: z.ZodBoolean;
    simulated: z.ZodBoolean;
    isDropshadow: z.ZodBoolean;
    isTextureMask: z.ZodBoolean;
    isValidatorBoundingShape: z.ZodBoolean;
    opacity: z.ZodNumber;
    zIndex: z.ZodNumber;
    hasFill: z.ZodBoolean;
    fillColor: z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        representations: z.ZodObject<{
            sRGB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            US_Web_Coated_SWOP_v2: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>;
        uuid: z.ZodString;
    }, z.core.$loose>, z.ZodNull]>;
    invertFill: z.ZodBoolean;
    hasStroke: z.ZodBoolean;
    strokeColor: z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        representations: z.ZodObject<{
            sRGB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            US_Web_Coated_SWOP_v2: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>;
        uuid: z.ZodString;
    }, z.core.$loose>, z.ZodNull]>;
    strokeWidth: z.ZodNumber;
    lineDash: z.ZodUnion<readonly [z.ZodArray<z.ZodNumber>, z.ZodNull]>;
    strokeCornerRadius: z.ZodObject<{
        v: z.ZodNumber;
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
    }, z.core.$strict>;
    rect: z.ZodObject<{
        x: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        y: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        width: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        height: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    id: z.ZodString;
    type: z.ZodLiteral<"text">;
    metadata: z.ZodRecord<z.ZodAny, z.core.SomeType>;
    isNew: z.ZodBoolean;
    viewLayer: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    rotation: z.ZodNumber;
    isDirty: z.ZodBoolean;
    simulated: z.ZodBoolean;
    isDropshadow: z.ZodBoolean;
    isTextureMask: z.ZodBoolean;
    isValidatorBoundingShape: z.ZodBoolean;
    opacity: z.ZodNumber;
    zIndex: z.ZodNumber;
    text: z.ZodString;
    fontFamily: z.ZodString;
    fontSize: z.ZodObject<{
        v: z.ZodNumber;
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
    }, z.core.$strict>;
    fontColor: z.ZodObject<{
        name: z.ZodString;
        representations: z.ZodObject<{
            sRGB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            US_Web_Coated_SWOP_v2: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>;
        uuid: z.ZodString;
    }, z.core.$loose>;
    fontWeight: z.ZodOptional<z.ZodString>;
    fontStyle: z.ZodOptional<z.ZodString>;
    textAlign: z.ZodOptional<z.ZodString>;
    lineHeight: z.ZodOptional<z.ZodNumber>;
    rect: z.ZodObject<{
        x: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        y: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        width: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        height: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    id: z.ZodString;
    type: z.ZodLiteral<"image">;
    metadata: z.ZodRecord<z.ZodAny, z.core.SomeType>;
    isNew: z.ZodBoolean;
    viewLayer: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    rotation: z.ZodNumber;
    isDirty: z.ZodBoolean;
    simulated: z.ZodBoolean;
    isDropshadow: z.ZodBoolean;
    isTextureMask: z.ZodBoolean;
    isValidatorBoundingShape: z.ZodBoolean;
    opacity: z.ZodNumber;
    zIndex: z.ZodNumber;
    src: z.ZodString;
    naturalWidth: z.ZodOptional<z.ZodNumber>;
    naturalHeight: z.ZodOptional<z.ZodNumber>;
    rect: z.ZodObject<{
        x: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        y: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        width: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        height: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
    }, z.core.$strict>;
}, z.core.$strict>]>;
export type Ingredient = z.infer<typeof Ingredient>;
//# sourceMappingURL=Ingredient.d.ts.map