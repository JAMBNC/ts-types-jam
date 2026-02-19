import { z } from "zod";
/**The complete design state containing dimensions, pages, and ingredients.*/
export declare const DesignState: z.ZodObject<{
    expansion: z.ZodOptional<z.ZodObject<{
        canUndo: z.ZodOptional<z.ZodBoolean>;
        canRedo: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$loose>>;
    version: z.ZodString;
    coatingLocations: z.ZodRecord<z.ZodString, z.ZodAny>;
    dimHeight: z.ZodObject<{
        v: z.ZodNumber;
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
    }, z.core.$strict>;
    dimWidth: z.ZodObject<{
        v: z.ZodNumber;
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
    }, z.core.$strict>;
    hasBuffer: z.ZodBoolean;
    pages: z.ZodRecord<z.ZodString, z.ZodObject<{
        id: z.ZodString;
        ingredientsOrdered: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>;
    pagesOrdered: z.ZodArray<z.ZodString>;
    ingredients: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<[z.ZodObject<{
        id: z.ZodString;
        type: z.ZodLiteral<"data">;
        metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
        isNew: z.ZodBoolean;
        viewLayer: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        rotation: z.ZodNumber;
        editable: z.ZodOptional<z.ZodBoolean>;
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
        metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
        isNew: z.ZodBoolean;
        viewLayer: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        rotation: z.ZodNumber;
        editable: z.ZodOptional<z.ZodBoolean>;
        isDirty: z.ZodBoolean;
        simulated: z.ZodBoolean;
        isDropshadow: z.ZodBoolean;
        isTextureMask: z.ZodBoolean;
        isValidatorBoundingShape: z.ZodBoolean;
        opacity: z.ZodNumber;
        zIndex: z.ZodNumber;
        color: z.ZodObject<{
            name: z.ZodString;
            hex: z.ZodString;
            id: z.ZodString;
            r: z.ZodOptional<z.ZodNumber>;
            g: z.ZodOptional<z.ZodNumber>;
            b: z.ZodOptional<z.ZodNumber>;
            a: z.ZodOptional<z.ZodNumber>;
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
        type: z.ZodLiteral<"shape">;
        metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
        isNew: z.ZodBoolean;
        viewLayer: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        rotation: z.ZodNumber;
        editable: z.ZodOptional<z.ZodBoolean>;
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
            hex: z.ZodString;
            id: z.ZodString;
            r: z.ZodOptional<z.ZodNumber>;
            g: z.ZodOptional<z.ZodNumber>;
            b: z.ZodOptional<z.ZodNumber>;
            a: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>, z.ZodNull]>;
        invertFill: z.ZodBoolean;
        hasStroke: z.ZodBoolean;
        strokeColor: z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            hex: z.ZodString;
            id: z.ZodString;
            r: z.ZodOptional<z.ZodNumber>;
            g: z.ZodOptional<z.ZodNumber>;
            b: z.ZodOptional<z.ZodNumber>;
            a: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>, z.ZodNull]>;
        strokeWidth: z.ZodNumber;
        lineDash: z.ZodUnion<readonly [z.ZodArray<z.ZodNumber>, z.ZodNull]>;
        paths: z.ZodRecord<z.ZodString, z.ZodObject<{
            isClosed: z.ZodString;
            points: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"bezier">;
                ix: z.ZodObject<{
                    v: z.ZodNumber;
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                }, z.core.$strict>;
                iy: z.ZodObject<{
                    v: z.ZodNumber;
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                }, z.core.$strict>;
                ox: z.ZodObject<{
                    v: z.ZodNumber;
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                }, z.core.$strict>;
                oy: z.ZodObject<{
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
            }, z.core.$strict>, z.ZodObject<{
                type: z.ZodLiteral<"line">;
                ix: z.ZodObject<{
                    v: z.ZodNumber;
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                }, z.core.$strict>;
                iy: z.ZodObject<{
                    v: z.ZodNumber;
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                }, z.core.$strict>;
                ox: z.ZodObject<{
                    v: z.ZodNumber;
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                }, z.core.$strict>;
                oy: z.ZodObject<{
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
            }, z.core.$strict>]>>;
            pointsOrdered: z.ZodArray<z.ZodString>;
        }, z.core.$strict>>;
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
        metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
        isNew: z.ZodBoolean;
        viewLayer: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        rotation: z.ZodNumber;
        editable: z.ZodOptional<z.ZodBoolean>;
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
            hex: z.ZodString;
            id: z.ZodString;
            r: z.ZodOptional<z.ZodNumber>;
            g: z.ZodOptional<z.ZodNumber>;
            b: z.ZodOptional<z.ZodNumber>;
            a: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>, z.ZodNull]>;
        invertFill: z.ZodBoolean;
        hasStroke: z.ZodBoolean;
        strokeColor: z.ZodUnion<readonly [z.ZodObject<{
            name: z.ZodString;
            hex: z.ZodString;
            id: z.ZodString;
            r: z.ZodOptional<z.ZodNumber>;
            g: z.ZodOptional<z.ZodNumber>;
            b: z.ZodOptional<z.ZodNumber>;
            a: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>, z.ZodNull]>;
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
        metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
        isNew: z.ZodBoolean;
        viewLayer: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        rotation: z.ZodNumber;
        editable: z.ZodOptional<z.ZodBoolean>;
        isDirty: z.ZodBoolean;
        simulated: z.ZodBoolean;
        isDropshadow: z.ZodBoolean;
        isTextureMask: z.ZodBoolean;
        isValidatorBoundingShape: z.ZodBoolean;
        opacity: z.ZodNumber;
        zIndex: z.ZodNumber;
        text: z.ZodObject<{
            alignment: z.ZodString;
            body: z.ZodArray<z.ZodString>;
            dataSource: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            measurementDataSource: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            fontSize: z.ZodString;
            leading: z.ZodOptional<z.ZodNumber>;
            rotation: z.ZodOptional<z.ZodNumber>;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            fontData: z.ZodObject<{
                uuid: z.ZodString;
                style: z.ZodEnum<{
                    regular: "regular";
                    italic: "italic";
                    bold: "bold";
                    bold_italic: "bold_italic";
                    light: "light";
                    light_italic: "light_italic";
                }>;
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>;
            textLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                span: z.ZodObject<{
                    charPositions: z.ZodString;
                    fontSize: z.ZodObject<{
                        v: z.ZodNumber;
                        u: z.ZodEnum<{
                            in: "in";
                            mm: "mm";
                            px: "px";
                            pt: "pt";
                        }>;
                    }, z.core.$strict>;
                    glyphIds: z.ZodString;
                    glyphPositions: z.ZodString;
                    glyphXOffsets: z.ZodString;
                    glyphYOffsets: z.ZodString;
                    text: z.ZodString;
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
                }, z.core.$loose>;
            }, z.core.$loose>>>;
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
        type: z.ZodLiteral<"image">;
        metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
        isNew: z.ZodBoolean;
        viewLayer: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        rotation: z.ZodNumber;
        editable: z.ZodOptional<z.ZodBoolean>;
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
    }, z.core.$strict>]>>;
}, z.core.$strict>;
export type DesignState = z.infer<typeof DesignState>;
//# sourceMappingURL=DesignState.d.ts.map