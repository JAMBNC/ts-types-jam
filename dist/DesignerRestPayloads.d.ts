import { z } from "zod";
/**A union of all possible Designer REST API request and response types.*/
export declare const DesignerRestPayloads: z.ZodUnion<readonly [z.ZodObject<{
    page: z.ZodNumber;
    hasNextPage: z.ZodBoolean;
    images: z.ZodArray<z.ZodObject<{
        mediaId: z.ZodString;
        thumbnailUrl: z.ZodString;
        label: z.ZodString;
        isVector: z.ZodBoolean;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    data: z.ZodObject<{
        label: z.ZodString;
        mediaBase64: z.ZodString;
        contentType: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodUnion<readonly [z.ZodObject<{
    success: z.ZodLiteral<true>;
    mediaInfo: z.ZodObject<{
        mediaId: z.ZodString;
        thumbnailUrl: z.ZodString;
        label: z.ZodString;
        isVector: z.ZodBoolean;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    success: z.ZodLiteral<false>;
    error: z.ZodString;
}, z.core.$strict>]>, z.ZodObject<{
    data: z.ZodObject<{
        process: z.ZodEnum<{
            offset: "offset";
            digital: "digital";
            foil: "foil";
            emboss: "emboss";
            screen: "screen";
            inkjet: "inkjet";
            flexography: "flexography";
            sublimation: "sublimation";
            thermal: "thermal";
        }>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodUnion<readonly [z.ZodObject<{
    success: z.ZodLiteral<true>;
    renditionInfo: z.ZodObject<{
        rgb: z.ZodObject<{
            source: z.ZodObject<{
                colorspace: z.ZodString;
                dpi: z.ZodNumber;
                type: z.ZodString;
                height: z.ZodNumber;
                width: z.ZodNumber;
                size: z.ZodString;
                url: z.ZodString;
            }, z.core.$strict>;
            url: z.ZodString;
        }, z.core.$strict>;
        cmyk: z.ZodObject<{
            source: z.ZodObject<{
                colorspace: z.ZodString;
                dpi: z.ZodNumber;
                type: z.ZodString;
                height: z.ZodNumber;
                width: z.ZodNumber;
                size: z.ZodString;
                url: z.ZodString;
            }, z.core.$strict>;
            url: z.ZodString;
        }, z.core.$strict>;
        colorAnalysis: z.ZodObject<{
            hasProcessCMY: z.ZodBoolean;
            hasProcessBlack: z.ZodBoolean;
            layerNames: z.ZodArray<z.ZodString>;
            spotColors: z.ZodArray<z.ZodObject<{
                values: z.ZodArray<z.ZodString>;
                cmykApproximation: z.ZodObject<{
                    c: z.ZodNumber;
                    m: z.ZodNumber;
                    y: z.ZodNumber;
                    k: z.ZodNumber;
                    name: z.ZodString;
                }, z.core.$strict>;
            }, z.core.$strict>>;
        }, z.core.$strict>;
        is_vector: z.ZodEnum<{
            0: "0";
            1: "1";
        }>;
        info: z.ZodObject<{
            is_vector: z.ZodEnum<{
                0: "0";
                1: "1";
            }>;
            mediaId: z.ZodString;
            guest: z.ZodBoolean;
        }, z.core.$strict>;
        type: z.ZodLiteral<"color">;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    success: z.ZodLiteral<false>;
    error: z.ZodString;
}, z.core.$strict>]>, z.ZodObject<{
    success: z.ZodBoolean;
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strict>, z.ZodObject<{
    success: z.ZodBoolean;
    designId: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    addressBooks: z.ZodOptional<z.ZodArray<z.ZodObject<{
        bookId: z.ZodString;
        name: z.ZodString;
    }, z.core.$strict>>>;
}, z.core.$strict>, z.ZodUnion<readonly [z.ZodObject<{
    addressBook: z.ZodObject<{
        bookId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        addresses: z.ZodOptional<z.ZodArray<z.ZodObject<{
            addressId: z.ZodOptional<z.ZodString>;
            bookId: z.ZodOptional<z.ZodString>;
            isCompany: z.ZodOptional<z.ZodBoolean>;
            nameLines: z.ZodOptional<z.ZodArray<z.ZodString>>;
            streets: z.ZodOptional<z.ZodArray<z.ZodString>>;
            city: z.ZodOptional<z.ZodString>;
            state: z.ZodOptional<z.ZodString>;
            postal: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            firstName: z.ZodOptional<z.ZodString>;
            lastName: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>;
        measurementAddress: z.ZodOptional<z.ZodObject<{
            addressId: z.ZodOptional<z.ZodString>;
            bookId: z.ZodOptional<z.ZodString>;
            isCompany: z.ZodOptional<z.ZodBoolean>;
            nameLines: z.ZodOptional<z.ZodArray<z.ZodString>>;
            streets: z.ZodOptional<z.ZodArray<z.ZodString>>;
            city: z.ZodOptional<z.ZodString>;
            state: z.ZodOptional<z.ZodString>;
            postal: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            firstName: z.ZodOptional<z.ZodString>;
            lastName: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        lastModified: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    success: z.ZodLiteral<true>;
}, z.core.$strict>, z.ZodObject<{
    error: z.ZodString;
    success: z.ZodLiteral<false>;
}, z.core.$strict>]>, z.ZodObject<{
    data: z.ZodObject<{
        fileName: z.ZodOptional<z.ZodString>;
        addressBook64: z.ZodString;
        contentType: z.ZodOptional<z.ZodString>;
        designUuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodUnion<readonly [z.ZodObject<{
    addressBook: z.ZodObject<{
        bookId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        addresses: z.ZodOptional<z.ZodArray<z.ZodObject<{
            addressId: z.ZodOptional<z.ZodString>;
            bookId: z.ZodOptional<z.ZodString>;
            isCompany: z.ZodOptional<z.ZodBoolean>;
            nameLines: z.ZodOptional<z.ZodArray<z.ZodString>>;
            streets: z.ZodOptional<z.ZodArray<z.ZodString>>;
            city: z.ZodOptional<z.ZodString>;
            state: z.ZodOptional<z.ZodString>;
            postal: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            firstName: z.ZodOptional<z.ZodString>;
            lastName: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>;
        measurementAddress: z.ZodOptional<z.ZodObject<{
            addressId: z.ZodOptional<z.ZodString>;
            bookId: z.ZodOptional<z.ZodString>;
            isCompany: z.ZodOptional<z.ZodBoolean>;
            nameLines: z.ZodOptional<z.ZodArray<z.ZodString>>;
            streets: z.ZodOptional<z.ZodArray<z.ZodString>>;
            city: z.ZodOptional<z.ZodString>;
            state: z.ZodOptional<z.ZodString>;
            postal: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            firstName: z.ZodOptional<z.ZodString>;
            lastName: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        lastModified: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    success: z.ZodLiteral<true>;
}, z.core.$strict>, z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    success: z.ZodLiteral<false>;
}, z.core.$strict>]>]>;
export type DesignerRestPayloads = z.infer<typeof DesignerRestPayloads>;
//# sourceMappingURL=DesignerRestPayloads.d.ts.map