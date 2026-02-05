import { z } from "zod";

export const DesignerInitializationPayload = z
  .object({
    /**The designer configuration schema or URI endpoint that returns a designer configuration schema*/
    config: z
      .union([z.record(z.any()), z.string().url()])
      .describe(
        "The designer configuration schema or URI endpoint that returns a designer configuration schema",
      ),
    /**A Product schema or URI endpoint that returns a Product schema*/
    product: z
      .union([
        z
          .object({
            badges: z.array(z.string()).optional(),
            brand: z.string().optional(),
            browsable: z.boolean(),
            content: z
              .object({
                breadcrumbs: z
                  .array(
                    z
                      .object({ label: z.string(), url: z.string().optional() })
                      .passthrough(),
                  )
                  .optional(),
                longDescription: z.string().optional(),
                metaDescription: z.string().optional(),
                metaKeywords: z.string().optional(),
                metaTitle: z.string().optional(),
                seoDescription: z.string().optional(),
                shortDescription: z.string().optional(),
                shortName: z.string().optional(),
              })
              .passthrough()
              .optional(),
            createdAt: z.string().datetime({ offset: true }).optional(),
            customization: z
              .object({
                prebuiltConfigurationId: z.string().optional(),
                prebuiltCustomizable: z.boolean().optional(),
                prebuiltDesign: z.boolean().optional(),
                stockType: z.string().optional(),
                styleType: z.string().optional(),
              })
              .passthrough()
              .optional(),
            displayGroup: z.string().optional(),
            identifiers: z.record(z.any()).optional(),
            media: z
              .array(
                z
                  .object({
                    altText: z.string().optional(),
                    label: z.string().optional(),
                    mediaType: z.enum(["image", "video"]),
                    previewUrl: z.string().optional(),
                    tags: z
                      .array(
                        z.enum([
                          "primary",
                          "small",
                          "thumbnail",
                          "yourLogoHere",
                          "insideView",
                          "swatch",
                          "amazon",
                          "carousel",
                          "other",
                        ]),
                      )
                      .optional(),
                    url: z.string(),
                  })
                  .passthrough(),
              )
              .optional(),
            name: z.string(),
            primaryCategory: z
              .object({
                id: z.number().int(),
                label: z.string(),
                url: z.string(),
              })
              .passthrough()
              .optional(),
            purchaseOptions: z
              .object({
                allowsSample: z.boolean(),
                customLeadTimeDayRange: z
                  .object({
                    max: z.number().int().gte(0).optional(),
                    min: z.number().int().gte(0),
                  })
                  .passthrough()
                  .optional(),
                customizable: z.boolean(),
                designRequired: z.boolean(),
                inStock: z.boolean(),
                isReturnable: z.boolean(),
                maxPrice: z.number(),
                minCustomizationQty: z.number().int().gt(0).optional(),
                minPrice: z.number(),
                minSaleQty: z.number().int().gt(0).optional(),
                onSale: z.boolean().optional(),
                plainLeadTimeDayRange: z
                  .object({
                    max: z.number().int().gte(0).optional(),
                    min: z.number().int().gte(0),
                  })
                  .passthrough()
                  .optional(),
                pricePercentOff: z.number().optional(),
                quantityStepIncrements: z
                  .array(
                    z
                      .object({
                        requiredStepIncrement: z.number().int(),
                        startingAtQty: z.number().int(),
                      })
                      .passthrough(),
                  )
                  .optional(),
                stockQty: z.number().int().gte(0),
                suggestedQuantityDisplays: z.array(z.number().int()).optional(),
                tierPrices: z.array(
                  z
                    .object({
                      discountReason: z.string().optional(),
                      price: z.number(),
                      pricePercentOff: z.number().optional(),
                      salePrice: z.number().optional(),
                      startingAtQty: z.number().int(),
                    })
                    .passthrough(),
                ),
                toBeDiscontinued: z.boolean(),
              })
              .passthrough()
              .optional(),
            searchable: z.boolean(),
            sku: z.string(),
            specs: z.record(z.string()),
            status: z.string().optional(),
            taxonomy: z
              .object({
                master: z.string().optional(),
                primary: z.string().optional(),
                sub: z.string().optional(),
              })
              .passthrough(),
            upc: z.string().optional(),
            updatedAt: z.string().datetime({ offset: true }).optional(),
            url: z
              .array(
                z
                  .object({
                    metaData: z
                      .object({
                        creativeEngine: z.enum(["chili", "alchemy"]).optional(),
                        designer: z
                          .enum(["chili", "luma", "addrLogo"])
                          .optional(),
                      })
                      .passthrough()
                      .optional(),
                    url: z.string().optional(),
                    urlType: z
                      .enum(["product", "customProduct", "yourLogoHere"])
                      .optional(),
                  })
                  .passthrough(),
              )
              .min(1),
          })
          .passthrough(),
        z.string().url(),
      ])
      .describe(
        "A Product schema or URI endpoint that returns a Product schema",
      ),
    endpoints: z
      .object({
        design: z
          .object({
            /**The endpoint URL for saving the designer data*/
            save: z
              .string()
              .url()
              .describe("The endpoint URL for saving the designer data"),
          })
          .strict(),
        image: z
          .object({
            /**The endpoint URL for fetching the users image gallery. (uses the DesignerAuth.endpointAuth)*/
            gallery: z
              .string()
              .url()
              .describe(
                "The endpoint URL for fetching the users image gallery. (uses the DesignerAuth.endpointAuth)",
              ),
            /**The endpoint URL for uploading a user image (uses the DesignerAuth.endpointAuth)*/
            upload: z
              .string()
              .url()
              .describe(
                "The endpoint URL for uploading a user image (uses the DesignerAuth.endpointAuth)",
              ),
            /**The endpoint URL for removing an image from the gallery. (uses the DesignerAuth.endpointAuth)*/
            delete: z
              .string()
              .url()
              .describe(
                "The endpoint URL for removing an image from the gallery. (uses the DesignerAuth.endpointAuth)",
              ),
            /**The endpoint URL for fetching a rendition of an image from the gallery. (uses the DesignerAuth.endpointAuth)*/
            rendition: z
              .string()
              .url()
              .describe(
                "The endpoint URL for fetching a rendition of an image from the gallery. (uses the DesignerAuth.endpointAuth)",
              ),
          })
          .strict(),
        fonts: z
          .object({
            /**The (optional) endpoint URL for retrieving all supported fonts*/
            all: z
              .string()
              .url()
              .describe(
                "The (optional) endpoint URL for retrieving all supported fonts",
              )
              .optional(),
            /**The endpoint URL for retrieving a font file by uuid */
            get: z
              .string()
              .url()
              .describe("The endpoint URL for retrieving a font file by uuid "),
          })
          .strict(),
        colors: z
          .object({
            /**The (optional) endpoint URL for retrieving all supported colors + palettes*/
            all: z
              .string()
              .url()
              .describe(
                "The (optional) endpoint URL for retrieving all supported colors + palettes",
              ),
          })
          .strict(),
      })
      .strict(),
    auth: z
      .object({
        /**API key authentication, typically sent as a header or query parameter.*/
        chiliAuth: z
          .object({
            type: z.literal("apiKey"),
            /**The API key value.*/
            key: z.string().describe("The API key value."),
            /**The header name to use for the API key.*/
            headerName: z
              .string()
              .describe("The header name to use for the API key.")
              .default("X-API-Key"),
            /**Where to send the API key.*/
            in: z
              .enum(["header", "query"])
              .describe("Where to send the API key.")
              .default("header"),
          })
          .strict()
          .describe(
            "API key authentication, typically sent as a header or query parameter.",
          ),
        /**A discriminated union of all supported authentication types.*/
        endpointAuth: z
          .discriminatedUnion("type", [
            z
              .object({
                type: z.literal("bearer"),
                /**The bearer token value.*/
                token: z.string().describe("The bearer token value."),
              })
              .strict()
              .describe(
                "A bearer token that is sent in the Authorization header.",
              ),
            z
              .object({
                type: z.literal("basic"),
                /**The username for authentication.*/
                username: z
                  .string()
                  .describe("The username for authentication."),
                /**The password for authentication.*/
                password: z
                  .string()
                  .describe("The password for authentication."),
              })
              .strict()
              .describe("Basic authentication using a username and password."),
            z
              .object({
                type: z.literal("apiKey"),
                /**The API key value.*/
                key: z.string().describe("The API key value."),
                /**The header name to use for the API key.*/
                headerName: z
                  .string()
                  .describe("The header name to use for the API key.")
                  .default("X-API-Key"),
                /**Where to send the API key.*/
                in: z
                  .enum(["header", "query"])
                  .describe("Where to send the API key.")
                  .default("header"),
              })
              .strict()
              .describe(
                "API key authentication, typically sent as a header or query parameter.",
              ),
            z
              .object({
                type: z.literal("oauth2_client_credentials"),
                /**The OAuth2 client ID.*/
                clientId: z.string().describe("The OAuth2 client ID."),
                /**The OAuth2 client secret.*/
                clientSecret: z.string().describe("The OAuth2 client secret."),
                /**The URL to obtain access tokens from.*/
                tokenUrl: z
                  .string()
                  .url()
                  .describe("The URL to obtain access tokens from."),
                /**The scopes to request.*/
                scopes: z
                  .array(z.string())
                  .describe("The scopes to request.")
                  .optional(),
              })
              .strict()
              .describe("OAuth2 client credentials for machine-to-machine."),
            z
              .object({
                type: z.literal("oauth2_authorization_code"),
                /**The OAuth2 client ID.*/
                clientId: z.string().describe("The OAuth2 client ID."),
                /**The OAuth2 client secret.*/
                clientSecret: z.string().describe("The OAuth2 client secret."),
                /**The URL to redirect users for authorization.*/
                authorizationUrl: z
                  .string()
                  .url()
                  .describe("The URL to redirect users for authorization."),
                /**The URL to exchange authorization codes for tokens.*/
                tokenUrl: z
                  .string()
                  .url()
                  .describe(
                    "The URL to exchange authorization codes for tokens.",
                  ),
                /**The redirect URI registered with the OAuth2 provider.*/
                redirectUri: z
                  .string()
                  .url()
                  .describe(
                    "The redirect URI registered with the OAuth2 provider.",
                  ),
                /**The scopes to request.*/
                scopes: z
                  .array(z.string())
                  .describe("The scopes to request.")
                  .optional(),
              })
              .strict()
              .describe(
                "OAuth2 authorization code grant for user-delegated authentication.",
              ),
            z
              .object({
                type: z.literal("oauth2_refresh_token"),
                /**The OAuth2 client ID.*/
                clientId: z.string().describe("The OAuth2 client ID."),
                /**The OAuth2 client secret.*/
                clientSecret: z
                  .string()
                  .describe("The OAuth2 client secret.")
                  .optional(),
                /**The URL to obtain new access tokens.*/
                tokenUrl: z
                  .string()
                  .url()
                  .describe("The URL to obtain new access tokens."),
                /**The refresh token value.*/
                refreshToken: z.string().describe("The refresh token value."),
              })
              .strict()
              .describe(
                "OAuth2 refresh token grant for obtaining new access tokens.",
              ),
          ])
          .describe(
            "A discriminated union of all supported authentication types.",
          )
          .optional(),
      })
      .strict(),
    /**A DesignerPricing schema or URI endpoint that returns a DesignerPricing schema*/
    pricing: z
      .union([
        z
          .record(
            z.array(
              z
                .object({
                  discountReason: z.string().optional(),
                  price: z.number(),
                  pricePercentOff: z.number().optional(),
                  salePrice: z.number().optional(),
                  startingAtQty: z.number().int(),
                })
                .passthrough(),
            ),
          )
          .superRefine((value, ctx) => {
            for (const key in value) {
              const result = z
                .string()
                .describe("A product sku")
                .safeParse(key);
              if (!result.success) {
                ctx.addIssue({
                  path: [...ctx.path, key],
                  code: "custom",
                  message: `Invalid property name: ${key}`,
                  params: {
                    issues: result.error.issues,
                  },
                });
              }
            }
          })
          .describe("Price tiers keyed by product SKU."),
        z.string().url(),
      ])
      .describe(
        "A DesignerPricing schema or URI endpoint that returns a DesignerPricing schema",
      )
      .optional(),
    /**The UI Label schema used to configure the labels on the designer (optional)*/
    uiLabels: z
      .union([
        z
          .object({
            /**The label showed with the undo button on the menu bar*/
            "menubar.undo.label": z
              .string()
              .describe("The label showed with the undo button on the menu bar")
              .default("Undo"),
            /**The icon showed with the undo button on the menu bar*/
            "menubar.undo.icon": z
              .string()
              .describe("The icon showed with the undo button on the menu bar")
              .default("Undo"),
            /**The label showed with the redo button on the menu bar*/
            "menubar.redo.label": z
              .string()
              .describe("The label showed with the redo button on the menu bar")
              .default("Redo"),
            /**The icon showed with the redo button on the menu bar*/
            "menubar.redo.icon": z
              .string()
              .describe("The icon showed with the redo button on the menu bar")
              .default("Redo"),
            /**The label showed when there is nothing to save on the menu bar*/
            "menubar.saveStatus.none.label": z
              .string()
              .describe(
                "The label showed when there is nothing to save on the menu bar",
              )
              .default("No Changes"),
            /**The icon showed when there is nothing to save on the menu bar*/
            "menubar.saveStatus.none.icon": z
              .string()
              .describe(
                "The icon showed when there is nothing to save on the menu bar",
              )
              .default("AccessTime"),
            /**The label showed when saving is in progress on the menu bar*/
            "menubar.saveStatus.progress.label": z
              .string()
              .describe(
                "The label showed when saving is in progress on the menu bar",
              )
              .default("Saving Changes..."),
            /**The icon showed when saving is in progress on the menu bar*/
            "menubar.saveStatus.progress.icon": z
              .string()
              .describe(
                "The icon showed when saving is in progress on the menu bar",
              )
              .default("Update"),
            /**The label showed when saving is complete on the menu bar*/
            "menubar.saveStatus.success.label": z
              .string()
              .describe(
                "The label showed when saving is complete on the menu bar",
              )
              .default("Changes Saved"),
            /**The icon showed when saving is complete on the menu bar*/
            "menubar.saveStatus.success.icon": z
              .string()
              .describe(
                "The icon showed when saving is complete on the menu bar",
              )
              .default("AlarmOn"),
            /**The label showed with the printPreview button on the menu bar*/
            "menubar.printPreview.label": z
              .string()
              .describe(
                "The label showed with the printPreview button on the menu bar",
              )
              .default("Print Preview"),
            /**The icon showed with the printPreview button on the menu bar*/
            "menubar.printPreview.icon": z
              .string()
              .describe(
                "The icon showed with the printPreview button on the menu bar",
              )
              .default("Preview"),
            /**The label showed with the downloadProof button on the menu bar*/
            "menubar.downloadProof.label": z
              .string()
              .describe(
                "The label showed with the downloadProof button on the menu bar",
              )
              .default("Download Proof"),
            /**The icon showed with the downloadProof button on the menu bar*/
            "menubar.downloadProof.icon": z
              .string()
              .describe(
                "The icon showed with the downloadProof button on the menu bar",
              )
              .default("Download"),
            /**The label showed on the menu bar pricing dropdown. This label can include $unitPrice and $totalPrice variable usage.*/
            "menubar.pricingLabel.icon": z
              .string()
              .describe(
                "The label showed on the menu bar pricing dropdown. This label can include $unitPrice and $totalPrice variable usage.",
              )
              .default("Buy From $unitPrice each"),
            /**The label used in the button to proceed to the next steps*/
            "menubar.nextButton.label": z
              .string()
              .describe(
                "The label used in the button to proceed to the next steps",
              )
              .default("Next"),
            /**The label used for the return address tool in the tool bar*/
            "workspace.toolBar.stack.returnAddress.label": z
              .string()
              .describe(
                "The label used for the return address tool in the tool bar",
              )
              .default("Return Address"),
            /**The icon used for the return address tool in the tool bar*/
            "workspace.toolBar.stack.returnAddress.icon": z
              .string()
              .describe(
                "The icon used for the return address tool in the tool bar",
              )
              .default("MailOutlined"),
            /**The return address.toolBar tab top title text*/
            "workspace.toolBar.tab.returnAddress.label": z
              .string()
              .describe("The return address.toolBar tab top title text")
              .default("Return Address"),
            /**The return address postition selector label text*/
            "workspace.toolBar.tab.returnAddress.position.label": z
              .string()
              .describe("The return address postition selector label text")
              .default("Position"),
            /**The return address front postition option label text*/
            "workspace.toolBar.tab.returnAddress.position.front.label": z
              .string()
              .describe("The return address front postition option label text")
              .default("Front"),
            /**The return address front postition option label text*/
            "workspace.toolBar.tab.returnAddress.position.backFlap.label": z
              .string()
              .describe("The return address front postition option label text")
              .default("Back Flap"),
            /**The return address mailing address input label*/
            "workspace.toolBar.tab.returnAddress.address.label": z
              .string()
              .describe("The return address mailing address input label")
              .default("Mailing Address"),
            /**The return address mailing address placeholder text*/
            "workspace.toolBar.tab.returnAddress.address.placeholder": z
              .string()
              .describe("The return address mailing address placeholder text")
              .default("Paste Return Address Here"),
            /**The return address color input label*/
            "workspace.toolBar.tab.returnAddress.color.label": z
              .string()
              .describe("The return address color input label")
              .default("Color"),
            "workspace.toolBar.tab.returnAddress.color.component": z
              .object({
                /**The label for the standard inks selection tab*/
                "tabs.standard.label": z
                  .string()
                  .describe("The label for the standard inks selection tab")
                  .default("Standard Inks"),
                /**The label for the metallic inks selection tab*/
                "tabs.metallic.label": z
                  .string()
                  .describe("The label for the metallic inks selection tab")
                  .default("Metallic Inks"),
                /**The label used to display the current selected ink. Can utilize $currentInk variable*/
                "selectedInk.label": z
                  .string()
                  .describe(
                    "The label used to display the current selected ink. Can utilize $currentInk variable",
                  )
                  .default("Selected: $currentInk"),
                /**The label used when presenting the current colors of the image*/
                "imageColors.label": z
                  .string()
                  .describe(
                    "The label used when presenting the current colors of the image",
                  )
                  .default("My Image Colors"),
              })
              .passthrough()
              .optional(),
            /**The label used for the Mailing Address tool in the.toolBar*/
            "workspace.toolBar.stack.mailingAddress.label": z
              .string()
              .describe(
                "The label used for the Mailing Address tool in the.toolBar",
              )
              .default("Mailing Address"),
            /**The icon used for the Mailing Address tool in the.toolBar*/
            "workspace.toolBar.stack.mailingAddress.icon": z
              .string()
              .describe(
                "The icon used for the Mailing Address tool in the.toolBar",
              )
              .default("LabelImportantOutlined"),
            /**The mailing address address.toolBar tab top title text*/
            "workspace.toolBar.tab.mailingAddress.label": z
              .string()
              .describe(
                "The mailing address address.toolBar tab top title text",
              )
              .default("Mailing Address"),
            /**The label for the address type input*/
            "workspace.toolBar.tab.mailingAddress.type.label": z
              .string()
              .describe("The label for the address type input")
              .default("Type"),
            /**The label for the single address input option*/
            "workspace.toolBar.tab.mailingAddress.type.singleAddress.label": z
              .string()
              .describe("The label for the single address input option")
              .default("Single Address"),
            /**The label for the multiple address input option*/
            "workspace.toolBar.tab.mailingAddress.type.multipleAddress.label": z
              .string()
              .describe("The label for the multiple address input option")
              .default("Multiple Addresses"),
            /**The label for the multiple address component*/
            "workspace.toolBar.tab.mailingAddress.multipleAddress.label": z
              .string()
              .describe("The label for the multiple address component")
              .default("Adding Multiple Addresses"),
            "workspace.toolBar.tab.mailingAddress.multipleAddress.component": z
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
                  .default(
                    "Upload your completed spreadsheet here to add your addresses.",
                  ),
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
              .passthrough()
              .optional(),
            /**The mailing address address input label*/
            "workspace.toolBar.tab.mailingAddress.address.label": z
              .string()
              .describe("The mailing address address input label")
              .default("Mailing Address"),
            /**The return address mailing address placeholder text*/
            "workspace.toolBar.tab.mailingAddress.address.placeholder": z
              .string()
              .describe("The return address mailing address placeholder text")
              .default("Paste Mailing Address Here"),
            /**The return address color input label*/
            "workspace.toolBar.tab.mailingAdress.color.label": z
              .string()
              .describe("The return address color input label")
              .default("Color"),
            "workspace.toolBar.tab.mailingAddress.color.component": z
              .object({
                /**The label for the standard inks selection tab*/
                "tabs.standard.label": z
                  .string()
                  .describe("The label for the standard inks selection tab")
                  .default("Standard Inks"),
                /**The label for the metallic inks selection tab*/
                "tabs.metallic.label": z
                  .string()
                  .describe("The label for the metallic inks selection tab")
                  .default("Metallic Inks"),
                /**The label used to display the current selected ink. Can utilize $currentInk variable*/
                "selectedInk.label": z
                  .string()
                  .describe(
                    "The label used to display the current selected ink. Can utilize $currentInk variable",
                  )
                  .default("Selected: $currentInk"),
                /**The label used when presenting the current colors of the image*/
                "imageColors.label": z
                  .string()
                  .describe(
                    "The label used when presenting the current colors of the image",
                  )
                  .default("My Image Colors"),
              })
              .passthrough()
              .optional(),
            /**The label used for the Image tool in the.toolBar*/
            "workspace.toolBar.stack.image.label": z
              .string()
              .describe("The label used for the Image tool in the.toolBar")
              .default("Image"),
            /**The icon used for the Image tool in the.toolBar*/
            "workspace.toolBar.stack.image.icon": z
              .string()
              .describe("The icon used for the Image tool in the.toolBar")
              .default("AddPhotoAlternateOutlined"),
            /**The title for the image tool tab*/
            "workspace.toolBar.tab.image.label": z
              .string()
              .describe("The title for the image tool tab")
              .default("Image"),
            /**The label used for the image upload button*/
            "workspace.toolBar.tab.image.upload.button.label": z
              .string()
              .describe("The label used for the image upload button")
              .default("Add Image"),
            /**The icon used with the image upload label*/
            "workspace.toolBar.tab.image.upload.button.icon": z
              .string()
              .describe("The icon used with the image upload label")
              .default("AddPhotoAlternateOutlined"),
            /**The text label used for the image gallery section*/
            "workspace.toolBar.tab.image.gallery.label": z
              .string()
              .describe("The text label used for the image gallery section")
              .default("My Images"),
            /**The text label for the delete image button in the image gallery*/
            "workspace.toolBar.tab.image.gallery.delete.button.label": z
              .string()
              .describe(
                "The text label for the delete image button in the image gallery",
              )
              .default("Remove"),
            /**The icon used for the delete image button*/
            "workspace.toolBar.tab.image.gallery.delete.button.icon": z
              .string()
              .describe("The icon used for the delete image button")
              .default("Close"),
            /**The label used for the front page selection option*/
            "workspace.canvasSpace.widgets.floatingPageSelector.front.label": z
              .string()
              .describe("The label used for the front page selection option")
              .default("Front"),
            /**The label used for the back page selection option*/
            "workspace.canvasSpace.widgets.floatingPageSelector.back.label": z
              .string()
              .describe("The label used for the back page selection option")
              .default("Back"),
            /**The label used for the safety line floating tooltip*/
            "workspace.canvasSpace.widgets.floatingToolTip.safetyLine.label": z
              .string()
              .describe("The label used for the safety line floating tooltip")
              .default("Safety Area"),
            /**The hover text for the safety line tooltip*/
            "workspace.canvasSpace.widgets.floatingToolTip.safetyLine.hover.label":
              z
                .string()
                .describe("The hover text for the safety line tooltip")
                .default(
                  "Keep text and important elements inside this line to prevent them from being cut off.",
                ),
            /**The label used for the cut line floating tooltip*/
            "workspace.canvasSpace.widgets.floatingToolTip.cutLine.label": z
              .string()
              .describe("The label used for the cut line floating tooltip")
              .default("Cut Line"),
            /**The hover text for the cut line tooltip*/
            "workspace.canvasSpace.widgets.floatingToolTip.cutLine.hover.label":
              z
                .string()
                .describe("The hover text for the cut line tooltip")
                .default(
                  "The line where this product is cut at. Extend background art slightly past this line if you want full coverage",
                ),
            /**The label used for the bleed line floating tooltip*/
            "workspace.canvasSpace.widgets.floatingToolTip.bleedLine.label": z
              .string()
              .describe("The label used for the bleed line floating tooltip")
              .default("Bleed Line"),
            /**The hover text for the bleed line tooltip*/
            "workspace.canvasSpace.widgets.floatingToolTip.bleedLine.hover.label":
              z
                .string()
                .describe("The hover text for the bleed line tooltip")
                .default(
                  "Extend background colors or images to this line to avoid white edges.",
                ),
            /**The pricing bonus bar title*/
            "workspace.bonusBar.pricing.label": z
              .string()
              .describe("The pricing bonus bar title")
              .default("Summary"),
            /**The title for the print preview modal*/
            "modal.printPreview.label": z
              .string()
              .describe("The title for the print preview modal")
              .default("Print Preview"),
            /**The text for the print preview description*/
            "modal.printPreview.description.label": z
              .string()
              .describe("The text for the print preview description")
              .default(
                "Printed colors can appear slightly different depending on the color or material you're printing on. We've adjusted the colors in your image to reflect how they're likely to look once printed",
              ),
            /**The label used for the front page selection option*/
            "modal.printPreview.pageSelector.front.label": z
              .string()
              .describe("The label used for the front page selection option")
              .default("Front"),
            /**The label used for the back page selection option*/
            "modal.printPreview.pageSelector.back.label": z
              .string()
              .describe("The label used for the back page selection option")
              .default("Back"),
            /**The ui label for the foil coverage small adder*/
            "adder.foil_coverage_sm.label": z
              .string()
              .describe("The ui label for the foil coverage small adder")
              .default("Small Foil Coverage"),
            /**The ui label for the foil coverage standard adder*/
            "adder.foil_coverage_std.label": z
              .string()
              .describe("The ui label for the foil coverage standard adder")
              .default("Standard Foil Coverage"),
            /**The ui label for the foil coverage large adder*/
            "adder.foil_coverage_lg.label": z
              .string()
              .describe("The ui label for the foil coverage large adder")
              .default("Large Foil Coverage"),
            /**The ui label for the foil coverage extra-large adder*/
            "adder.foil_coverage_xl.label": z
              .string()
              .describe("The ui label for the foil coverage extra-large adder")
              .default("Extra Large Foil Coverage"),
            /**The ui label for a single foil impression*/
            "adder.foil_stamp_1.label": z
              .string()
              .describe("The ui label for a single foil impression")
              .default("Single Foil Impression"),
            /**The ui label for two foil impressions*/
            "adder.foil_stamp_2.label": z
              .string()
              .describe("The ui label for two foil impressions")
              .default("Two Foil Impressions"),
            /**The ui label for three foil impressions*/
            "adder.foil_stamp_3.label": z
              .string()
              .describe("The ui label for three foil impressions")
              .default("Three Foil Impressions"),
            /**The ui label for four foil impressions*/
            "adder.foil_stamp_4.label": z
              .string()
              .describe("The ui label for four foil impressions")
              .default("Four Foil Impressions"),
            /**The ui label for five foil impressions*/
            "adder.foil_stamp_5.label": z
              .string()
              .describe("The ui label for five foil impressions")
              .default("Five Foil Impressions"),
            /**Label for 1 Black ink*/
            "adder.color_side1_blk.label": z
              .string()
              .describe("Label for 1 Black ink")
              .default("1 Black Ink"),
            /**Label for 1 Standard ink*/
            "adder.color_side1_std.label": z
              .string()
              .describe("Label for 1 Standard ink")
              .default("1 Standard Ink"),
            /**Label for 1 Custom PMS ink*/
            "adder.color_side1_pms.label": z
              .string()
              .describe("Label for 1 Custom PMS ink")
              .default("1 Custom PMS Ink"),
            /**Label for 1 Black and 1 Standard ink*/
            "adder.color_side1_blk_std.label": z
              .string()
              .describe("Label for 1 Black and 1 Standard ink")
              .default("1 Black and 1 Standard Ink"),
            /**Label for 1 Black and 1 Custom PMS ink*/
            "adder.color_side1_blk_pms.label": z
              .string()
              .describe("Label for 1 Black and 1 Custom PMS ink")
              .default("1 Black and 1 Custom PMS Ink"),
            /**Label for 2 Standard inks*/
            "adder.color_side1_2std.label": z
              .string()
              .describe("Label for 2 Standard inks")
              .default("2 Standard Inks"),
            /**Label for 1 Standard and 1 Custom PMS ink*/
            "adder.color_side1_std_pms.label": z
              .string()
              .describe("Label for 1 Standard and 1 Custom PMS ink")
              .default("1 Standard and 1 Custom PMS Ink"),
            /**Label for 2 Custom PMS inks*/
            "adder.color_side1_2pms.label": z
              .string()
              .describe("Label for 2 Custom PMS inks")
              .default("2 Custom PMS Inks"),
            /**Label for 2 Standard inks and 1 Black ink*/
            "adder.color_side1_blk_2std.label": z
              .string()
              .describe("Label for 2 Standard inks and 1 Black ink")
              .default("2 Standard Inks and 1 Black Ink"),
            /**Label for 1 Black, 1 Standard, and 1 Custom PMS ink*/
            "adder.color_side1_blk_std_pms.label": z
              .string()
              .describe("Label for 1 Black, 1 Standard, and 1 Custom PMS ink")
              .default("1 Black, 1 Standard, and 1 Custom PMS Ink"),
            /**Label for 2 Custom PMS inks and 1 Black ink*/
            "adder.color_side1_blk_2pms.label": z
              .string()
              .describe("Label for 2 Custom PMS inks and 1 Black ink")
              .default("2 Custom PMS Inks and 1 Black Ink"),
            /**Label for 3 Standard inks*/
            "adder.color_side1_3std.label": z
              .string()
              .describe("Label for 3 Standard inks")
              .default("3 Standard Inks"),
            /**Label for 2 Standard inks and 1 Custom PMS ink*/
            "adder.color_side1_2std_pms.label": z
              .string()
              .describe("Label for 2 Standard inks and 1 Custom PMS ink")
              .default("2 Standard Inks and 1 Custom PMS Ink"),
            /**Label for 2 Custom PMS inks and 1 Standard ink*/
            "adder.color_side1_std_2pms.label": z
              .string()
              .describe("Label for 2 Custom PMS inks and 1 Standard ink")
              .default("2 Custom PMS Inks and 1 Standard Ink"),
            /**Label for 3 Custom PMS inks*/
            "adder.color_side1_3pms.label": z
              .string()
              .describe("Label for 3 Custom PMS inks")
              .default("3 Custom PMS Inks"),
            /**Label for 3 Standard inks and 1 Black ink*/
            "adder.color_side1_blk_3std.label": z
              .string()
              .describe("Label for 3 Standard inks and 1 Black ink")
              .default("3 Standard Inks and 1 Black Ink"),
            /**Label for 2 Standard, 1 Black, and 1 Custom PMS ink*/
            "adder.color_side1_blk_2std_pms.label": z
              .string()
              .describe("Label for 2 Standard, 1 Black, and 1 Custom PMS ink")
              .default("2 Standard Inks, 1 Black, and 1 Custom PMS Ink"),
            /**Label for 2 Custom PMS, 1 Black, and 1 Standard ink*/
            "adder.color_side1_blk_std_2pms.label": z
              .string()
              .describe("Label for 2 Custom PMS, 1 Black, and 1 Standard ink")
              .default("2 Custom PMS Inks, 1 Black, and 1 Standard Ink"),
            /**Label for 3 Custom PMS inks and 1 Black ink*/
            "adder.color_side1_blk_3pms.label": z
              .string()
              .describe("Label for 3 Custom PMS inks and 1 Black ink")
              .default("3 Custom PMS Inks and 1 Black Ink"),
            /**Label for 4 Standard inks*/
            "adder.color_side1_4std.label": z
              .string()
              .describe("Label for 4 Standard inks")
              .default("4 Standard Inks"),
            /**Label for 3 Standard inks and 1 Custom PMS ink*/
            "adder.color_side1_3std_pms.label": z
              .string()
              .describe("Label for 3 Standard inks and 1 Custom PMS ink")
              .default("3 Standard Inks and 1 Custom PMS Ink"),
            /**Label for 2 Standard inks and 2 Custom PMS inks*/
            "adder.color_side1_2std_2pms.label": z
              .string()
              .describe("Label for 2 Standard inks and 2 Custom PMS inks")
              .default("2 Standard Inks and 2 Custom PMS Inks"),
            /**Label for 3 Custom PMS inks and 1 Standard ink*/
            "adder.color_side1_std_3pms.label": z
              .string()
              .describe("Label for 3 Custom PMS inks and 1 Standard ink")
              .default("3 Custom PMS Inks and 1 Standard Ink"),
            /**Label for 4 Custom PMS inks*/
            "adder.color_side1_4pms.label": z
              .string()
              .describe("Label for 4 Custom PMS inks")
              .default("4 Custom PMS Inks"),
            /**Label for Full Color (CMYK) printing*/
            "adder.color_side1_cmyk.label": z
              .string()
              .describe("Label for Full Color (CMYK) printing")
              .default("Full Color"),
            /**The ui label for one color printing on side two*/
            "adder.color_side2_one_color.label": z
              .string()
              .describe("The ui label for one color printing on side two")
              .default("Second Side One Color"),
            /**The ui label for two color printing on side two*/
            "adder.color_side2_two_color.label": z
              .string()
              .describe("The ui label for two color printing on side two")
              .default("Second Side Two Colors"),
            /**The ui label for three color printing on side two*/
            "adder.color_side2_three_color.label": z
              .string()
              .describe("The ui label for three color printing on side two")
              .default("Second Side Three Colors"),
            /**The ui label for four color printing on side two*/
            "adder.color_side2_four_color.label": z
              .string()
              .describe("The ui label for four color printing on side two")
              .default("Second Side Four Colors"),
            /**The ui label for full color (CMYK) printing on side two*/
            "adder.color_side2_cmyk.label": z
              .string()
              .describe(
                "The ui label for full color (CMYK) printing on side two",
              )
              .default("Second Side Full Color"),
            /**The ui label for variable addressing on side one*/
            "adder.varaddress_side1.label": z
              .string()
              .describe("The ui label for variable addressing on side one")
              .default("Variable Addressing Side 1"),
            /**The ui label for variable addressing on side two*/
            "adder.varaddress_side2.label": z
              .string()
              .describe("The ui label for variable addressing on side two")
              .default("Variable Addressing Side 2"),
          })
          .passthrough(),
        z.string().url(),
      ])
      .describe(
        "The UI Label schema used to configure the labels on the designer (optional)",
      )
      .optional(),
    /**An (optional) object containing additional metadata for the designer initialization payload.*/
    metadata: z
      .record(z.any())
      .describe(
        "An (optional) object containing additional metadata for the designer initialization payload.",
      )
      .optional(),
  })
  .passthrough();
export type DesignerInitializationPayload = z.infer<
  typeof DesignerInitializationPayload
>;
