import { z } from "zod";
export const VariableAddressInputV1ComponentLabels = z.object({
    "download.description": z
        .string()
        .describe("The text used as the description for downloading the address template")
        .default("Download our template spreadsheet and enter your desired addresses in the columns provided."),
    "download.button.label": z
        .string()
        .describe("The label used for the download template button")
        .default("Download Template"),
    "download.button.icon": z
        .string()
        .describe("The icon used for the download template button")
        .default("Download"),
    "upload.description": z
        .string()
        .describe("The text used as the description for uploading the address template")
        .default("Upload your completed spreadsheet here to add your addresses."),
    "upload.button.label": z
        .string()
        .describe("The label used for the upload addresses button")
        .default("Upload Spreadsheet"),
    "upload.button.icon": z
        .string()
        .describe("The icon used for the upload addresses button")
        .default("CloudUploadOutlined"),
    "upload.success.label": z
        .string()
        .describe("The label used after addresses uploaded successfully, can use the $fileName variable")
        .default("$fileName uploaded successfully"),
    "upload.success.icon": z
        .string()
        .describe("The icon used with the success label")
        .default("Check"),
    "upload.error.label": z
        .string()
        .describe("The label if the address upload failed, can use the $fileName variable")
        .default("Upload Error!"),
    "upload.error.icon": z
        .string()
        .describe("The icon used with the error label")
        .default("ErrorOutline"),
    "addressPreview.label": z
        .string()
        .describe("The label for the address preview input")
        .default("Address Preview"),
});
