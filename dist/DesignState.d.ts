import { z } from "zod";
/**The complete design state containing dimensions, pages, and ingredients.*/
export declare const DesignState: z.ZodObject<{
    expansion: z.ZodOptional<z.ZodObject<{
        canRedo: z.ZodOptional<z.ZodBoolean>;
        canUndo: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$loose>>;
    hasBuffer: z.ZodBoolean;
    height: z.ZodObject<{
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        v: z.ZodNumber;
    }, z.core.$loose>;
    ingredients: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"data">;
        data: z.ZodObject<{
            height: z.ZodOptional<z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>>;
            layerName: z.ZodOptional<z.ZodString>;
            path: z.ZodOptional<z.ZodString>;
            tag: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>>;
            x: z.ZodOptional<z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>>;
            y: z.ZodOptional<z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>>;
            additionalProperties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$loose>;
        dropshadow: z.ZodOptional<z.ZodBoolean>;
        editable: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodString;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        opacity: z.ZodNumber;
        rotation: z.ZodNumber;
        textureMask: z.ZodOptional<z.ZodBoolean>;
        validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
        viewLayer: z.ZodOptional<z.ZodEnum<{
            background: "background";
            bleed: "bleed";
            mask: "mask";
            print: "print";
        }>>;
        zIndex: z.ZodNumber;
    }, z.core.$strict>, z.ZodObject<{
        type: z.ZodLiteral<"fill">;
        color: z.ZodObject<{
            a: z.ZodOptional<z.ZodNumber>;
            b: z.ZodOptional<z.ZodNumber>;
            g: z.ZodOptional<z.ZodNumber>;
            hex: z.ZodString;
            id: z.ZodString;
            name: z.ZodString;
            r: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>;
        dropshadow: z.ZodOptional<z.ZodBoolean>;
        editable: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodString;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        opacity: z.ZodNumber;
        rect: z.ZodObject<{
            height: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            width: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            x: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            y: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
        }, z.core.$strict>;
        rotation: z.ZodNumber;
        textureMask: z.ZodOptional<z.ZodBoolean>;
        validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
        viewLayer: z.ZodOptional<z.ZodEnum<{
            background: "background";
            bleed: "bleed";
            mask: "mask";
            print: "print";
        }>>;
        zIndex: z.ZodNumber;
    }, z.core.$strict>, z.ZodObject<{
        type: z.ZodLiteral<"image">;
        dropshadow: z.ZodOptional<z.ZodBoolean>;
        editable: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodString;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        naturalHeight: z.ZodOptional<z.ZodNumber>;
        naturalWidth: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodNumber;
        rect: z.ZodObject<{
            height: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            width: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            x: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            y: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
        }, z.core.$strict>;
        imageRect: z.ZodOptional<z.ZodObject<{
            height: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            width: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            x: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            y: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
        }, z.core.$strict>>;
        legacyPixelData: z.ZodOptional<z.ZodObject<{
            realWidthPixels: z.ZodOptional<z.ZodNumber>;
            realHeightPixels: z.ZodOptional<z.ZodNumber>;
            imgWidthPixels: z.ZodOptional<z.ZodNumber>;
            imgHeightPixels: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>>;
        rotation: z.ZodNumber;
        src: z.ZodString;
        textureMask: z.ZodOptional<z.ZodBoolean>;
        validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
        viewLayer: z.ZodOptional<z.ZodEnum<{
            background: "background";
            bleed: "bleed";
            mask: "mask";
            print: "print";
        }>>;
        zIndex: z.ZodNumber;
    }, z.core.$strict>, z.ZodObject<{
        type: z.ZodLiteral<"line">;
        dropshadow: z.ZodOptional<z.ZodBoolean>;
        editable: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodString;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        opacity: z.ZodNumber;
        rect: z.ZodObject<{
            height: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            width: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            x: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            y: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
        }, z.core.$strict>;
        rotation: z.ZodNumber;
        textureMask: z.ZodOptional<z.ZodBoolean>;
        validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
        viewLayer: z.ZodOptional<z.ZodEnum<{
            background: "background";
            bleed: "bleed";
            mask: "mask";
            print: "print";
        }>>;
        zIndex: z.ZodNumber;
    }, z.core.$strict>, z.ZodObject<{
        type: z.ZodLiteral<"rectangle">;
        dropshadow: z.ZodOptional<z.ZodBoolean>;
        editable: z.ZodOptional<z.ZodBoolean>;
        fillColor: z.ZodOptional<z.ZodObject<{
            a: z.ZodOptional<z.ZodNumber>;
            b: z.ZodOptional<z.ZodNumber>;
            g: z.ZodOptional<z.ZodNumber>;
            hex: z.ZodString;
            id: z.ZodString;
            name: z.ZodString;
            r: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>>;
        id: z.ZodString;
        invertFill: z.ZodOptional<z.ZodBoolean>;
        lineDash: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        opacity: z.ZodNumber;
        rect: z.ZodObject<{
            height: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            width: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            x: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            y: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
        }, z.core.$strict>;
        rotation: z.ZodNumber;
        strokeColor: z.ZodOptional<z.ZodObject<{
            a: z.ZodOptional<z.ZodNumber>;
            b: z.ZodOptional<z.ZodNumber>;
            g: z.ZodOptional<z.ZodNumber>;
            hex: z.ZodString;
            id: z.ZodString;
            name: z.ZodString;
            r: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>>;
        strokeCornerRadius: z.ZodOptional<z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>>;
        strokeWidth: z.ZodOptional<z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>>;
        textureMask: z.ZodOptional<z.ZodBoolean>;
        validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
        viewLayer: z.ZodOptional<z.ZodEnum<{
            background: "background";
            bleed: "bleed";
            mask: "mask";
            print: "print";
        }>>;
        zIndex: z.ZodNumber;
    }, z.core.$strict>, z.ZodObject<{
        type: z.ZodLiteral<"shape">;
        dropshadow: z.ZodOptional<z.ZodBoolean>;
        editable: z.ZodOptional<z.ZodBoolean>;
        fillColor: z.ZodOptional<z.ZodObject<{
            a: z.ZodOptional<z.ZodNumber>;
            b: z.ZodOptional<z.ZodNumber>;
            g: z.ZodOptional<z.ZodNumber>;
            hex: z.ZodString;
            id: z.ZodString;
            name: z.ZodString;
            r: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>>;
        id: z.ZodString;
        invertFill: z.ZodBoolean;
        lineDash: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        opacity: z.ZodNumber;
        paths: z.ZodRecord<z.ZodString, z.ZodObject<{
            closed: z.ZodBoolean;
            points: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"bezier">;
                ix: z.ZodObject<{
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                    v: z.ZodNumber;
                }, z.core.$loose>;
                iy: z.ZodObject<{
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                    v: z.ZodNumber;
                }, z.core.$loose>;
                ox: z.ZodObject<{
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                    v: z.ZodNumber;
                }, z.core.$loose>;
                oy: z.ZodObject<{
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                    v: z.ZodNumber;
                }, z.core.$loose>;
                x: z.ZodObject<{
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                    v: z.ZodNumber;
                }, z.core.$loose>;
                y: z.ZodObject<{
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                    v: z.ZodNumber;
                }, z.core.$loose>;
            }, z.core.$strict>, z.ZodObject<{
                type: z.ZodLiteral<"line">;
                ix: z.ZodObject<{
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                    v: z.ZodNumber;
                }, z.core.$loose>;
                iy: z.ZodObject<{
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                    v: z.ZodNumber;
                }, z.core.$loose>;
                ox: z.ZodObject<{
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                    v: z.ZodNumber;
                }, z.core.$loose>;
                oy: z.ZodObject<{
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                    v: z.ZodNumber;
                }, z.core.$loose>;
                x: z.ZodObject<{
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                    v: z.ZodNumber;
                }, z.core.$loose>;
                y: z.ZodObject<{
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                    v: z.ZodNumber;
                }, z.core.$loose>;
            }, z.core.$strict>]>>;
            pointsOrdered: z.ZodArray<z.ZodString>;
        }, z.core.$strict>>;
        pathsOrdered: z.ZodArray<z.ZodString>;
        rect: z.ZodObject<{
            height: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            width: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            x: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            y: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
        }, z.core.$strict>;
        rotation: z.ZodNumber;
        strokeColor: z.ZodOptional<z.ZodObject<{
            a: z.ZodOptional<z.ZodNumber>;
            b: z.ZodOptional<z.ZodNumber>;
            g: z.ZodOptional<z.ZodNumber>;
            hex: z.ZodString;
            id: z.ZodString;
            name: z.ZodString;
            r: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>>;
        strokeWidth: z.ZodOptional<z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>>;
        textureMask: z.ZodOptional<z.ZodBoolean>;
        validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
        viewLayer: z.ZodOptional<z.ZodEnum<{
            background: "background";
            bleed: "bleed";
            mask: "mask";
            print: "print";
        }>>;
        zIndex: z.ZodNumber;
    }, z.core.$strict>, z.ZodObject<{
        type: z.ZodLiteral<"text">;
        allowRewrite: z.ZodOptional<z.ZodBoolean>;
        dropshadow: z.ZodOptional<z.ZodBoolean>;
        editable: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodString;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        opacity: z.ZodNumber;
        rect: z.ZodObject<{
            height: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            width: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            x: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            y: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
        }, z.core.$strict>;
        rotation: z.ZodNumber;
        text: z.ZodObject<{
            alignment: z.ZodEnum<{
                left: "left";
                center: "center";
                right: "right";
            }>;
            body: z.ZodArray<z.ZodString>;
            dataSource: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            fontData: z.ZodObject<{
                format: z.ZodOptional<z.ZodEnum<{
                    otf: "otf";
                    ttf: "ttf";
                }>>;
                family: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
                previewImageUrl: z.ZodOptional<z.ZodString>;
                priority: z.ZodOptional<z.ZodNumber>;
                style: z.ZodEnum<{
                    regular: "regular";
                    italic: "italic";
                    bold: "bold";
                    bold_italic: "bold_italic";
                    light: "light";
                    light_italic: "light_italic";
                }>;
                url: z.ZodOptional<z.ZodString>;
                uuid: z.ZodString;
                id: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>;
            fontSize: z.ZodString;
            leading: z.ZodOptional<z.ZodNumber>;
            measurementDataSource: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            placeholder: z.ZodOptional<z.ZodBoolean>;
            rotation: z.ZodOptional<z.ZodNumber>;
            strikethrough: z.ZodBoolean;
            textLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
                height: z.ZodObject<{
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                    v: z.ZodNumber;
                }, z.core.$loose>;
                span: z.ZodObject<{
                    charPositions: z.ZodString;
                    fontSize: z.ZodObject<{
                        u: z.ZodEnum<{
                            in: "in";
                            mm: "mm";
                            px: "px";
                            pt: "pt";
                        }>;
                        v: z.ZodNumber;
                    }, z.core.$loose>;
                    glyphIds: z.ZodString;
                    glyphIDs: z.ZodOptional<z.ZodString>;
                    glyphPositions: z.ZodString;
                    glyphXOffsets: z.ZodString;
                    glyphYOffsets: z.ZodString;
                    height: z.ZodObject<{
                        u: z.ZodEnum<{
                            in: "in";
                            mm: "mm";
                            px: "px";
                            pt: "pt";
                        }>;
                        v: z.ZodNumber;
                    }, z.core.$loose>;
                    text: z.ZodString;
                    width: z.ZodObject<{
                        u: z.ZodEnum<{
                            in: "in";
                            mm: "mm";
                            px: "px";
                            pt: "pt";
                        }>;
                        v: z.ZodNumber;
                    }, z.core.$loose>;
                    x: z.ZodObject<{
                        u: z.ZodEnum<{
                            in: "in";
                            mm: "mm";
                            px: "px";
                            pt: "pt";
                        }>;
                        v: z.ZodNumber;
                    }, z.core.$loose>;
                    y: z.ZodObject<{
                        u: z.ZodEnum<{
                            in: "in";
                            mm: "mm";
                            px: "px";
                            pt: "pt";
                        }>;
                        v: z.ZodNumber;
                    }, z.core.$loose>;
                }, z.core.$loose>;
                width: z.ZodObject<{
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                    v: z.ZodNumber;
                }, z.core.$loose>;
                x: z.ZodObject<{
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                    v: z.ZodNumber;
                }, z.core.$loose>;
                y: z.ZodObject<{
                    u: z.ZodEnum<{
                        in: "in";
                        mm: "mm";
                        px: "px";
                        pt: "pt";
                    }>;
                    v: z.ZodNumber;
                }, z.core.$loose>;
            }, z.core.$loose>>>;
            underline: z.ZodBoolean;
        }, z.core.$loose>;
        textureMask: z.ZodOptional<z.ZodBoolean>;
        validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
        viewLayer: z.ZodOptional<z.ZodEnum<{
            background: "background";
            bleed: "bleed";
            mask: "mask";
            print: "print";
        }>>;
        zIndex: z.ZodNumber;
    }, z.core.$strict>, z.ZodObject<{
        id: z.ZodString;
        rect: z.ZodOptional<z.ZodObject<{
            height: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            width: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            x: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            y: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
        }, z.core.$strict>>;
        type: z.ZodLiteral<"coating">;
        editable: z.ZodOptional<z.ZodBoolean>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        code: z.ZodString;
        opacity: z.ZodOptional<z.ZodNumber>;
        texture: z.ZodUnion<readonly [z.ZodObject<{
            hex: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            src: z.ZodString;
        }, z.core.$strict>]>;
        zIndex: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>]>>;
    materials: z.ZodOptional<z.ZodArray<z.ZodObject<{
        code: z.ZodOptional<z.ZodEnum<{
            nonPorous: "nonPorous";
            porous: "porous";
        }>>;
    }, z.core.$strict>>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    textures: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
        hex: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        src: z.ZodString;
    }, z.core.$strict>]>>>;
    pages: z.ZodRecord<z.ZodString, z.ZodObject<{
        id: z.ZodString;
        ingredientsOrdered: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>;
    pagesOrdered: z.ZodArray<z.ZodString>;
    version: z.ZodString;
    width: z.ZodObject<{
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        v: z.ZodNumber;
    }, z.core.$loose>;
}, z.core.$strict>;
export type DesignState = z.infer<typeof DesignState>;
//# sourceMappingURL=DesignState.d.ts.map