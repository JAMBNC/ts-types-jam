import { z } from "zod";
export const DesignerInitializationPayload = z.object({
    config: z
        .union([z.record(z.any()), z.string().url()])
        .describe("The designer configuration schema or URI endpoint that returns a designer configuration schema"),
    product: z
        .union([
        z.object({
            badges: z.array(z.string()).optional(),
            brand: z.string().optional(),
            browsable: z.boolean(),
            content: z.any().optional(),
            createdAt: z.string().datetime({ offset: true }).optional(),
            customization: z.any().optional(),
            displayGroup: z.string().optional(),
            identifiers: z.record(z.any()).optional(),
            media: z.array(z.any()).optional(),
            name: z.string(),
            primaryCategory: z.any().optional(),
            purchaseOptions: z.any().optional(),
            searchable: z.boolean(),
            sku: z.string(),
            specs: z.record(z.any()),
            status: z.string().optional(),
            taxonomy: z.any(),
            upc: z.string().optional(),
            updatedAt: z.string().datetime({ offset: true }).optional(),
            url: z.array(z.any()).min(1),
        }),
        z.string().url(),
    ])
        .describe("A Product schema or URI endpoint that returns a Product schema"),
    endpoints: z.object({
        design: z.object({
            save: z
                .string()
                .url()
                .describe("The endpoint URL for saving the designer data"),
        }),
        image: z.object({
            gallery: z
                .string()
                .url()
                .describe("The endpoint URL for fetching the users image gallery. (uses the DesignerAuth.endpointAuth)"),
            upload: z
                .string()
                .url()
                .describe("The endpoint URL for uploading a user image (uses the DesignerAuth.endpointAuth)"),
            delete: z
                .string()
                .url()
                .describe("The endpoint URL for removing an image from the gallery. (uses the DesignerAuth.endpointAuth)"),
            rendition: z
                .string()
                .url()
                .describe("The endpoint URL for fetching a rendition of an image from the gallery. (uses the DesignerAuth.endpointAuth)"),
        }),
        fonts: z.object({
            all: z
                .string()
                .url()
                .describe("The (optional) endpoint URL for retrieving all supported fonts")
                .optional(),
            get: z
                .string()
                .url()
                .describe("The endpoint URL for retrieving a font file by uuid "),
        }),
    }),
    auth: z.object({
        chiliAuth: z
            .string()
            .describe("The authorization token for CHILI requests"),
        endpointAuth: z
            .string()
            .describe("The authorization token for designer endpoint requests")
            .optional(),
    }),
    pricing: z
        .union([
        z
            .record(z.array(z.object({
            discountReason: z.string().optional(),
            price: z.number(),
            pricePercentOff: z.number().optional(),
            salePrice: z.number().optional(),
            startingAtQty: z.number().int(),
        })))
            .describe("Price tiers keyed by product SKU."),
        z.string().url(),
    ])
        .describe("A DesignerPricing schema or URI endpoint that returns a DesignerPricing schema")
        .optional(),
    uiLabels: z
        .union([
        z.object({
            "menubar.undo.label": z
                .string()
                .describe("The label showed with the undo button on the menu bar")
                .default("Undo"),
            "menubar.undo.icon": z
                .string()
                .describe("The icon showed with the undo button on the menu bar")
                .default("Undo"),
            "menubar.redo.label": z
                .string()
                .describe("The label showed with the redo button on the menu bar")
                .default("Redo"),
            "menubar.redo.icon": z
                .string()
                .describe("The icon showed with the redo button on the menu bar")
                .default("Redo"),
            "menubar.saveStatus.none.label": z
                .string()
                .describe("The label showed when there is nothing to save on the menu bar")
                .default("No Changes"),
            "menubar.saveStatus.none.icon": z
                .string()
                .describe("The icon showed when there is nothing to save on the menu bar")
                .default("AccessTime"),
            "menubar.saveStatus.progress.label": z
                .string()
                .describe("The label showed when saving is in progress on the menu bar")
                .default("Saving Changes..."),
            "menubar.saveStatus.progress.icon": z
                .string()
                .describe("The icon showed when saving is in progress on the menu bar")
                .default("Update"),
            "menubar.saveStatus.success.label": z
                .string()
                .describe("The label showed when saving is complete on the menu bar")
                .default("Changes Saved"),
            "menubar.saveStatus.success.icon": z
                .string()
                .describe("The icon showed when saving is complete on the menu bar")
                .default("AlarmOn"),
            "menubar.printPreview.label": z
                .string()
                .describe("The label showed with the printPreview button on the menu bar")
                .default("Print Preview"),
            "menubar.printPreview.icon": z
                .string()
                .describe("The icon showed with the printPreview button on the menu bar")
                .default("Preview"),
            "menubar.downloadProof.label": z
                .string()
                .describe("The label showed with the downloadProof button on the menu bar")
                .default("Download Proof"),
            "menubar.downloadProof.icon": z
                .string()
                .describe("The icon showed with the downloadProof button on the menu bar")
                .default("Download"),
            "menubar.pricingLabel.icon": z
                .string()
                .describe("The label showed on the menu bar pricing dropdown. This label can include $unitPrice and $totalPrice variable usage.")
                .default("Buy From $unitPrice each"),
            "menubar.nextButton.label": z
                .string()
                .describe("The label used in the button to proceed to the next steps")
                .default("Next"),
            "workspace.toolBar.stack.returnAddress.label": z
                .string()
                .describe("The label used for the return address tool in the tool bar")
                .default("Return Address"),
            "workspace.toolBar.stack.returnAddress.icon": z
                .string()
                .describe("The icon used for the return address tool in the tool bar")
                .default("MailOutlined"),
            "workspace.toolBar.tab.returnAddress.label": z
                .string()
                .describe("The return address.toolBar tab top title text")
                .default("Return Address"),
            "workspace.toolBar.tab.returnAddress.position.label": z
                .string()
                .describe("The return address postition selector label text")
                .default("Position"),
            "workspace.toolBar.tab.returnAddress.position.front.label": z
                .string()
                .describe("The return address front postition option label text")
                .default("Front"),
            "workspace.toolBar.tab.returnAddress.position.backFlap.label": z
                .string()
                .describe("The return address front postition option label text")
                .default("Back Flap"),
            "workspace.toolBar.tab.returnAddress.address.label": z
                .string()
                .describe("The return address mailing address input label")
                .default("Mailing Address"),
            "workspace.toolBar.tab.returnAddress.address.placeholder": z
                .string()
                .describe("The return address mailing address placeholder text")
                .default("Paste Return Address Here"),
            "workspace.toolBar.tab.returnAddress.color.label": z
                .string()
                .describe("The return address color input label")
                .default("Color"),
            "workspace.toolBar.tab.returnAddress.color.component": z
                .object({
                "tabs.standard.label": z
                    .string()
                    .describe("The label for the standard inks selection tab")
                    .default("Standard Inks"),
                "tabs.metallic.label": z
                    .string()
                    .describe("The label for the metallic inks selection tab")
                    .default("Metallic Inks"),
                "selectedInk.label": z
                    .string()
                    .describe("The label used to display the current selected ink. Can utilize $currentInk variable")
                    .default("Selected: $currentInk"),
                "imageColors.label": z
                    .string()
                    .describe("The label used when presenting the current colors of the image")
                    .default("My Image Colors"),
            })
                .optional(),
            "workspace.toolBar.stack.mailingAddress.label": z
                .string()
                .describe("The label used for the Mailing Address tool in the.toolBar")
                .default("Mailing Address"),
            "workspace.toolBar.stack.mailingAddress.icon": z
                .string()
                .describe("The icon used for the Mailing Address tool in the.toolBar")
                .default("LabelImportantOutlined"),
            "workspace.toolBar.tab.mailingAddress.label": z
                .string()
                .describe("The mailing address address.toolBar tab top title text")
                .default("Mailing Address"),
            "workspace.toolBar.tab.mailingAddress.type.label": z
                .string()
                .describe("The label for the address type input")
                .default("Type"),
            "workspace.toolBar.tab.mailingAddress.type.singleAddress.label": z
                .string()
                .describe("The label for the single address input option")
                .default("Single Address"),
            "workspace.toolBar.tab.mailingAddress.type.multipleAddress.label": z
                .string()
                .describe("The label for the multiple address input option")
                .default("Multiple Addresses"),
            "workspace.toolBar.tab.mailingAddress.multipleAddress.label": z
                .string()
                .describe("The label for the multiple address component")
                .default("Adding Multiple Addresses"),
            "workspace.toolBar.tab.mailingAddress.multipleAddress.component": z
                .object({
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
            })
                .optional(),
            "workspace.toolBar.tab.mailingAddress.address.label": z
                .string()
                .describe("The mailing address address input label")
                .default("Mailing Address"),
            "workspace.toolBar.tab.mailingAddress.address.placeholder": z
                .string()
                .describe("The return address mailing address placeholder text")
                .default("Paste Mailing Address Here"),
            "workspace.toolBar.tab.mailingAdress.color.label": z
                .string()
                .describe("The return address color input label")
                .default("Color"),
            "workspace.toolBar.tab.mailingAddress.color.component": z
                .object({
                "tabs.standard.label": z
                    .string()
                    .describe("The label for the standard inks selection tab")
                    .default("Standard Inks"),
                "tabs.metallic.label": z
                    .string()
                    .describe("The label for the metallic inks selection tab")
                    .default("Metallic Inks"),
                "selectedInk.label": z
                    .string()
                    .describe("The label used to display the current selected ink. Can utilize $currentInk variable")
                    .default("Selected: $currentInk"),
                "imageColors.label": z
                    .string()
                    .describe("The label used when presenting the current colors of the image")
                    .default("My Image Colors"),
            })
                .optional(),
            "workspace.toolBar.stack.image.label": z
                .string()
                .describe("The label used for the Image tool in the.toolBar")
                .default("Image"),
            "workspace.toolBar.stack.image.icon": z
                .string()
                .describe("The icon used for the Image tool in the.toolBar")
                .default("AddPhotoAlternateOutlined"),
            "workspace.toolBar.tab.image.label": z
                .string()
                .describe("The title for the image tool tab")
                .default("Image"),
            "workspace.toolBar.tab.image.upload.button.label": z
                .string()
                .describe("The label used for the image upload button")
                .default("Add Image"),
            "workspace.toolBar.tab.image.upload.button.icon": z
                .string()
                .describe("The icon used with the image upload label")
                .default("AddPhotoAlternateOutlined"),
            "workspace.toolBar.tab.image.gallery.label": z
                .string()
                .describe("The text label used for the image gallery section")
                .default("My Images"),
            "workspace.toolBar.tab.image.gallery.delete.button.label": z
                .string()
                .describe("The text label for the delete image button in the image gallery")
                .default("Remove"),
            "workspace.toolBar.tab.image.gallery.delete.button.icon": z
                .string()
                .describe("The icon used for the delete image button")
                .default("Close"),
            "workspace.canvasSpace.widgets.floatingPageSelector.front.label": z
                .string()
                .describe("The label used for the front page selection option")
                .default("Front"),
            "workspace.canvasSpace.widgets.floatingPageSelector.back.label": z
                .string()
                .describe("The label used for the back page selection option")
                .default("Back"),
            "workspace.canvasSpace.widgets.floatingToolTip.safetyLine.label": z
                .string()
                .describe("The label used for the safety line floating tooltip")
                .default("Safety Area"),
            "workspace.canvasSpace.widgets.floatingToolTip.safetyLine.hover.label": z
                .string()
                .describe("The hover text for the safety line tooltip")
                .default("Keep text and important elements inside this line to prevent them from being cut off."),
            "workspace.canvasSpace.widgets.floatingToolTip.cutLine.label": z
                .string()
                .describe("The label used for the cut line floating tooltip")
                .default("Cut Line"),
            "workspace.canvasSpace.widgets.floatingToolTip.cutLine.hover.label": z
                .string()
                .describe("The hover text for the cut line tooltip")
                .default("The line where this product is cut at. Extend background art slightly past this line if you want full coverage"),
            "workspace.canvasSpace.widgets.floatingToolTip.bleedLine.label": z
                .string()
                .describe("The label used for the bleed line floating tooltip")
                .default("Bleed Line"),
            "workspace.canvasSpace.widgets.floatingToolTip.bleedLine.hover.label": z
                .string()
                .describe("The hover text for the bleed line tooltip")
                .default("Extend background colors or images to this line to avoid white edges."),
            "workspace.bonusBar.pricing.label": z
                .string()
                .describe("The pricing bonus bar title")
                .default("Summary"),
            "modal.printPreview.label": z
                .string()
                .describe("The title for the print preview modal")
                .default("Print Preview"),
            "modal.printPreview.description.label": z
                .string()
                .describe("The text for the print preview description")
                .default("Printed colors can appear slightly different depending on the color or material you're printing on. We've adjusted the colors in your image to reflect how they're likely to look once printed"),
            "modal.printPreview.pageSelector.front.label": z
                .string()
                .describe("The label used for the front page selection option")
                .default("Front"),
            "modal.printPreview.pageSelector.back.label": z
                .string()
                .describe("The label used for the back page selection option")
                .default("Back"),
            "adder.foil_coverage_sm.label": z
                .string()
                .describe("The ui label for the foil coverage small adder")
                .default("Small Foil Coverage"),
            "adder.foil_coverage_std.label": z
                .string()
                .describe("The ui label for the foil coverage standard adder")
                .default("Standard Foil Coverage"),
            "adder.foil_coverage_lg.label": z
                .string()
                .describe("The ui label for the foil coverage large adder")
                .default("Large Foil Coverage"),
            "adder.foil_coverage_xl.label": z
                .string()
                .describe("The ui label for the foil coverage extra-large adder")
                .default("Extra Large Foil Coverage"),
            "adder.foil_stamp_1.label": z
                .string()
                .describe("The ui label for a single foil impression")
                .default("Single Foil Impression"),
            "adder.foil_stamp_2.label": z
                .string()
                .describe("The ui label for two foil impressions")
                .default("Two Foil Impressions"),
            "adder.foil_stamp_3.label": z
                .string()
                .describe("The ui label for three foil impressions")
                .default("Three Foil Impressions"),
            "adder.foil_stamp_4.label": z
                .string()
                .describe("The ui label for four foil impressions")
                .default("Four Foil Impressions"),
            "adder.foil_stamp_5.label": z
                .string()
                .describe("The ui label for five foil impressions")
                .default("Five Foil Impressions"),
            "adder.color_side1_blk.label": z
                .string()
                .describe("Label for 1 Black ink")
                .default("1 Black Ink"),
            "adder.color_side1_std.label": z
                .string()
                .describe("Label for 1 Standard ink")
                .default("1 Standard Ink"),
            "adder.color_side1_pms.label": z
                .string()
                .describe("Label for 1 Custom PMS ink")
                .default("1 Custom PMS Ink"),
            "adder.color_side1_blk_std.label": z
                .string()
                .describe("Label for 1 Black and 1 Standard ink")
                .default("1 Black and 1 Standard Ink"),
            "adder.color_side1_blk_pms.label": z
                .string()
                .describe("Label for 1 Black and 1 Custom PMS ink")
                .default("1 Black and 1 Custom PMS Ink"),
            "adder.color_side1_2std.label": z
                .string()
                .describe("Label for 2 Standard inks")
                .default("2 Standard Inks"),
            "adder.color_side1_std_pms.label": z
                .string()
                .describe("Label for 1 Standard and 1 Custom PMS ink")
                .default("1 Standard and 1 Custom PMS Ink"),
            "adder.color_side1_2pms.label": z
                .string()
                .describe("Label for 2 Custom PMS inks")
                .default("2 Custom PMS Inks"),
            "adder.color_side1_blk_2std.label": z
                .string()
                .describe("Label for 2 Standard inks and 1 Black ink")
                .default("2 Standard Inks and 1 Black Ink"),
            "adder.color_side1_blk_std_pms.label": z
                .string()
                .describe("Label for 1 Black, 1 Standard, and 1 Custom PMS ink")
                .default("1 Black, 1 Standard, and 1 Custom PMS Ink"),
            "adder.color_side1_blk_2pms.label": z
                .string()
                .describe("Label for 2 Custom PMS inks and 1 Black ink")
                .default("2 Custom PMS Inks and 1 Black Ink"),
            "adder.color_side1_3std.label": z
                .string()
                .describe("Label for 3 Standard inks")
                .default("3 Standard Inks"),
            "adder.color_side1_2std_pms.label": z
                .string()
                .describe("Label for 2 Standard inks and 1 Custom PMS ink")
                .default("2 Standard Inks and 1 Custom PMS Ink"),
            "adder.color_side1_std_2pms.label": z
                .string()
                .describe("Label for 2 Custom PMS inks and 1 Standard ink")
                .default("2 Custom PMS Inks and 1 Standard Ink"),
            "adder.color_side1_3pms.label": z
                .string()
                .describe("Label for 3 Custom PMS inks")
                .default("3 Custom PMS Inks"),
            "adder.color_side1_blk_3std.label": z
                .string()
                .describe("Label for 3 Standard inks and 1 Black ink")
                .default("3 Standard Inks and 1 Black Ink"),
            "adder.color_side1_blk_2std_pms.label": z
                .string()
                .describe("Label for 2 Standard, 1 Black, and 1 Custom PMS ink")
                .default("2 Standard Inks, 1 Black, and 1 Custom PMS Ink"),
            "adder.color_side1_blk_std_2pms.label": z
                .string()
                .describe("Label for 2 Custom PMS, 1 Black, and 1 Standard ink")
                .default("2 Custom PMS Inks, 1 Black, and 1 Standard Ink"),
            "adder.color_side1_blk_3pms.label": z
                .string()
                .describe("Label for 3 Custom PMS inks and 1 Black ink")
                .default("3 Custom PMS Inks and 1 Black Ink"),
            "adder.color_side1_4std.label": z
                .string()
                .describe("Label for 4 Standard inks")
                .default("4 Standard Inks"),
            "adder.color_side1_3std_pms.label": z
                .string()
                .describe("Label for 3 Standard inks and 1 Custom PMS ink")
                .default("3 Standard Inks and 1 Custom PMS Ink"),
            "adder.color_side1_2std_2pms.label": z
                .string()
                .describe("Label for 2 Standard inks and 2 Custom PMS inks")
                .default("2 Standard Inks and 2 Custom PMS Inks"),
            "adder.color_side1_std_3pms.label": z
                .string()
                .describe("Label for 3 Custom PMS inks and 1 Standard ink")
                .default("3 Custom PMS Inks and 1 Standard Ink"),
            "adder.color_side1_4pms.label": z
                .string()
                .describe("Label for 4 Custom PMS inks")
                .default("4 Custom PMS Inks"),
            "adder.color_side1_cmyk.label": z
                .string()
                .describe("Label for Full Color (CMYK) printing")
                .default("Full Color"),
            "adder.color_side2_one_color.label": z
                .string()
                .describe("The ui label for one color printing on side two")
                .default("Second Side One Color"),
            "adder.color_side2_two_color.label": z
                .string()
                .describe("The ui label for two color printing on side two")
                .default("Second Side Two Colors"),
            "adder.color_side2_three_color.label": z
                .string()
                .describe("The ui label for three color printing on side two")
                .default("Second Side Three Colors"),
            "adder.color_side2_four_color.label": z
                .string()
                .describe("The ui label for four color printing on side two")
                .default("Second Side Four Colors"),
            "adder.color_side2_cmyk.label": z
                .string()
                .describe("The ui label for full color (CMYK) printing on side two")
                .default("Second Side Full Color"),
            "adder.varaddress_side1.label": z
                .string()
                .describe("The ui label for variable addressing on side one")
                .default("Variable Addressing Side 1"),
            "adder.varaddress_side2.label": z
                .string()
                .describe("The ui label for variable addressing on side two")
                .default("Variable Addressing Side 2"),
        }),
        z.string().url(),
    ])
        .describe("The UI Label schema used to configure the labels on the designer (optional)")
        .optional(),
    fonts: z
        .array(z
        .object({
        uuid: z
            .string()
            .uuid()
            .describe("A unique UUID identifier for the font."),
        name: z.string().describe("The name of the font."),
    })
        .strict()
        .describe("A font definition for injection into the designer."))
        .describe("An (optional) array of DesignerFont schemas used to configure the fonts available in the designer. If this property is not provided, then the endpoints.fonts.all endpoint will be used to fetch the fonts.")
        .optional(),
    metadata: z
        .record(z.any())
        .describe("An (optional) object containing additional metadata for the designer initialization payload.")
        .optional(),
});
