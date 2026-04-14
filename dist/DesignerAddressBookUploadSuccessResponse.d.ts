import { z } from "zod";
/**The success response from uploading an address book.*/
export declare const DesignerAddressBookUploadSuccessResponse: z.ZodObject<{
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
}, z.core.$strict>;
export type DesignerAddressBookUploadSuccessResponse = z.infer<typeof DesignerAddressBookUploadSuccessResponse>;
//# sourceMappingURL=DesignerAddressBookUploadSuccessResponse.d.ts.map