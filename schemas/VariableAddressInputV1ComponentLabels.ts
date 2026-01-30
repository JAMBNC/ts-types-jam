import { z } from "zod";

export const VariableAddressInputV1ComponentLabels = z
  .object({
    /**The text used as the description for downloading the address template*/
    "download.description": z
      .string()
      .describe(
        "The text used as the description for downloading the address template",
      )
      .default(
        "Download our template spreadsheet and enter your desired addresses in the columns provided.",
      ),
    /**The label used for the download template button*/
    "download.button.label": z
      .string()
      .describe("The label used for the download template button")
      .default("Download Template"),
    /**The icon used for the download template button*/
    "download.button.icon": z
      .string()
      .describe("The icon used for the download template button")
      .default("Download"),
    /**The text used as the description for uploading the address template*/
    "upload.description": z
      .string()
      .describe(
        "The text used as the description for uploading the address template",
      )
      .default("Upload your completed spreadsheet here to add your addresses."),
    /**The label used for the upload addresses button*/
    "upload.button.label": z
      .string()
      .describe("The label used for the upload addresses button")
      .default("Upload Spreadsheet"),
    /**The icon used for the upload addresses button*/
    "upload.button.icon": z
      .string()
      .describe("The icon used for the upload addresses button")
      .default("CloudUploadOutlined"),
    /**The label used after addresses uploaded successfully, can use the $fileName variable*/
    "upload.success.label": z
      .string()
      .describe(
        "The label used after addresses uploaded successfully, can use the $fileName variable",
      )
      .default("$fileName uploaded successfully"),
    /**The icon used with the success label*/
    "upload.success.icon": z
      .string()
      .describe("The icon used with the success label")
      .default("Check"),
    /**The label if the address upload failed, can use the $fileName variable*/
    "upload.error.label": z
      .string()
      .describe(
        "The label if the address upload failed, can use the $fileName variable",
      )
      .default("Upload Error!"),
    /**The icon used with the error label*/
    "upload.error.icon": z
      .string()
      .describe("The icon used with the error label")
      .default("ErrorOutline"),
    /**The label for the address preview input*/
    "addressPreview.label": z
      .string()
      .describe("The label for the address preview input")
      .default("Address Preview"),
  })
  .passthrough();
export type VariableAddressInputV1ComponentLabels = z.infer<
  typeof VariableAddressInputV1ComponentLabels
>;
