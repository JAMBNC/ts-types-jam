import { z } from "zod";
import { InkSelectorV1ComponentLabels } from "./InkSelectorV1ComponentLabels.js";
import { VariableAddressInputV1ComponentLabels } from "./VariableAddressInputV1ComponentLabels.js";

const _DesignerUiLabels = z
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
      .default("undo"),
    /**The label showed with the redo button on the menu bar*/
    "menubar.redo.label": z
      .string()
      .describe("The label showed with the redo button on the menu bar")
      .default("Redo"),
    /**The icon showed with the redo button on the menu bar*/
    "menubar.redo.icon": z
      .string()
      .describe("The icon showed with the redo button on the menu bar")
      .default("redo"),
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
      .describe("The icon showed when there is nothing to save on the menu bar")
      .default("access_alarm"),
    /**The label showed when saving is in progress on the menu bar*/
    "menubar.saveStatus.progress.label": z
      .string()
      .describe("The label showed when saving is in progress on the menu bar")
      .default("Saving Changes..."),
    /**The icon showed when saving is in progress on the menu bar*/
    "menubar.saveStatus.progress.icon": z
      .string()
      .describe("The icon showed when saving is in progress on the menu bar")
      .default("update"),
    /**The label showed when saving is complete on the menu bar*/
    "menubar.saveStatus.success.label": z
      .string()
      .describe("The label showed when saving is complete on the menu bar")
      .default("Changes Saved"),
    /**The icon showed on the menu bar if saving failed*/
    "menubar.saveStatus.failure.icon": z
      .string()
      .describe("The icon showed on the menu bar if saving failed")
      .default("error"),
    /**The label showed on the menu bar if saving failed*/
    "menubar.saveStatus.failure.label": z
      .string()
      .describe("The label showed on the menu bar if saving failed")
      .default("Save Failed"),
    /**The icon showed when saving is complete on the menu bar*/
    "menubar.saveStatus.success.icon": z
      .string()
      .describe("The icon showed when saving is complete on the menu bar")
      .default("alarm_on"),
    /**The icon shown when saving is pending on the menu bar*/
    "menubar.saveStatus.pending.icon": z
      .string()
      .describe("The icon shown when saving is pending on the menu bar")
      .default("alarm_on"),
    /**The label shown when saving is pending on the menu bar*/
    "menubar.saveStatus.pending.label": z
      .string()
      .describe("The label shown when saving is pending on the menu bar")
      .default("Save Pending..."),
    /**The label showed with the printPreview button on the menu bar*/
    "menubar.printPreview.label": z
      .string()
      .describe("The label showed with the printPreview button on the menu bar")
      .default("Print Preview"),
    /**The icon showed with the printPreview button on the menu bar*/
    "menubar.printPreview.icon": z
      .string()
      .describe("The icon showed with the printPreview button on the menu bar")
      .default("preview"),
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
      .describe("The icon showed with the downloadProof button on the menu bar")
      .default("file_download"),
    /**The label showed on the menu bar pricing dropdown. This label can include $unitPrice and $totalPrice variable usage.*/
    "menubar.pricingLabel.label": z
      .string()
      .describe(
        "The label showed on the menu bar pricing dropdown. This label can include $unitPrice and $totalPrice variable usage.",
      )
      .default("Select Quantity"),
    /**The label used in the button to proceed to the next steps*/
    "menubar.nextButton.label": z
      .string()
      .describe("The label used in the button to proceed to the next steps")
      .default("Review & Add to Cart"),
    /**The icon used in the button to proceed to the next steps*/
    "menubar.nextButton.icon": z
      .string()
      .describe("The icon used in the button to proceed to the next steps")
      .default("add_shopping_cart"),
    /**The url to the logo used within the designer.*/
    "menubar.logo": z
      .string()
      .url()
      .describe("The url to the logo used within the designer.")
      .optional(),
    /**The icon for the text tool*/
    "tool.freeText.icon": z
      .string()
      .describe("The icon for the text tool")
      .default("format_shapes"),
    /**The label for the text tool*/
    "tool.freeText.label": z
      .string()
      .describe("The label for the text tool")
      .default("Text"),
    /**The icon for the Logo tool*/
    "tool.logo.icon": z
      .string()
      .describe("The icon for the Logo tool")
      .default("add_photo_alternate"),
    /**The label for the logo tool*/
    "tool.logo.label": z
      .string()
      .describe("The label for the logo tool")
      .default("Logo"),
    /**The icon for the Return Address tool*/
    "tool.returnAddress.icon": z
      .string()
      .describe("The icon for the Return Address tool")
      .default("add_home_work"),
    /**The label for the Return Address tool*/
    "tool.returnAddress.label": z
      .string()
      .describe("The label for the Return Address tool")
      .default("Return Address"),
    /**The icon for the Mailing Address tool*/
    "tool.mailingAddress.icon": z
      .string()
      .describe("The icon for the Mailing Address tool")
      .default("label"),
    /**The label for the Mailing Address tool*/
    "tool.mailingAddress.label": z
      .string()
      .describe("The label for the Mailing Address tool")
      .default("Mailing Address"),
    /**The url to use for the address csv example download.*/
    "tool.mailingAddress.addressExample": z
      .string()
      .url()
      .describe("The url to use for the address csv example download.")
      .optional(),
    /**The icon for the Background Color tool*/
    "tool.backgroundColor.icon": z
      .string()
      .describe("The icon for the Background Color tool")
      .default("format_color_fill"),
    /**The label for the Background Color tool*/
    "tool.backgroundColor.label": z
      .string()
      .describe("The label for the Background Color tool")
      .default("Background"),
    /**The icon for the Upload Full Design tool*/
    "tool.uploadFullDesign.icon": z
      .string()
      .describe("The icon for the Upload Full Design tool")
      .default("upload_file"),
    /**The label for the Upload Full Design tool*/
    "tool.uploadFullDesign.label": z
      .string()
      .describe("The label for the Upload Full Design tool")
      .default("Upload Design"),
    /**The url to use for the full instructions url*/
    "tool.uploadFullDesign.fullInstructionsUrl": z
      .string()
      .url()
      .describe("The url to use for the full instructions url")
      .optional(),
    /**The label used for the return address tool in the tool bar*/
    "workspace.toolBar.stack.returnAddress.label": z
      .string()
      .describe("The label used for the return address tool in the tool bar")
      .default("Return Address"),
    /**The icon used for the return address tool in the tool bar*/
    "workspace.toolBar.stack.returnAddress.icon": z
      .string()
      .describe("The icon used for the return address tool in the tool bar")
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
    "workspace.toolBar.tab.returnAddress.color.component":
      InkSelectorV1ComponentLabels.optional(),
    /**The label used for the Mailing Address tool in the.toolBar*/
    "workspace.toolBar.stack.mailingAddress.label": z
      .string()
      .describe("The label used for the Mailing Address tool in the.toolBar")
      .default("Mailing Address"),
    /**The icon used for the Mailing Address tool in the.toolBar*/
    "workspace.toolBar.stack.mailingAddress.icon": z
      .string()
      .describe("The icon used for the Mailing Address tool in the.toolBar")
      .default("LabelImportantOutlined"),
    /**The mailing address address.toolBar tab top title text*/
    "workspace.toolBar.tab.mailingAddress.label": z
      .string()
      .describe("The mailing address address.toolBar tab top title text")
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
    "workspace.toolBar.tab.mailingAddress.multipleAddress.component":
      VariableAddressInputV1ComponentLabels.optional(),
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
    "workspace.toolBar.tab.mailingAddress.color.component":
      InkSelectorV1ComponentLabels.optional(),
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
    /**The label used for the page selection option of a folded product's outside view, the open sheet's print side*/
    "workspace.canvasSpace.widgets.floatingPageSelector.outside.label": z
      .string()
      .describe(
        "The label used for the page selection option of a folded product's outside view, the open sheet's print side",
      )
      .default("Outside"),
    /**The label used for the page selection option of a folded product's inside view, the open sheet's reverse side*/
    "workspace.canvasSpace.widgets.floatingPageSelector.inside.label": z
      .string()
      .describe(
        "The label used for the page selection option of a folded product's inside view, the open sheet's reverse side",
      )
      .default("Inside"),
    /**The label used for the page selection option of a folded product's closed front preview*/
    "workspace.canvasSpace.widgets.floatingPageSelector.closedFront.label": z
      .string()
      .describe(
        "The label used for the page selection option of a folded product's closed front preview",
      )
      .default("Front"),
    /**The label used for the page selection option of a folded product's closed back preview*/
    "workspace.canvasSpace.widgets.floatingPageSelector.closedBack.label": z
      .string()
      .describe(
        "The label used for the page selection option of a folded product's closed back preview",
      )
      .default("Back"),
    /**The label used for the page selection option of an inside spread view*/
    "workspace.canvasSpace.widgets.floatingPageSelector.insideSpread.label": z
      .string()
      .describe(
        "The label used for the page selection option of an inside spread view",
      )
      .default("Inside Spread"),
    /**The label used for the page selection option of a flat product's sheet view*/
    "workspace.canvasSpace.widgets.floatingPageSelector.flat.label": z
      .string()
      .describe(
        "The label used for the page selection option of a flat product's sheet view",
      )
      .default("Flat Sheet"),
    /**The label used for the safety line floating tooltip*/
    "workspace.canvasSpace.widgets.floatingToolTip.safetyLine.label": z
      .string()
      .describe("The label used for the safety line floating tooltip")
      .default("Safety Area"),
    /**The hover text for the safety line tooltip*/
    "workspace.canvasSpace.widgets.floatingToolTip.safetyLine.hover.label": z
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
    "workspace.canvasSpace.widgets.floatingToolTip.cutLine.hover.label": z
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
    "workspace.canvasSpace.widgets.floatingToolTip.bleedLine.hover.label": z
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
    /**The ui label for the ink coverage small adder*/
    "adder.ink_coverage_sm.label": z
      .string()
      .describe("The ui label for the ink coverage small adder")
      .default("Ink Coverage - Small"),
    /**The ui label for the ink coverage standard adder*/
    "adder.ink_coverage_std.label": z
      .string()
      .describe("The ui label for the ink coverage standard adder")
      .default("Ink Coverage - Standard"),
    /**The ui label for the ink coverage large adder*/
    "adder.ink_coverage_lg.label": z
      .string()
      .describe("The ui label for the ink coverage large adder")
      .default("Ink Coverage - Large"),
    /**The ui label for the ink coverage extra-large adder*/
    "adder.ink_coverage_xl.label": z
      .string()
      .describe("The ui label for the ink coverage extra-large adder")
      .default("Ink Coverage - XLarge"),
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
    /**The ui label for a single ink impression*/
    "adder.ink_stamp_1.label": z
      .string()
      .describe("The ui label for a single ink impression")
      .default("1 Ink Stamp"),
    /**The ui label for two ink impressions*/
    "adder.ink_stamp_2.label": z
      .string()
      .describe("The ui label for two ink impressions")
      .default("2 Ink Stamps"),
    /**The ui label for three ink impressions*/
    "adder.ink_stamp_3.label": z
      .string()
      .describe("The ui label for three ink impressions")
      .default("3 Ink Stamps"),
    /**The ui label for four ink impressions*/
    "adder.ink_stamp_4.label": z
      .string()
      .describe("The ui label for four ink impressions")
      .default("4 Ink Stamps"),
    /**The ui label for five ink impressions*/
    "adder.ink_stamp_5.label": z
      .string()
      .describe("The ui label for five ink impressions")
      .default("5 Ink Stamps"),
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
    /**The ui label for first foil color*/
    "adder.foil_first_color.label": z
      .string()
      .describe("The ui label for first foil color")
      .default("First Foil Color"),
    /**The ui label for second foil color*/
    "adder.foil_second_color.label": z
      .string()
      .describe("The ui label for second foil color")
      .default("Second Foil Color"),
    /**The ui label for third foil color*/
    "adder.foil_third_color.label": z
      .string()
      .describe("The ui label for third foil color")
      .default("Third Foil Color"),
    /**The ui label for fourth foil color*/
    "adder.foil_fourth_color.label": z
      .string()
      .describe("The ui label for fourth foil color")
      .default("Fourth Foil Color"),
    /**The ui label for fifth foil color*/
    "adder.foil_fifth_color.label": z
      .string()
      .describe("The ui label for fifth foil color")
      .default("Fifth Foil Color"),
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
    /**The ui label for one color printing on side one*/
    "adder.color_side1_one_color.label": z
      .string()
      .describe("The ui label for one color printing on side one")
      .default("One Color"),
    /**The ui label for two color printing on side one*/
    "adder.color_side1_two_color.label": z
      .string()
      .describe("The ui label for two color printing on side one")
      .default("Two Colors"),
    /**The ui label for full color printing on side one*/
    "adder.color_side1_full_color.label": z
      .string()
      .describe("The ui label for full color printing on side one")
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
      .describe("The ui label for full color (CMYK) printing on side two")
      .default("Second Side Full Color"),
    /**The ui label for full color printing on side two*/
    "adder.color_side2_full_color.label": z
      .string()
      .describe("The ui label for full color printing on side two")
      .default("Second Side Full Color"),
    /**The ui label for white ink on side one*/
    "adder.white_ink_side1.label": z
      .string()
      .describe("The ui label for white ink on side one")
      .default("White Ink"),
    /**The ui label for white ink on side two*/
    "adder.white_ink_side2.label": z
      .string()
      .describe("The ui label for white ink on side two")
      .default("Second Side White Ink"),
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
    /**The ui label for roll qty 125*/
    "adder.roll_qty_125.label": z
      .string()
      .describe("The ui label for roll qty 125")
      .default("Roll Qty 125"),
    /**The ui label for roll qty 250*/
    "adder.roll_qty_250.label": z
      .string()
      .describe("The ui label for roll qty 250")
      .default("Roll Qty 250"),
    /**The ui label for roll qty 500*/
    "adder.roll_qty_500.label": z
      .string()
      .describe("The ui label for roll qty 500")
      .default("Roll Qty 500"),
    /**The ui label for roll qty 1000*/
    "adder.roll_qty_1000.label": z
      .string()
      .describe("The ui label for roll qty 1000")
      .default("Roll Qty 1000"),
    /**The ui label for roll core 1 inch*/
    "adder.roll_core_1.label": z
      .string()
      .describe("The ui label for roll core 1 inch")
      .default('Roll Core 1"'),
    /**The ui label for roll core 3 inch*/
    "adder.roll_core_3.label": z
      .string()
      .describe("The ui label for roll core 3 inch")
      .default('Roll Core 3"'),
    /**The ui label for roll perforation*/
    "adder.roll_perforation.label": z
      .string()
      .describe("The ui label for roll perforation")
      .default("Roll Perforation"),
    /**The ui label for roll no perforation*/
    "adder.roll_no_perforation.label": z
      .string()
      .describe("The ui label for roll no perforation")
      .default("Roll w/o Perforation"),
    /**The ui label for gloss lamination*/
    "adder.lamination_gloss.label": z
      .string()
      .describe("The ui label for gloss lamination")
      .default("Gloss Lamination"),
    /**The more details message for this adder.*/
    "adder.lamination_gloss.details": z
      .string()
      .describe("The more details message for this adder.")
      .default(
        "A protective film that adds durability and resists scratches, moisture, and everyday wear. Ideal for menus, signs, placemats, and other frequently handled prints.",
      ),
    /**The ui label for sunscreen lamination*/
    "adder.lamination_sunscreen.label": z
      .string()
      .describe("The ui label for sunscreen lamination")
      .default("Sunscreen Lamination"),
    /**The more details message for this adder.*/
    "adder.lamination_sunscreen.details": z
      .string()
      .describe("The more details message for this adder.")
      .default(
        "A UV-protective coating that helps prevent fading and keeps colors vibrant for longer. Best for outdoor signage, window displays, and prints exposed to sunlight.",
      ),
    /**The ui label for soft touch lamination*/
    "adder.lamination_soft_touch.label": z
      .string()
      .describe("The ui label for soft touch lamination")
      .default("Soft Touch Lamination"),
    /**The more details message for this adder.*/
    "adder.lamination_soft_touch.details": z
      .string()
      .describe("The more details message for this adder.")
      .default(
        "A premium finish with a smooth, velvety feel that creates an elegant, high-end look. Popular for business cards, presentation folders, invitations, and luxury packaging.",
      ),
    /**The ui label for individual cut adder.*/
    "adder.individual_cut.label": z
      .string()
      .describe("The ui label for individual cut adder.")
      .default("Individual Cut"),
    /**The ui label for mirroring adder.*/
    "adder.mirroring.label": z
      .string()
      .describe("The ui label for mirroring adder.")
      .default("Face Outside"),
    /**The ui label for setup charge.*/
    "adder.setup_charge.label": z
      .string()
      .describe("The ui label for setup charge.")
      .default("Setup Charge"),
    /**The ui label for the cslit_small slit adder*/
    "adder.cslit_small.label": z
      .string()
      .describe("The ui label for the cslit_small slit adder")
      .default("Certificate Slit: Small"),
    /**The ui label for the cslit_standard slit adder*/
    "adder.cslit_standard.label": z
      .string()
      .describe("The ui label for the cslit_standard slit adder")
      .default("Certificate Slit: Standard"),
    /**The ui label for the flap_slit_c1_center slit adder*/
    "adder.flap_slit_c1_center.label": z
      .string()
      .describe("The ui label for the flap_slit_c1_center slit adder")
      .default("Flap Slit: Combination Business Card 4 Square Tabs, Centered"),
    /**The ui label for the flap_slit_h1_center slit adder*/
    "adder.flap_slit_h1_center.label": z
      .string()
      .describe("The ui label for the flap_slit_h1_center slit adder")
      .default("Flap Slit: Horizontal Business Card 4 Corners, Centered"),
    /**The ui label for the flap_slit_h2_center slit adder*/
    "adder.flap_slit_h2_center.label": z
      .string()
      .describe("The ui label for the flap_slit_h2_center slit adder")
      .default(
        "Flap Slit: Horizontal Business Card 2 Corners Top Right, Centered",
      ),
    /**The ui label for the flap_slit_h2_left slit adder*/
    "adder.flap_slit_h2_left.label": z
      .string()
      .describe("The ui label for the flap_slit_h2_left slit adder")
      .default("Flap Slit: Horizontal Business Card 2 Corners Top Right, Left"),
    /**The ui label for the flap_slit_h2_right slit adder*/
    "adder.flap_slit_h2_right.label": z
      .string()
      .describe("The ui label for the flap_slit_h2_right slit adder")
      .default(
        "Flap Slit: Horizontal Business Card 2 Corners Top Right, Right",
      ),
    /**The ui label for the flap_slit_h3_center slit adder*/
    "adder.flap_slit_h3_center.label": z
      .string()
      .describe("The ui label for the flap_slit_h3_center slit adder")
      .default(
        "Flap Slit: Horizontal Business Card 2 Corners Top Left, Centered",
      ),
    /**The ui label for the flap_slit_h3_left slit adder*/
    "adder.flap_slit_h3_left.label": z
      .string()
      .describe("The ui label for the flap_slit_h3_left slit adder")
      .default("Flap Slit: Horizontal Business Card 2 Corners Top Left, Left"),
    /**The ui label for the flap_slit_h3_right slit adder*/
    "adder.flap_slit_h3_right.label": z
      .string()
      .describe("The ui label for the flap_slit_h3_right slit adder")
      .default("Flap Slit: Horizontal Business Card 2 Corners Top Left, Right"),
    /**The ui label for the flap_slit_h4_center slit adder*/
    "adder.flap_slit_h4_center.label": z
      .string()
      .describe("The ui label for the flap_slit_h4_center slit adder")
      .default("Flap Slit: Horizontal Business Card Square Tabs, Centered"),
    /**The ui label for the flap_slit_h4_left slit adder*/
    "adder.flap_slit_h4_left.label": z
      .string()
      .describe("The ui label for the flap_slit_h4_left slit adder")
      .default("Flap Slit: Horizontal Business Card Square Tabs, Left"),
    /**The ui label for the flap_slit_h4_right slit adder*/
    "adder.flap_slit_h4_right.label": z
      .string()
      .describe("The ui label for the flap_slit_h4_right slit adder")
      .default("Flap Slit: Horizontal Business Card Square Tabs, Right"),
    /**The ui label for the flap_slit_v4_center slit adder*/
    "adder.flap_slit_v4_center.label": z
      .string()
      .describe("The ui label for the flap_slit_v4_center slit adder")
      .default("Flap Slit: Vertical Business Card 2 Square Tabs, Centered"),
    /**The ui label for the flap_slit_v4_left slit adder*/
    "adder.flap_slit_v4_left.label": z
      .string()
      .describe("The ui label for the flap_slit_v4_left slit adder")
      .default("Flap Slit: Vertical Business Card 2 Square Tabs, Left"),
    /**The ui label for the flap_slit_v4_right slit adder*/
    "adder.flap_slit_v4_right.label": z
      .string()
      .describe("The ui label for the flap_slit_v4_right slit adder")
      .default("Flap Slit: Vertical Business Card 2 Square Tabs, Right"),
    /**The ui label for the fslit_c1_low_right_center slit adder*/
    "adder.fslit_c1_low_right_center.label": z
      .string()
      .describe("The ui label for the fslit_c1_low_right_center slit adder")
      .default(
        "Front Cover Slit: Combination Business Card 4 Square Tabs, Lower right, Centered",
      ),
    /**The ui label for the fslit_h1_low_right_center slit adder*/
    "adder.fslit_h1_low_right_center.label": z
      .string()
      .describe("The ui label for the fslit_h1_low_right_center slit adder")
      .default(
        "Front Cover Slit: Horizontal Business Card 4 Corners, Lower right, Centered",
      ),
    /**The ui label for the fslit_h1_low_right_right slit adder*/
    "adder.fslit_h1_low_right_right.label": z
      .string()
      .describe("The ui label for the fslit_h1_low_right_right slit adder")
      .default(
        "Front Cover Slit: Horizontal Business Card 4 Corners, Lower right, Right",
      ),
    /**The ui label for the fslit_h1_top_right_center slit adder*/
    "adder.fslit_h1_top_right_center.label": z
      .string()
      .describe("The ui label for the fslit_h1_top_right_center slit adder")
      .default(
        "Front Cover Slit: Horizontal Business Card 4 Corners, Upper right, Centered",
      ),
    /**The ui label for the fslit_h2_low_right_center slit adder*/
    "adder.fslit_h2_low_right_center.label": z
      .string()
      .describe("The ui label for the fslit_h2_low_right_center slit adder")
      .default(
        "Front Cover Slit: Horizontal Business Card 2 Corners Top Right, Lower right, Centered",
      ),
    /**The ui label for the fslit_h2_low_right_right slit adder*/
    "adder.fslit_h2_low_right_right.label": z
      .string()
      .describe("The ui label for the fslit_h2_low_right_right slit adder")
      .default(
        "Front Cover Slit: Horizontal Business Card 2 Corners Top Right, Lower right, Right",
      ),
    /**The ui label for the fslit_h3_low_right_center slit adder*/
    "adder.fslit_h3_low_right_center.label": z
      .string()
      .describe("The ui label for the fslit_h3_low_right_center slit adder")
      .default(
        "Front Cover Slit: Horizontal Business Card 2 Corners Top Left, Lower right, Centered",
      ),
    /**The ui label for the fslit_h3_low_right_right slit adder*/
    "adder.fslit_h3_low_right_right.label": z
      .string()
      .describe("The ui label for the fslit_h3_low_right_right slit adder")
      .default(
        "Front Cover Slit: Horizontal Business Card 2 Corners Top Left, Lower right, Right",
      ),
    /**The ui label for the fslit_h4_low_right_center slit adder*/
    "adder.fslit_h4_low_right_center.label": z
      .string()
      .describe("The ui label for the fslit_h4_low_right_center slit adder")
      .default(
        "Front Cover Slit: Horizontal Business Card Square Tabs, Lower right, Centered",
      ),
    /**The ui label for the lslit_b1_center slit adder*/
    "adder.lslit_b1_center.label": z
      .string()
      .describe("The ui label for the lslit_b1_center slit adder")
      .default("Left Pocket Slit: Brochure 4 3/8 Top Slit, Centered"),
    /**The ui label for the lslit_b1_left slit adder*/
    "adder.lslit_b1_left.label": z
      .string()
      .describe("The ui label for the lslit_b1_left slit adder")
      .default("Left Pocket Slit: Brochure 4 3/8 Top Slit, Left"),
    /**The ui label for the lslit_b1_right slit adder*/
    "adder.lslit_b1_right.label": z
      .string()
      .describe("The ui label for the lslit_b1_right slit adder")
      .default("Left Pocket Slit: Brochure 4 3/8 Top Slit, Right"),
    /**The ui label for the lslit_b2_center slit adder*/
    "adder.lslit_b2_center.label": z
      .string()
      .describe("The ui label for the lslit_b2_center slit adder")
      .default("Left Pocket Slit: Brochure 6 3/8 Top Slit, Centered"),
    /**The ui label for the lslit_b2_left slit adder*/
    "adder.lslit_b2_left.label": z
      .string()
      .describe("The ui label for the lslit_b2_left slit adder")
      .default("Left Pocket Slit: Brochure 6 3/8 Top Slit, Left"),
    /**The ui label for the lslit_b2_right slit adder*/
    "adder.lslit_b2_right.label": z
      .string()
      .describe("The ui label for the lslit_b2_right slit adder")
      .default("Left Pocket Slit: Brochure 6 3/8 Top Slit, Right"),
    /**The ui label for the lslit_b6_center slit adder*/
    "adder.lslit_b6_center.label": z
      .string()
      .describe("The ui label for the lslit_b6_center slit adder")
      .default("Left Pocket Slit: Brochure 4 3/8 Curved Up Slit, Centered"),
    /**The ui label for the lslit_b7_center slit adder*/
    "adder.lslit_b7_center.label": z
      .string()
      .describe("The ui label for the lslit_b7_center slit adder")
      .default("Left Pocket Slit: Brochure 6 3/8 Curved Up Slit, Centered"),
    /**The ui label for the lslit_b8_center slit adder*/
    "adder.lslit_b8_center.label": z
      .string()
      .describe("The ui label for the lslit_b8_center slit adder")
      .default("Left Pocket Slit: Brochure 4 3/8 Curved Down Slit, Centered"),
    /**The ui label for the lslit_c1_center slit adder*/
    "adder.lslit_c1_center.label": z
      .string()
      .describe("The ui label for the lslit_c1_center slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 4 Square Tabs, Centered",
      ),
    /**The ui label for the lslit_c1_left slit adder*/
    "adder.lslit_c1_left.label": z
      .string()
      .describe("The ui label for the lslit_c1_left slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 4 Square Tabs, Left",
      ),
    /**The ui label for the lslit_c1_right slit adder*/
    "adder.lslit_c1_right.label": z
      .string()
      .describe("The ui label for the lslit_c1_right slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 4 Square Tabs, Right",
      ),
    /**The ui label for the lslit_c1v_bot slit adder*/
    "adder.lslit_c1v_bot.label": z
      .string()
      .describe("The ui label for the lslit_c1v_bot slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 4 Square Tabs, Bottom",
      ),
    /**The ui label for the lslit_c1v_mid slit adder*/
    "adder.lslit_c1v_mid.label": z
      .string()
      .describe("The ui label for the lslit_c1v_mid slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 4 Square Tabs, Middle",
      ),
    /**The ui label for the lslit_c1v_top slit adder*/
    "adder.lslit_c1v_top.label": z
      .string()
      .describe("The ui label for the lslit_c1v_top slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 4 Square Tabs, Top",
      ),
    /**The ui label for the lslit_c2_center slit adder*/
    "adder.lslit_c2_center.label": z
      .string()
      .describe("The ui label for the lslit_c2_center slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 8 Square Corners, Centered",
      ),
    /**The ui label for the lslit_c2_left slit adder*/
    "adder.lslit_c2_left.label": z
      .string()
      .describe("The ui label for the lslit_c2_left slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 8 Square Corners, Left",
      ),
    /**The ui label for the lslit_c2_right slit adder*/
    "adder.lslit_c2_right.label": z
      .string()
      .describe("The ui label for the lslit_c2_right slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 8 Square Corners, Right",
      ),
    /**The ui label for the lslit_c3_center slit adder*/
    "adder.lslit_c3_center.label": z
      .string()
      .describe("The ui label for the lslit_c3_center slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 4 Half Moon Tabs, Centered",
      ),
    /**The ui label for the lslit_c3_left slit adder*/
    "adder.lslit_c3_left.label": z
      .string()
      .describe("The ui label for the lslit_c3_left slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 4 Half Moon Tabs, Left",
      ),
    /**The ui label for the lslit_c3_right slit adder*/
    "adder.lslit_c3_right.label": z
      .string()
      .describe("The ui label for the lslit_c3_right slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 4 Half Moon Tabs, Right",
      ),
    /**The ui label for the lslit_c4_center slit adder*/
    "adder.lslit_c4_center.label": z
      .string()
      .describe("The ui label for the lslit_c4_center slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 4 Quarter Moon Tabs, Centered",
      ),
    /**The ui label for the lslit_c4_left slit adder*/
    "adder.lslit_c4_left.label": z
      .string()
      .describe("The ui label for the lslit_c4_left slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 4 Quarter Moon Tabs, Left",
      ),
    /**The ui label for the lslit_c4_right slit adder*/
    "adder.lslit_c4_right.label": z
      .string()
      .describe("The ui label for the lslit_c4_right slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 4 Quarter Moon Tabs, Right",
      ),
    /**The ui label for the lslit_c5_center slit adder*/
    "adder.lslit_c5_center.label": z
      .string()
      .describe("The ui label for the lslit_c5_center slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Wide) Top Right, Centered",
      ),
    /**The ui label for the lslit_c5_left slit adder*/
    "adder.lslit_c5_left.label": z
      .string()
      .describe("The ui label for the lslit_c5_left slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Wide) Top Right, Left",
      ),
    /**The ui label for the lslit_c5_right slit adder*/
    "adder.lslit_c5_right.label": z
      .string()
      .describe("The ui label for the lslit_c5_right slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Wide) Top Right, Right",
      ),
    /**The ui label for the lslit_c6_center slit adder*/
    "adder.lslit_c6_center.label": z
      .string()
      .describe("The ui label for the lslit_c6_center slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Centered",
      ),
    /**The ui label for the lslit_c6_left slit adder*/
    "adder.lslit_c6_left.label": z
      .string()
      .describe("The ui label for the lslit_c6_left slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Left",
      ),
    /**The ui label for the lslit_c6_right slit adder*/
    "adder.lslit_c6_right.label": z
      .string()
      .describe("The ui label for the lslit_c6_right slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Right",
      ),
    /**The ui label for the lslit_c6v_bot slit adder*/
    "adder.lslit_c6v_bot.label": z
      .string()
      .describe("The ui label for the lslit_c6v_bot slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Bottom",
      ),
    /**The ui label for the lslit_c6v_mid slit adder*/
    "adder.lslit_c6v_mid.label": z
      .string()
      .describe("The ui label for the lslit_c6v_mid slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Middle",
      ),
    /**The ui label for the lslit_c6v_top slit adder*/
    "adder.lslit_c6v_top.label": z
      .string()
      .describe("The ui label for the lslit_c6v_top slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Top",
      ),
    /**The ui label for the lslit_c7_center slit adder*/
    "adder.lslit_c7_center.label": z
      .string()
      .describe("The ui label for the lslit_c7_center slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Centered",
      ),
    /**The ui label for the lslit_c7_left slit adder*/
    "adder.lslit_c7_left.label": z
      .string()
      .describe("The ui label for the lslit_c7_left slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Left",
      ),
    /**The ui label for the lslit_c7_right slit adder*/
    "adder.lslit_c7_right.label": z
      .string()
      .describe("The ui label for the lslit_c7_right slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Right",
      ),
    /**The ui label for the lslit_c7v_bot slit adder*/
    "adder.lslit_c7v_bot.label": z
      .string()
      .describe("The ui label for the lslit_c7v_bot slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Bottom",
      ),
    /**The ui label for the lslit_c7v_mid slit adder*/
    "adder.lslit_c7v_mid.label": z
      .string()
      .describe("The ui label for the lslit_c7v_mid slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Middle",
      ),
    /**The ui label for the lslit_c7v_top slit adder*/
    "adder.lslit_c7v_top.label": z
      .string()
      .describe("The ui label for the lslit_c7v_top slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Top",
      ),
    /**The ui label for the lslit_c8_center slit adder*/
    "adder.lslit_c8_center.label": z
      .string()
      .describe("The ui label for the lslit_c8_center slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Centered",
      ),
    /**The ui label for the lslit_c8_left slit adder*/
    "adder.lslit_c8_left.label": z
      .string()
      .describe("The ui label for the lslit_c8_left slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Left",
      ),
    /**The ui label for the lslit_c8_right slit adder*/
    "adder.lslit_c8_right.label": z
      .string()
      .describe("The ui label for the lslit_c8_right slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Right",
      ),
    /**The ui label for the lslit_c8v_bot slit adder*/
    "adder.lslit_c8v_bot.label": z
      .string()
      .describe("The ui label for the lslit_c8v_bot slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Bottom",
      ),
    /**The ui label for the lslit_c8v_mid slit adder*/
    "adder.lslit_c8v_mid.label": z
      .string()
      .describe("The ui label for the lslit_c8v_mid slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Middle",
      ),
    /**The ui label for the lslit_c8v_top slit adder*/
    "adder.lslit_c8v_top.label": z
      .string()
      .describe("The ui label for the lslit_c8v_top slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Top",
      ),
    /**The ui label for the lslit_c9v_bot slit adder*/
    "adder.lslit_c9v_bot.label": z
      .string()
      .describe("The ui label for the lslit_c9v_bot slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Bottom",
      ),
    /**The ui label for the lslit_c9v_mid slit adder*/
    "adder.lslit_c9v_mid.label": z
      .string()
      .describe("The ui label for the lslit_c9v_mid slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Middle",
      ),
    /**The ui label for the lslit_c9v_top slit adder*/
    "adder.lslit_c9v_top.label": z
      .string()
      .describe("The ui label for the lslit_c9v_top slit adder")
      .default(
        "Left Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Top",
      ),
    /**The ui label for the lslit_d1_center slit adder*/
    "adder.lslit_d1_center.label": z
      .string()
      .describe("The ui label for the lslit_d1_center slit adder")
      .default("Left Pocket Slit: CD 5 1/4 Top Slit, Centered"),
    /**The ui label for the lslit_d1_left slit adder*/
    "adder.lslit_d1_left.label": z
      .string()
      .describe("The ui label for the lslit_d1_left slit adder")
      .default("Left Pocket Slit: CD 5 1/4 Top Slit, Left"),
    /**The ui label for the lslit_d1_right slit adder*/
    "adder.lslit_d1_right.label": z
      .string()
      .describe("The ui label for the lslit_d1_right slit adder")
      .default("Left Pocket Slit: CD 5 1/4 Top Slit, Right"),
    /**The ui label for the lslit_d2_center slit adder*/
    "adder.lslit_d2_center.label": z
      .string()
      .describe("The ui label for the lslit_d2_center slit adder")
      .default("Left Pocket Slit: CD 5 1/4 Curved Down Slit, Centered"),
    /**The ui label for the lslit_d2_left slit adder*/
    "adder.lslit_d2_left.label": z
      .string()
      .describe("The ui label for the lslit_d2_left slit adder")
      .default("Left Pocket Slit: CD 5 1/4 Curved Down Slit, Left"),
    /**The ui label for the lslit_d2_right slit adder*/
    "adder.lslit_d2_right.label": z
      .string()
      .describe("The ui label for the lslit_d2_right slit adder")
      .default("Left Pocket Slit: CD 5 1/4 Curved Down Slit, Right"),
    /**The ui label for the lslit_d3_center slit adder*/
    "adder.lslit_d3_center.label": z
      .string()
      .describe("The ui label for the lslit_d3_center slit adder")
      .default("Left Pocket Slit: CD 5 1/4 Curved Up Slit, Centered"),
    /**The ui label for the lslit_d3_left slit adder*/
    "adder.lslit_d3_left.label": z
      .string()
      .describe("The ui label for the lslit_d3_left slit adder")
      .default("Left Pocket Slit: CD 5 1/4 Curved Up Slit, Left"),
    /**The ui label for the lslit_d3_right slit adder*/
    "adder.lslit_d3_right.label": z
      .string()
      .describe("The ui label for the lslit_d3_right slit adder")
      .default("Left Pocket Slit: CD 5 1/4 Curved Up Slit, Right"),
    /**The ui label for the lslit_d4_center slit adder*/
    "adder.lslit_d4_center.label": z
      .string()
      .describe("The ui label for the lslit_d4_center slit adder")
      .default("Left Pocket Slit: CD 5 1/4 Center Slit, Centered"),
    /**The ui label for the lslit_d4_left slit adder*/
    "adder.lslit_d4_left.label": z
      .string()
      .describe("The ui label for the lslit_d4_left slit adder")
      .default("Left Pocket Slit: CD 5 1/4 Center Slit, Left"),
    /**The ui label for the lslit_d4_right slit adder*/
    "adder.lslit_d4_right.label": z
      .string()
      .describe("The ui label for the lslit_d4_right slit adder")
      .default("Left Pocket Slit: CD 5 1/4 Center Slit, Right"),
    /**The ui label for the lslit_d5_center slit adder*/
    "adder.lslit_d5_center.label": z
      .string()
      .describe("The ui label for the lslit_d5_center slit adder")
      .default("Left Pocket Slit: CD 2 1/4 7 Variable Center Slit, Centered"),
    /**The ui label for the lslit_d5_left slit adder*/
    "adder.lslit_d5_left.label": z
      .string()
      .describe("The ui label for the lslit_d5_left slit adder")
      .default("Left Pocket Slit: CD 2 1/4 7 Variable Center Slit, Left"),
    /**The ui label for the lslit_d5_right slit adder*/
    "adder.lslit_d5_right.label": z
      .string()
      .describe("The ui label for the lslit_d5_right slit adder")
      .default("Left Pocket Slit: CD 2 1/4 7 Variable Center Slit, Right"),
    /**The ui label for the lslit_f1_center slit adder*/
    "adder.lslit_f1_center.label": z
      .string()
      .describe("The ui label for the lslit_f1_center slit adder")
      .default("Left Pocket Slit: Flash Drive 1/8 1/4 Thick, Centered"),
    /**The ui label for the lslit_f1_left slit adder*/
    "adder.lslit_f1_left.label": z
      .string()
      .describe("The ui label for the lslit_f1_left slit adder")
      .default("Left Pocket Slit: Flash Drive 1/8 1/4 Thick, Left"),
    /**The ui label for the lslit_f2_center slit adder*/
    "adder.lslit_f2_center.label": z
      .string()
      .describe("The ui label for the lslit_f2_center slit adder")
      .default("Left Pocket Slit: Flash Drive 5/16 1/2 Thick, Centered"),
    /**The ui label for the lslit_f2_left slit adder*/
    "adder.lslit_f2_left.label": z
      .string()
      .describe("The ui label for the lslit_f2_left slit adder")
      .default("Left Pocket Slit: Flash Drive 5/16 1/2 Thick, Left"),
    /**The ui label for the lslit_f2_right slit adder*/
    "adder.lslit_f2_right.label": z
      .string()
      .describe("The ui label for the lslit_f2_right slit adder")
      .default("Left Pocket Slit: Flash Drive 5/16 1/2 Thick, Right"),
    /**The ui label for the lslit_h1_center slit adder*/
    "adder.lslit_h1_center.label": z
      .string()
      .describe("The ui label for the lslit_h1_center slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 4 Corners, Centered",
      ),
    /**The ui label for the lslit_h1_left slit adder*/
    "adder.lslit_h1_left.label": z
      .string()
      .describe("The ui label for the lslit_h1_left slit adder")
      .default("Left Pocket Slit: Horizontal Business Card 4 Corners, Left"),
    /**The ui label for the lslit_h1_right slit adder*/
    "adder.lslit_h1_right.label": z
      .string()
      .describe("The ui label for the lslit_h1_right slit adder")
      .default("Left Pocket Slit: Horizontal Business Card 4 Corners, Right"),
    /**The ui label for the lslit_h1v_bot slit adder*/
    "adder.lslit_h1v_bot.label": z
      .string()
      .describe("The ui label for the lslit_h1v_bot slit adder")
      .default("Left Pocket Slit: Horizontal Business Card 4 Corners, Bottom"),
    /**The ui label for the lslit_h1v_mid slit adder*/
    "adder.lslit_h1v_mid.label": z
      .string()
      .describe("The ui label for the lslit_h1v_mid slit adder")
      .default("Left Pocket Slit: Horizontal Business Card 4 Corners, Middle"),
    /**The ui label for the lslit_h1v_top slit adder*/
    "adder.lslit_h1v_top.label": z
      .string()
      .describe("The ui label for the lslit_h1v_top slit adder")
      .default("Left Pocket Slit: Horizontal Business Card 4 Corners, Top"),
    /**The ui label for the lslit_h2_center slit adder*/
    "adder.lslit_h2_center.label": z
      .string()
      .describe("The ui label for the lslit_h2_center slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Corners Top Right, Centered",
      ),
    /**The ui label for the lslit_h2_left slit adder*/
    "adder.lslit_h2_left.label": z
      .string()
      .describe("The ui label for the lslit_h2_left slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Corners Top Right, Left",
      ),
    /**The ui label for the lslit_h2_right slit adder*/
    "adder.lslit_h2_right.label": z
      .string()
      .describe("The ui label for the lslit_h2_right slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Corners Top Right, Right",
      ),
    /**The ui label for the lslit_h2v_bot slit adder*/
    "adder.lslit_h2v_bot.label": z
      .string()
      .describe("The ui label for the lslit_h2v_bot slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Corners Top Right, Bottom",
      ),
    /**The ui label for the lslit_h2v_mid slit adder*/
    "adder.lslit_h2v_mid.label": z
      .string()
      .describe("The ui label for the lslit_h2v_mid slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Corners Top Right, Middle",
      ),
    /**The ui label for the lslit_h2v_top slit adder*/
    "adder.lslit_h2v_top.label": z
      .string()
      .describe("The ui label for the lslit_h2v_top slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Corners Top Right, Top",
      ),
    /**The ui label for the lslit_h3_center slit adder*/
    "adder.lslit_h3_center.label": z
      .string()
      .describe("The ui label for the lslit_h3_center slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Corners Top Left, Centered",
      ),
    /**The ui label for the lslit_h3_left slit adder*/
    "adder.lslit_h3_left.label": z
      .string()
      .describe("The ui label for the lslit_h3_left slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Corners Top Left, Left",
      ),
    /**The ui label for the lslit_h3_right slit adder*/
    "adder.lslit_h3_right.label": z
      .string()
      .describe("The ui label for the lslit_h3_right slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Corners Top Left, Right",
      ),
    /**The ui label for the lslit_h3v_bot slit adder*/
    "adder.lslit_h3v_bot.label": z
      .string()
      .describe("The ui label for the lslit_h3v_bot slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Corners Top Left, Bottom",
      ),
    /**The ui label for the lslit_h3v_mid slit adder*/
    "adder.lslit_h3v_mid.label": z
      .string()
      .describe("The ui label for the lslit_h3v_mid slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Corners Top Left, Middle",
      ),
    /**The ui label for the lslit_h3v_top slit adder*/
    "adder.lslit_h3v_top.label": z
      .string()
      .describe("The ui label for the lslit_h3v_top slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Corners Top Left, Top",
      ),
    /**The ui label for the lslit_h4_center slit adder*/
    "adder.lslit_h4_center.label": z
      .string()
      .describe("The ui label for the lslit_h4_center slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card Square Tabs, Centered",
      ),
    /**The ui label for the lslit_h4_left slit adder*/
    "adder.lslit_h4_left.label": z
      .string()
      .describe("The ui label for the lslit_h4_left slit adder")
      .default("Left Pocket Slit: Horizontal Business Card Square Tabs, Left"),
    /**The ui label for the lslit_h4_right slit adder*/
    "adder.lslit_h4_right.label": z
      .string()
      .describe("The ui label for the lslit_h4_right slit adder")
      .default("Left Pocket Slit: Horizontal Business Card Square Tabs, Right"),
    /**The ui label for the lslit_h4v_bot slit adder*/
    "adder.lslit_h4v_bot.label": z
      .string()
      .describe("The ui label for the lslit_h4v_bot slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card Square Tabs, Bottom",
      ),
    /**The ui label for the lslit_h4v_mid slit adder*/
    "adder.lslit_h4v_mid.label": z
      .string()
      .describe("The ui label for the lslit_h4v_mid slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card Square Tabs, Middle",
      ),
    /**The ui label for the lslit_h4v_top slit adder*/
    "adder.lslit_h4v_top.label": z
      .string()
      .describe("The ui label for the lslit_h4v_top slit adder")
      .default("Left Pocket Slit: Horizontal Business Card Square Tabs, Top"),
    /**The ui label for the lslit_h5_center slit adder*/
    "adder.lslit_h5_center.label": z
      .string()
      .describe("The ui label for the lslit_h5_center slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Square Corners Top Right, Centered",
      ),
    /**The ui label for the lslit_h5_left slit adder*/
    "adder.lslit_h5_left.label": z
      .string()
      .describe("The ui label for the lslit_h5_left slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Square Corners Top Right, Left",
      ),
    /**The ui label for the lslit_h5_right slit adder*/
    "adder.lslit_h5_right.label": z
      .string()
      .describe("The ui label for the lslit_h5_right slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Square Corners Top Right, Right",
      ),
    /**The ui label for the lslit_h6_center slit adder*/
    "adder.lslit_h6_center.label": z
      .string()
      .describe("The ui label for the lslit_h6_center slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Square Corners Top Left, Centered",
      ),
    /**The ui label for the lslit_h6_left slit adder*/
    "adder.lslit_h6_left.label": z
      .string()
      .describe("The ui label for the lslit_h6_left slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Square Corners Top Left, Left",
      ),
    /**The ui label for the lslit_h6_right slit adder*/
    "adder.lslit_h6_right.label": z
      .string()
      .describe("The ui label for the lslit_h6_right slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 2 Square Corners Top Left, Right",
      ),
    /**The ui label for the lslit_h7_center slit adder*/
    "adder.lslit_h7_center.label": z
      .string()
      .describe("The ui label for the lslit_h7_center slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 4 Square Corners, Centered",
      ),
    /**The ui label for the lslit_h7_left slit adder*/
    "adder.lslit_h7_left.label": z
      .string()
      .describe("The ui label for the lslit_h7_left slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 4 Square Corners, Left",
      ),
    /**The ui label for the lslit_h7_right slit adder*/
    "adder.lslit_h7_right.label": z
      .string()
      .describe("The ui label for the lslit_h7_right slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card 4 Square Corners, Right",
      ),
    /**The ui label for the lslit_h8_center slit adder*/
    "adder.lslit_h8_center.label": z
      .string()
      .describe("The ui label for the lslit_h8_center slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card Half Moon Tabs, Centered",
      ),
    /**The ui label for the lslit_h8_left slit adder*/
    "adder.lslit_h8_left.label": z
      .string()
      .describe("The ui label for the lslit_h8_left slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card Half Moon Tabs, Left",
      ),
    /**The ui label for the lslit_h8_right slit adder*/
    "adder.lslit_h8_right.label": z
      .string()
      .describe("The ui label for the lslit_h8_right slit adder")
      .default(
        "Left Pocket Slit: Horizontal Business Card Half Moon Tabs, Right",
      ),
    /**The ui label for the lslit_k1 slit adder*/
    "adder.lslit_k1.label": z
      .string()
      .describe("The ui label for the lslit_k1 slit adder")
      .default("Left Pocket Slit: Key Card Slit"),
    /**The ui label for the lslit_l1_right slit adder*/
    "adder.lslit_l1_right.label": z
      .string()
      .describe("The ui label for the lslit_l1_right slit adder")
      .default("Left Pocket Slit: Flash Drive 1/8 1/4 Thick, Right"),
    /**The ui label for the lslit_none slit adder*/
    "adder.lslit_none.label": z
      .string()
      .describe("The ui label for the lslit_none slit adder")
      .default("Left Pocket Slit: None"),
    /**The ui label for the lslit_v1_center slit adder*/
    "adder.lslit_v1_center.label": z
      .string()
      .describe("The ui label for the lslit_v1_center slit adder")
      .default("Left Pocket Slit: Vertical Business Card 4 Corners, Centered"),
    /**The ui label for the lslit_v1_left slit adder*/
    "adder.lslit_v1_left.label": z
      .string()
      .describe("The ui label for the lslit_v1_left slit adder")
      .default("Left Pocket Slit: Vertical Business Card 4 Corners, Left"),
    /**The ui label for the lslit_v1_right slit adder*/
    "adder.lslit_v1_right.label": z
      .string()
      .describe("The ui label for the lslit_v1_right slit adder")
      .default("Left Pocket Slit: Vertical Business Card 4 Corners, Right"),
    /**The ui label for the lslit_v1v_bot slit adder*/
    "adder.lslit_v1v_bot.label": z
      .string()
      .describe("The ui label for the lslit_v1v_bot slit adder")
      .default("Left Pocket Slit: Vertical Business Card 4 Corners, Bottom"),
    /**The ui label for the lslit_v1v_mid slit adder*/
    "adder.lslit_v1v_mid.label": z
      .string()
      .describe("The ui label for the lslit_v1v_mid slit adder")
      .default("Left Pocket Slit: Vertical Business Card 4 Corners, Middle"),
    /**The ui label for the lslit_v1v_top slit adder*/
    "adder.lslit_v1v_top.label": z
      .string()
      .describe("The ui label for the lslit_v1v_top slit adder")
      .default("Left Pocket Slit: Vertical Business Card 4 Corners, Top"),
    /**The ui label for the lslit_v2_center slit adder*/
    "adder.lslit_v2_center.label": z
      .string()
      .describe("The ui label for the lslit_v2_center slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Corners Top Right, Centered",
      ),
    /**The ui label for the lslit_v2_left slit adder*/
    "adder.lslit_v2_left.label": z
      .string()
      .describe("The ui label for the lslit_v2_left slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Corners Top Right, Left",
      ),
    /**The ui label for the lslit_v2_right slit adder*/
    "adder.lslit_v2_right.label": z
      .string()
      .describe("The ui label for the lslit_v2_right slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Corners Top Right, Right",
      ),
    /**The ui label for the lslit_v2v_bot slit adder*/
    "adder.lslit_v2v_bot.label": z
      .string()
      .describe("The ui label for the lslit_v2v_bot slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Corners Top Right, Bottom",
      ),
    /**The ui label for the lslit_v2v_mid slit adder*/
    "adder.lslit_v2v_mid.label": z
      .string()
      .describe("The ui label for the lslit_v2v_mid slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Corners Top Right, Middle",
      ),
    /**The ui label for the lslit_v2v_top slit adder*/
    "adder.lslit_v2v_top.label": z
      .string()
      .describe("The ui label for the lslit_v2v_top slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Corners Top Right, Top",
      ),
    /**The ui label for the lslit_v3_center slit adder*/
    "adder.lslit_v3_center.label": z
      .string()
      .describe("The ui label for the lslit_v3_center slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Corners Top Left, Centered",
      ),
    /**The ui label for the lslit_v3_left slit adder*/
    "adder.lslit_v3_left.label": z
      .string()
      .describe("The ui label for the lslit_v3_left slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Corners Top Left, Left",
      ),
    /**The ui label for the lslit_v3_right slit adder*/
    "adder.lslit_v3_right.label": z
      .string()
      .describe("The ui label for the lslit_v3_right slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Corners Top Left, Right",
      ),
    /**The ui label for the lslit_v3v_bot slit adder*/
    "adder.lslit_v3v_bot.label": z
      .string()
      .describe("The ui label for the lslit_v3v_bot slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Corners Top Left, Bottom",
      ),
    /**The ui label for the lslit_v3v_mid slit adder*/
    "adder.lslit_v3v_mid.label": z
      .string()
      .describe("The ui label for the lslit_v3v_mid slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Corners Top Left, Middle",
      ),
    /**The ui label for the lslit_v3v_top slit adder*/
    "adder.lslit_v3v_top.label": z
      .string()
      .describe("The ui label for the lslit_v3v_top slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Corners Top Left, Top",
      ),
    /**The ui label for the lslit_v4_center slit adder*/
    "adder.lslit_v4_center.label": z
      .string()
      .describe("The ui label for the lslit_v4_center slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Square Tabs, Centered",
      ),
    /**The ui label for the lslit_v4_left slit adder*/
    "adder.lslit_v4_left.label": z
      .string()
      .describe("The ui label for the lslit_v4_left slit adder")
      .default("Left Pocket Slit: Vertical Business Card 2 Square Tabs, Left"),
    /**The ui label for the lslit_v4_right slit adder*/
    "adder.lslit_v4_right.label": z
      .string()
      .describe("The ui label for the lslit_v4_right slit adder")
      .default("Left Pocket Slit: Vertical Business Card 2 Square Tabs, Right"),
    /**The ui label for the lslit_v4v_bot slit adder*/
    "adder.lslit_v4v_bot.label": z
      .string()
      .describe("The ui label for the lslit_v4v_bot slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Square Tabs, Bottom",
      ),
    /**The ui label for the lslit_v4v_mid slit adder*/
    "adder.lslit_v4v_mid.label": z
      .string()
      .describe("The ui label for the lslit_v4v_mid slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Square Tabs, Middle",
      ),
    /**The ui label for the lslit_v4v_top slit adder*/
    "adder.lslit_v4v_top.label": z
      .string()
      .describe("The ui label for the lslit_v4v_top slit adder")
      .default("Left Pocket Slit: Vertical Business Card 2 Square Tabs, Top"),
    /**The ui label for the lslit_v5_center slit adder*/
    "adder.lslit_v5_center.label": z
      .string()
      .describe("The ui label for the lslit_v5_center slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Square Corners Top Right, Centered",
      ),
    /**The ui label for the lslit_v5_left slit adder*/
    "adder.lslit_v5_left.label": z
      .string()
      .describe("The ui label for the lslit_v5_left slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Square Corners Top Right, Left",
      ),
    /**The ui label for the lslit_v5_right slit adder*/
    "adder.lslit_v5_right.label": z
      .string()
      .describe("The ui label for the lslit_v5_right slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Square Corners Top Right, Right",
      ),
    /**The ui label for the lslit_v6_center slit adder*/
    "adder.lslit_v6_center.label": z
      .string()
      .describe("The ui label for the lslit_v6_center slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Square Corners Top Left, Centered",
      ),
    /**The ui label for the lslit_v6_left slit adder*/
    "adder.lslit_v6_left.label": z
      .string()
      .describe("The ui label for the lslit_v6_left slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Square Corners Top Left, Left",
      ),
    /**The ui label for the lslit_v6_right slit adder*/
    "adder.lslit_v6_right.label": z
      .string()
      .describe("The ui label for the lslit_v6_right slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 2 Square Corners Top Left, Right",
      ),
    /**The ui label for the lslit_v7_center slit adder*/
    "adder.lslit_v7_center.label": z
      .string()
      .describe("The ui label for the lslit_v7_center slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 4 Square Corners, Centered",
      ),
    /**The ui label for the lslit_v7_left slit adder*/
    "adder.lslit_v7_left.label": z
      .string()
      .describe("The ui label for the lslit_v7_left slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 4 Square Corners, Left",
      ),
    /**The ui label for the lslit_v7_right slit adder*/
    "adder.lslit_v7_right.label": z
      .string()
      .describe("The ui label for the lslit_v7_right slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card 4 Square Corners, Right",
      ),
    /**The ui label for the lslit_v8_center slit adder*/
    "adder.lslit_v8_center.label": z
      .string()
      .describe("The ui label for the lslit_v8_center slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card Half Moon Tabs, Centered",
      ),
    /**The ui label for the lslit_v8_left slit adder*/
    "adder.lslit_v8_left.label": z
      .string()
      .describe("The ui label for the lslit_v8_left slit adder")
      .default("Left Pocket Slit: Vertical Business Card Half Moon Tabs, Left"),
    /**The ui label for the lslit_v8_right slit adder*/
    "adder.lslit_v8_right.label": z
      .string()
      .describe("The ui label for the lslit_v8_right slit adder")
      .default(
        "Left Pocket Slit: Vertical Business Card Half Moon Tabs, Right",
      ),
    /**The ui label for the mslit_b1_center slit adder*/
    "adder.mslit_b1_center.label": z
      .string()
      .describe("The ui label for the mslit_b1_center slit adder")
      .default("Middle Pocket Slit: Brochure 4 3/8 Top Slit, Centered"),
    /**The ui label for the mslit_b1_left slit adder*/
    "adder.mslit_b1_left.label": z
      .string()
      .describe("The ui label for the mslit_b1_left slit adder")
      .default("Middle Pocket Slit: Brochure 4 3/8 Top Slit, Left"),
    /**The ui label for the mslit_b1_right slit adder*/
    "adder.mslit_b1_right.label": z
      .string()
      .describe("The ui label for the mslit_b1_right slit adder")
      .default("Middle Pocket Slit: Brochure 4 3/8 Top Slit, Right"),
    /**The ui label for the mslit_b2_center slit adder*/
    "adder.mslit_b2_center.label": z
      .string()
      .describe("The ui label for the mslit_b2_center slit adder")
      .default("Middle Pocket Slit: Brochure 6 3/8 Top Slit, Centered"),
    /**The ui label for the mslit_b2_left slit adder*/
    "adder.mslit_b2_left.label": z
      .string()
      .describe("The ui label for the mslit_b2_left slit adder")
      .default("Middle Pocket Slit: Brochure 6 3/8 Top Slit, Left"),
    /**The ui label for the mslit_b2_right slit adder*/
    "adder.mslit_b2_right.label": z
      .string()
      .describe("The ui label for the mslit_b2_right slit adder")
      .default("Middle Pocket Slit: Brochure 6 3/8 Top Slit, Right"),
    /**The ui label for the mslit_c1_center slit adder*/
    "adder.mslit_c1_center.label": z
      .string()
      .describe("The ui label for the mslit_c1_center slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 4 Square Tabs, Centered",
      ),
    /**The ui label for the mslit_c1_left slit adder*/
    "adder.mslit_c1_left.label": z
      .string()
      .describe("The ui label for the mslit_c1_left slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 4 Square Tabs, Left",
      ),
    /**The ui label for the mslit_c1_right slit adder*/
    "adder.mslit_c1_right.label": z
      .string()
      .describe("The ui label for the mslit_c1_right slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 4 Square Tabs, Right",
      ),
    /**The ui label for the mslit_c1v_bot slit adder*/
    "adder.mslit_c1v_bot.label": z
      .string()
      .describe("The ui label for the mslit_c1v_bot slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 4 Square Tabs, Bottom",
      ),
    /**The ui label for the mslit_c1v_mid slit adder*/
    "adder.mslit_c1v_mid.label": z
      .string()
      .describe("The ui label for the mslit_c1v_mid slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 4 Square Tabs, Middle",
      ),
    /**The ui label for the mslit_c1v_top slit adder*/
    "adder.mslit_c1v_top.label": z
      .string()
      .describe("The ui label for the mslit_c1v_top slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 4 Square Tabs, Top",
      ),
    /**The ui label for the mslit_c2_center slit adder*/
    "adder.mslit_c2_center.label": z
      .string()
      .describe("The ui label for the mslit_c2_center slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 8 Square Corners, Centered",
      ),
    /**The ui label for the mslit_c2_left slit adder*/
    "adder.mslit_c2_left.label": z
      .string()
      .describe("The ui label for the mslit_c2_left slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 8 Square Corners, Left",
      ),
    /**The ui label for the mslit_c2_right slit adder*/
    "adder.mslit_c2_right.label": z
      .string()
      .describe("The ui label for the mslit_c2_right slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 8 Square Corners, Right",
      ),
    /**The ui label for the mslit_c3_center slit adder*/
    "adder.mslit_c3_center.label": z
      .string()
      .describe("The ui label for the mslit_c3_center slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 4 Half Moon Tabs, Centered",
      ),
    /**The ui label for the mslit_c3_left slit adder*/
    "adder.mslit_c3_left.label": z
      .string()
      .describe("The ui label for the mslit_c3_left slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 4 Half Moon Tabs, Left",
      ),
    /**The ui label for the mslit_c3_right slit adder*/
    "adder.mslit_c3_right.label": z
      .string()
      .describe("The ui label for the mslit_c3_right slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 4 Half Moon Tabs, Right",
      ),
    /**The ui label for the mslit_c4_center slit adder*/
    "adder.mslit_c4_center.label": z
      .string()
      .describe("The ui label for the mslit_c4_center slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 4 Quarter Moon Tabs, Centered",
      ),
    /**The ui label for the mslit_c4_left slit adder*/
    "adder.mslit_c4_left.label": z
      .string()
      .describe("The ui label for the mslit_c4_left slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 4 Quarter Moon Tabs, Left",
      ),
    /**The ui label for the mslit_c4_right slit adder*/
    "adder.mslit_c4_right.label": z
      .string()
      .describe("The ui label for the mslit_c4_right slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 4 Quarter Moon Tabs, Right",
      ),
    /**The ui label for the mslit_c5_center slit adder*/
    "adder.mslit_c5_center.label": z
      .string()
      .describe("The ui label for the mslit_c5_center slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Wide) Top Right, Centered",
      ),
    /**The ui label for the mslit_c5_left slit adder*/
    "adder.mslit_c5_left.label": z
      .string()
      .describe("The ui label for the mslit_c5_left slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Wide) Top Right, Left",
      ),
    /**The ui label for the mslit_c5_right slit adder*/
    "adder.mslit_c5_right.label": z
      .string()
      .describe("The ui label for the mslit_c5_right slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Wide) Top Right, Right",
      ),
    /**The ui label for the mslit_c6_center slit adder*/
    "adder.mslit_c6_center.label": z
      .string()
      .describe("The ui label for the mslit_c6_center slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Centered",
      ),
    /**The ui label for the mslit_c6_left slit adder*/
    "adder.mslit_c6_left.label": z
      .string()
      .describe("The ui label for the mslit_c6_left slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Left",
      ),
    /**The ui label for the mslit_c6_right slit adder*/
    "adder.mslit_c6_right.label": z
      .string()
      .describe("The ui label for the mslit_c6_right slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Right",
      ),
    /**The ui label for the mslit_c6v_bot slit adder*/
    "adder.mslit_c6v_bot.label": z
      .string()
      .describe("The ui label for the mslit_c6v_bot slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Bottom",
      ),
    /**The ui label for the mslit_c6v_mid slit adder*/
    "adder.mslit_c6v_mid.label": z
      .string()
      .describe("The ui label for the mslit_c6v_mid slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Middle",
      ),
    /**The ui label for the mslit_c6v_top slit adder*/
    "adder.mslit_c6v_top.label": z
      .string()
      .describe("The ui label for the mslit_c6v_top slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Top",
      ),
    /**The ui label for the mslit_c7_center slit adder*/
    "adder.mslit_c7_center.label": z
      .string()
      .describe("The ui label for the mslit_c7_center slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Centered",
      ),
    /**The ui label for the mslit_c7_left slit adder*/
    "adder.mslit_c7_left.label": z
      .string()
      .describe("The ui label for the mslit_c7_left slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Left",
      ),
    /**The ui label for the mslit_c7_right slit adder*/
    "adder.mslit_c7_right.label": z
      .string()
      .describe("The ui label for the mslit_c7_right slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Right",
      ),
    /**The ui label for the mslit_c7v_bot slit adder*/
    "adder.mslit_c7v_bot.label": z
      .string()
      .describe("The ui label for the mslit_c7v_bot slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Bottom",
      ),
    /**The ui label for the mslit_c7v_mid slit adder*/
    "adder.mslit_c7v_mid.label": z
      .string()
      .describe("The ui label for the mslit_c7v_mid slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Middle",
      ),
    /**The ui label for the mslit_c7v_top slit adder*/
    "adder.mslit_c7v_top.label": z
      .string()
      .describe("The ui label for the mslit_c7v_top slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Top",
      ),
    /**The ui label for the mslit_c8_center slit adder*/
    "adder.mslit_c8_center.label": z
      .string()
      .describe("The ui label for the mslit_c8_center slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Centered",
      ),
    /**The ui label for the mslit_c8_left slit adder*/
    "adder.mslit_c8_left.label": z
      .string()
      .describe("The ui label for the mslit_c8_left slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Left",
      ),
    /**The ui label for the mslit_c8_right slit adder*/
    "adder.mslit_c8_right.label": z
      .string()
      .describe("The ui label for the mslit_c8_right slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Right",
      ),
    /**The ui label for the mslit_c8v_bot slit adder*/
    "adder.mslit_c8v_bot.label": z
      .string()
      .describe("The ui label for the mslit_c8v_bot slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Bottom",
      ),
    /**The ui label for the mslit_c8v_mid slit adder*/
    "adder.mslit_c8v_mid.label": z
      .string()
      .describe("The ui label for the mslit_c8v_mid slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Middle",
      ),
    /**The ui label for the mslit_c8v_top slit adder*/
    "adder.mslit_c8v_top.label": z
      .string()
      .describe("The ui label for the mslit_c8v_top slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Top",
      ),
    /**The ui label for the mslit_c9v_bot slit adder*/
    "adder.mslit_c9v_bot.label": z
      .string()
      .describe("The ui label for the mslit_c9v_bot slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Bottom",
      ),
    /**The ui label for the mslit_c9v_mid slit adder*/
    "adder.mslit_c9v_mid.label": z
      .string()
      .describe("The ui label for the mslit_c9v_mid slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Middle",
      ),
    /**The ui label for the mslit_c9v_top slit adder*/
    "adder.mslit_c9v_top.label": z
      .string()
      .describe("The ui label for the mslit_c9v_top slit adder")
      .default(
        "Middle Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Top",
      ),
    /**The ui label for the mslit_d1_center slit adder*/
    "adder.mslit_d1_center.label": z
      .string()
      .describe("The ui label for the mslit_d1_center slit adder")
      .default("Middle Pocket Slit: CD 5 1/4 Top Slit, Centered"),
    /**The ui label for the mslit_d1_left slit adder*/
    "adder.mslit_d1_left.label": z
      .string()
      .describe("The ui label for the mslit_d1_left slit adder")
      .default("Middle Pocket Slit: CD 5 1/4 Top Slit, Left"),
    /**The ui label for the mslit_d1_right slit adder*/
    "adder.mslit_d1_right.label": z
      .string()
      .describe("The ui label for the mslit_d1_right slit adder")
      .default("Middle Pocket Slit: CD 5 1/4 Top Slit, Right"),
    /**The ui label for the mslit_d2_center slit adder*/
    "adder.mslit_d2_center.label": z
      .string()
      .describe("The ui label for the mslit_d2_center slit adder")
      .default("Middle Pocket Slit: CD 5 1/4 Curved Down Slit, Centered"),
    /**The ui label for the mslit_d2_left slit adder*/
    "adder.mslit_d2_left.label": z
      .string()
      .describe("The ui label for the mslit_d2_left slit adder")
      .default("Middle Pocket Slit: CD 5 1/4 Curved Down Slit, Left"),
    /**The ui label for the mslit_d2_right slit adder*/
    "adder.mslit_d2_right.label": z
      .string()
      .describe("The ui label for the mslit_d2_right slit adder")
      .default("Middle Pocket Slit: CD 5 1/4 Curved Down Slit, Right"),
    /**The ui label for the mslit_d3_center slit adder*/
    "adder.mslit_d3_center.label": z
      .string()
      .describe("The ui label for the mslit_d3_center slit adder")
      .default("Middle Pocket Slit: CD 5 1/4 Curved Up Slit, Centered"),
    /**The ui label for the mslit_d3_left slit adder*/
    "adder.mslit_d3_left.label": z
      .string()
      .describe("The ui label for the mslit_d3_left slit adder")
      .default("Middle Pocket Slit: CD 5 1/4 Curved Up Slit, Left"),
    /**The ui label for the mslit_d3_right slit adder*/
    "adder.mslit_d3_right.label": z
      .string()
      .describe("The ui label for the mslit_d3_right slit adder")
      .default("Middle Pocket Slit: CD 5 1/4 Curved Up Slit, Right"),
    /**The ui label for the mslit_d4_center slit adder*/
    "adder.mslit_d4_center.label": z
      .string()
      .describe("The ui label for the mslit_d4_center slit adder")
      .default("Middle Pocket Slit: CD 5 1/4 Center Slit, Centered"),
    /**The ui label for the mslit_d4_left slit adder*/
    "adder.mslit_d4_left.label": z
      .string()
      .describe("The ui label for the mslit_d4_left slit adder")
      .default("Middle Pocket Slit: CD 5 1/4 Center Slit, Left"),
    /**The ui label for the mslit_d4_right slit adder*/
    "adder.mslit_d4_right.label": z
      .string()
      .describe("The ui label for the mslit_d4_right slit adder")
      .default("Middle Pocket Slit: CD 5 1/4 Center Slit, Right"),
    /**The ui label for the mslit_d5_center slit adder*/
    "adder.mslit_d5_center.label": z
      .string()
      .describe("The ui label for the mslit_d5_center slit adder")
      .default("Middle Pocket Slit: CD 2 1/4 7 Variable Center Slit, Centered"),
    /**The ui label for the mslit_d5_left slit adder*/
    "adder.mslit_d5_left.label": z
      .string()
      .describe("The ui label for the mslit_d5_left slit adder")
      .default("Middle Pocket Slit: CD 2 1/4 7 Variable Center Slit, Left"),
    /**The ui label for the mslit_d5_right slit adder*/
    "adder.mslit_d5_right.label": z
      .string()
      .describe("The ui label for the mslit_d5_right slit adder")
      .default("Middle Pocket Slit: CD 2 1/4 7 Variable Center Slit, Right"),
    /**The ui label for the mslit_f1_center slit adder*/
    "adder.mslit_f1_center.label": z
      .string()
      .describe("The ui label for the mslit_f1_center slit adder")
      .default("Middle Pocket Slit: Flash Drive 1/8 1/4 Thick, Centered"),
    /**The ui label for the mslit_f1_left slit adder*/
    "adder.mslit_f1_left.label": z
      .string()
      .describe("The ui label for the mslit_f1_left slit adder")
      .default("Middle Pocket Slit: Flash Drive 1/8 1/4 Thick, Left"),
    /**The ui label for the mslit_f2_center slit adder*/
    "adder.mslit_f2_center.label": z
      .string()
      .describe("The ui label for the mslit_f2_center slit adder")
      .default("Middle Pocket Slit: Flash Drive 5/16 1/2 Thick, Centered"),
    /**The ui label for the mslit_f2_left slit adder*/
    "adder.mslit_f2_left.label": z
      .string()
      .describe("The ui label for the mslit_f2_left slit adder")
      .default("Middle Pocket Slit: Flash Drive 5/16 1/2 Thick, Left"),
    /**The ui label for the mslit_f2_right slit adder*/
    "adder.mslit_f2_right.label": z
      .string()
      .describe("The ui label for the mslit_f2_right slit adder")
      .default("Middle Pocket Slit: Flash Drive 5/16 1/2 Thick, Right"),
    /**The ui label for the mslit_h1_center slit adder*/
    "adder.mslit_h1_center.label": z
      .string()
      .describe("The ui label for the mslit_h1_center slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 4 Corners, Centered",
      ),
    /**The ui label for the mslit_h1_left slit adder*/
    "adder.mslit_h1_left.label": z
      .string()
      .describe("The ui label for the mslit_h1_left slit adder")
      .default("Middle Pocket Slit: Horizontal Business Card 4 Corners, Left"),
    /**The ui label for the mslit_h1_right slit adder*/
    "adder.mslit_h1_right.label": z
      .string()
      .describe("The ui label for the mslit_h1_right slit adder")
      .default("Middle Pocket Slit: Horizontal Business Card 4 Corners, Right"),
    /**The ui label for the mslit_h1v_bot slit adder*/
    "adder.mslit_h1v_bot.label": z
      .string()
      .describe("The ui label for the mslit_h1v_bot slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 4 Corners, Bottom",
      ),
    /**The ui label for the mslit_h1v_mid slit adder*/
    "adder.mslit_h1v_mid.label": z
      .string()
      .describe("The ui label for the mslit_h1v_mid slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 4 Corners, Middle",
      ),
    /**The ui label for the mslit_h1v_top slit adder*/
    "adder.mslit_h1v_top.label": z
      .string()
      .describe("The ui label for the mslit_h1v_top slit adder")
      .default("Middle Pocket Slit: Horizontal Business Card 4 Corners, Top"),
    /**The ui label for the mslit_h2_center slit adder*/
    "adder.mslit_h2_center.label": z
      .string()
      .describe("The ui label for the mslit_h2_center slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Corners Top Right, Centered",
      ),
    /**The ui label for the mslit_h2_left slit adder*/
    "adder.mslit_h2_left.label": z
      .string()
      .describe("The ui label for the mslit_h2_left slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Corners Top Right, Left",
      ),
    /**The ui label for the mslit_h2_right slit adder*/
    "adder.mslit_h2_right.label": z
      .string()
      .describe("The ui label for the mslit_h2_right slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Corners Top Right, Right",
      ),
    /**The ui label for the mslit_h2v_bot slit adder*/
    "adder.mslit_h2v_bot.label": z
      .string()
      .describe("The ui label for the mslit_h2v_bot slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Corners Top Right, Bottom",
      ),
    /**The ui label for the mslit_h2v_mid slit adder*/
    "adder.mslit_h2v_mid.label": z
      .string()
      .describe("The ui label for the mslit_h2v_mid slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Corners Top Right, Middle",
      ),
    /**The ui label for the mslit_h2v_top slit adder*/
    "adder.mslit_h2v_top.label": z
      .string()
      .describe("The ui label for the mslit_h2v_top slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Corners Top Right, Top",
      ),
    /**The ui label for the mslit_h3_center slit adder*/
    "adder.mslit_h3_center.label": z
      .string()
      .describe("The ui label for the mslit_h3_center slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Corners Top Left, Centered",
      ),
    /**The ui label for the mslit_h3_left slit adder*/
    "adder.mslit_h3_left.label": z
      .string()
      .describe("The ui label for the mslit_h3_left slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Corners Top Left, Left",
      ),
    /**The ui label for the mslit_h3_right slit adder*/
    "adder.mslit_h3_right.label": z
      .string()
      .describe("The ui label for the mslit_h3_right slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Corners Top Left, Right",
      ),
    /**The ui label for the mslit_h3v_bot slit adder*/
    "adder.mslit_h3v_bot.label": z
      .string()
      .describe("The ui label for the mslit_h3v_bot slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Corners Top Left, Bottom",
      ),
    /**The ui label for the mslit_h3v_mid slit adder*/
    "adder.mslit_h3v_mid.label": z
      .string()
      .describe("The ui label for the mslit_h3v_mid slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Corners Top Left, Middle",
      ),
    /**The ui label for the mslit_h3v_top slit adder*/
    "adder.mslit_h3v_top.label": z
      .string()
      .describe("The ui label for the mslit_h3v_top slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Corners Top Left, Top",
      ),
    /**The ui label for the mslit_h4_center slit adder*/
    "adder.mslit_h4_center.label": z
      .string()
      .describe("The ui label for the mslit_h4_center slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card Square Tabs, Centered",
      ),
    /**The ui label for the mslit_h4_left slit adder*/
    "adder.mslit_h4_left.label": z
      .string()
      .describe("The ui label for the mslit_h4_left slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card Square Tabs, Left",
      ),
    /**The ui label for the mslit_h4_right slit adder*/
    "adder.mslit_h4_right.label": z
      .string()
      .describe("The ui label for the mslit_h4_right slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card Square Tabs, Right",
      ),
    /**The ui label for the mslit_h4v_bot slit adder*/
    "adder.mslit_h4v_bot.label": z
      .string()
      .describe("The ui label for the mslit_h4v_bot slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card Square Tabs, Bottom",
      ),
    /**The ui label for the mslit_h4v_mid slit adder*/
    "adder.mslit_h4v_mid.label": z
      .string()
      .describe("The ui label for the mslit_h4v_mid slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card Square Tabs, Middle",
      ),
    /**The ui label for the mslit_h4v_top slit adder*/
    "adder.mslit_h4v_top.label": z
      .string()
      .describe("The ui label for the mslit_h4v_top slit adder")
      .default("Middle Pocket Slit: Horizontal Business Card Square Tabs, Top"),
    /**The ui label for the mslit_h5_center slit adder*/
    "adder.mslit_h5_center.label": z
      .string()
      .describe("The ui label for the mslit_h5_center slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Square Corners Top Right, Centered",
      ),
    /**The ui label for the mslit_h5_left slit adder*/
    "adder.mslit_h5_left.label": z
      .string()
      .describe("The ui label for the mslit_h5_left slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Square Corners Top Right, Left",
      ),
    /**The ui label for the mslit_h5_right slit adder*/
    "adder.mslit_h5_right.label": z
      .string()
      .describe("The ui label for the mslit_h5_right slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Square Corners Top Right, Right",
      ),
    /**The ui label for the mslit_h6_center slit adder*/
    "adder.mslit_h6_center.label": z
      .string()
      .describe("The ui label for the mslit_h6_center slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Square Corners Top Left, Centered",
      ),
    /**The ui label for the mslit_h6_left slit adder*/
    "adder.mslit_h6_left.label": z
      .string()
      .describe("The ui label for the mslit_h6_left slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Square Corners Top Left, Left",
      ),
    /**The ui label for the mslit_h6_right slit adder*/
    "adder.mslit_h6_right.label": z
      .string()
      .describe("The ui label for the mslit_h6_right slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 2 Square Corners Top Left, Right",
      ),
    /**The ui label for the mslit_h7_center slit adder*/
    "adder.mslit_h7_center.label": z
      .string()
      .describe("The ui label for the mslit_h7_center slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 4 Square Corners, Centered",
      ),
    /**The ui label for the mslit_h7_left slit adder*/
    "adder.mslit_h7_left.label": z
      .string()
      .describe("The ui label for the mslit_h7_left slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 4 Square Corners, Left",
      ),
    /**The ui label for the mslit_h7_right slit adder*/
    "adder.mslit_h7_right.label": z
      .string()
      .describe("The ui label for the mslit_h7_right slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card 4 Square Corners, Right",
      ),
    /**The ui label for the mslit_h8_center slit adder*/
    "adder.mslit_h8_center.label": z
      .string()
      .describe("The ui label for the mslit_h8_center slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card Half Moon Tabs, Centered",
      ),
    /**The ui label for the mslit_h8_left slit adder*/
    "adder.mslit_h8_left.label": z
      .string()
      .describe("The ui label for the mslit_h8_left slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card Half Moon Tabs, Left",
      ),
    /**The ui label for the mslit_h8_right slit adder*/
    "adder.mslit_h8_right.label": z
      .string()
      .describe("The ui label for the mslit_h8_right slit adder")
      .default(
        "Middle Pocket Slit: Horizontal Business Card Half Moon Tabs, Right",
      ),
    /**The ui label for the mslit_k1 slit adder*/
    "adder.mslit_k1.label": z
      .string()
      .describe("The ui label for the mslit_k1 slit adder")
      .default("Middle Pocket Slit: Key Card Slit"),
    /**The ui label for the mslit_l1_right slit adder*/
    "adder.mslit_l1_right.label": z
      .string()
      .describe("The ui label for the mslit_l1_right slit adder")
      .default("Middle Pocket Slit: Flash Drive 1/8 1/4 Thick, Right"),
    /**The ui label for the mslit_none slit adder*/
    "adder.mslit_none.label": z
      .string()
      .describe("The ui label for the mslit_none slit adder")
      .default("Middle Pocket Slit: None"),
    /**The ui label for the mslit_v1_center slit adder*/
    "adder.mslit_v1_center.label": z
      .string()
      .describe("The ui label for the mslit_v1_center slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 4 Corners, Centered",
      ),
    /**The ui label for the mslit_v1_left slit adder*/
    "adder.mslit_v1_left.label": z
      .string()
      .describe("The ui label for the mslit_v1_left slit adder")
      .default("Middle Pocket Slit: Vertical Business Card 4 Corners, Left"),
    /**The ui label for the mslit_v1_right slit adder*/
    "adder.mslit_v1_right.label": z
      .string()
      .describe("The ui label for the mslit_v1_right slit adder")
      .default("Middle Pocket Slit: Vertical Business Card 4 Corners, Right"),
    /**The ui label for the mslit_v1v_bot slit adder*/
    "adder.mslit_v1v_bot.label": z
      .string()
      .describe("The ui label for the mslit_v1v_bot slit adder")
      .default("Middle Pocket Slit: Vertical Business Card 4 Corners, Bottom"),
    /**The ui label for the mslit_v1v_mid slit adder*/
    "adder.mslit_v1v_mid.label": z
      .string()
      .describe("The ui label for the mslit_v1v_mid slit adder")
      .default("Middle Pocket Slit: Vertical Business Card 4 Corners, Middle"),
    /**The ui label for the mslit_v1v_top slit adder*/
    "adder.mslit_v1v_top.label": z
      .string()
      .describe("The ui label for the mslit_v1v_top slit adder")
      .default("Middle Pocket Slit: Vertical Business Card 4 Corners, Top"),
    /**The ui label for the mslit_v2_center slit adder*/
    "adder.mslit_v2_center.label": z
      .string()
      .describe("The ui label for the mslit_v2_center slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Corners Top Right, Centered",
      ),
    /**The ui label for the mslit_v2_left slit adder*/
    "adder.mslit_v2_left.label": z
      .string()
      .describe("The ui label for the mslit_v2_left slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Corners Top Right, Left",
      ),
    /**The ui label for the mslit_v2_right slit adder*/
    "adder.mslit_v2_right.label": z
      .string()
      .describe("The ui label for the mslit_v2_right slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Corners Top Right, Right",
      ),
    /**The ui label for the mslit_v2v_bot slit adder*/
    "adder.mslit_v2v_bot.label": z
      .string()
      .describe("The ui label for the mslit_v2v_bot slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Corners Top Right, Bottom",
      ),
    /**The ui label for the mslit_v2v_mid slit adder*/
    "adder.mslit_v2v_mid.label": z
      .string()
      .describe("The ui label for the mslit_v2v_mid slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Corners Top Right, Middle",
      ),
    /**The ui label for the mslit_v2v_top slit adder*/
    "adder.mslit_v2v_top.label": z
      .string()
      .describe("The ui label for the mslit_v2v_top slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Corners Top Right, Top",
      ),
    /**The ui label for the mslit_v3_center slit adder*/
    "adder.mslit_v3_center.label": z
      .string()
      .describe("The ui label for the mslit_v3_center slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Corners Top Left, Centered",
      ),
    /**The ui label for the mslit_v3_left slit adder*/
    "adder.mslit_v3_left.label": z
      .string()
      .describe("The ui label for the mslit_v3_left slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Corners Top Left, Left",
      ),
    /**The ui label for the mslit_v3_right slit adder*/
    "adder.mslit_v3_right.label": z
      .string()
      .describe("The ui label for the mslit_v3_right slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Corners Top Left, Right",
      ),
    /**The ui label for the mslit_v3v_bot slit adder*/
    "adder.mslit_v3v_bot.label": z
      .string()
      .describe("The ui label for the mslit_v3v_bot slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Corners Top Left, Bottom",
      ),
    /**The ui label for the mslit_v3v_mid slit adder*/
    "adder.mslit_v3v_mid.label": z
      .string()
      .describe("The ui label for the mslit_v3v_mid slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Corners Top Left, Middle",
      ),
    /**The ui label for the mslit_v3v_top slit adder*/
    "adder.mslit_v3v_top.label": z
      .string()
      .describe("The ui label for the mslit_v3v_top slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Corners Top Left, Top",
      ),
    /**The ui label for the mslit_v4_center slit adder*/
    "adder.mslit_v4_center.label": z
      .string()
      .describe("The ui label for the mslit_v4_center slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Square Tabs, Centered",
      ),
    /**The ui label for the mslit_v4_left slit adder*/
    "adder.mslit_v4_left.label": z
      .string()
      .describe("The ui label for the mslit_v4_left slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Square Tabs, Left",
      ),
    /**The ui label for the mslit_v4_right slit adder*/
    "adder.mslit_v4_right.label": z
      .string()
      .describe("The ui label for the mslit_v4_right slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Square Tabs, Right",
      ),
    /**The ui label for the mslit_v4v_bot slit adder*/
    "adder.mslit_v4v_bot.label": z
      .string()
      .describe("The ui label for the mslit_v4v_bot slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Square Tabs, Bottom",
      ),
    /**The ui label for the mslit_v4v_mid slit adder*/
    "adder.mslit_v4v_mid.label": z
      .string()
      .describe("The ui label for the mslit_v4v_mid slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Square Tabs, Middle",
      ),
    /**The ui label for the mslit_v4v_top slit adder*/
    "adder.mslit_v4v_top.label": z
      .string()
      .describe("The ui label for the mslit_v4v_top slit adder")
      .default("Middle Pocket Slit: Vertical Business Card 2 Square Tabs, Top"),
    /**The ui label for the mslit_v5_center slit adder*/
    "adder.mslit_v5_center.label": z
      .string()
      .describe("The ui label for the mslit_v5_center slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Square Corners Top Right, Centered",
      ),
    /**The ui label for the mslit_v5_left slit adder*/
    "adder.mslit_v5_left.label": z
      .string()
      .describe("The ui label for the mslit_v5_left slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Square Corners Top Right, Left",
      ),
    /**The ui label for the mslit_v5_right slit adder*/
    "adder.mslit_v5_right.label": z
      .string()
      .describe("The ui label for the mslit_v5_right slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Square Corners Top Right, Right",
      ),
    /**The ui label for the mslit_v6_center slit adder*/
    "adder.mslit_v6_center.label": z
      .string()
      .describe("The ui label for the mslit_v6_center slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Square Corners Top Left, Centered",
      ),
    /**The ui label for the mslit_v6_left slit adder*/
    "adder.mslit_v6_left.label": z
      .string()
      .describe("The ui label for the mslit_v6_left slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Square Corners Top Left, Left",
      ),
    /**The ui label for the mslit_v6_right slit adder*/
    "adder.mslit_v6_right.label": z
      .string()
      .describe("The ui label for the mslit_v6_right slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 2 Square Corners Top Left, Right",
      ),
    /**The ui label for the mslit_v7_center slit adder*/
    "adder.mslit_v7_center.label": z
      .string()
      .describe("The ui label for the mslit_v7_center slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 4 Square Corners, Centered",
      ),
    /**The ui label for the mslit_v7_left slit adder*/
    "adder.mslit_v7_left.label": z
      .string()
      .describe("The ui label for the mslit_v7_left slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 4 Square Corners, Left",
      ),
    /**The ui label for the mslit_v7_right slit adder*/
    "adder.mslit_v7_right.label": z
      .string()
      .describe("The ui label for the mslit_v7_right slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card 4 Square Corners, Right",
      ),
    /**The ui label for the mslit_v8_center slit adder*/
    "adder.mslit_v8_center.label": z
      .string()
      .describe("The ui label for the mslit_v8_center slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card Half Moon Tabs, Centered",
      ),
    /**The ui label for the mslit_v8_left slit adder*/
    "adder.mslit_v8_left.label": z
      .string()
      .describe("The ui label for the mslit_v8_left slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card Half Moon Tabs, Left",
      ),
    /**The ui label for the mslit_v8_right slit adder*/
    "adder.mslit_v8_right.label": z
      .string()
      .describe("The ui label for the mslit_v8_right slit adder")
      .default(
        "Middle Pocket Slit: Vertical Business Card Half Moon Tabs, Right",
      ),
    /**The ui label for the rslit_b1_center slit adder*/
    "adder.rslit_b1_center.label": z
      .string()
      .describe("The ui label for the rslit_b1_center slit adder")
      .default("Right Pocket Slit: Brochure 4 3/8 Top Slit, Centered"),
    /**The ui label for the rslit_b1_left slit adder*/
    "adder.rslit_b1_left.label": z
      .string()
      .describe("The ui label for the rslit_b1_left slit adder")
      .default("Right Pocket Slit: Brochure 4 3/8 Top Slit, Left"),
    /**The ui label for the rslit_b1_right slit adder*/
    "adder.rslit_b1_right.label": z
      .string()
      .describe("The ui label for the rslit_b1_right slit adder")
      .default("Right Pocket Slit: Brochure 4 3/8 Top Slit, Right"),
    /**The ui label for the rslit_b2_center slit adder*/
    "adder.rslit_b2_center.label": z
      .string()
      .describe("The ui label for the rslit_b2_center slit adder")
      .default("Right Pocket Slit: Brochure 6 3/8 Top Slit, Centered"),
    /**The ui label for the rslit_b2_left slit adder*/
    "adder.rslit_b2_left.label": z
      .string()
      .describe("The ui label for the rslit_b2_left slit adder")
      .default("Right Pocket Slit: Brochure 6 3/8 Top Slit, Left"),
    /**The ui label for the rslit_b2_right slit adder*/
    "adder.rslit_b2_right.label": z
      .string()
      .describe("The ui label for the rslit_b2_right slit adder")
      .default("Right Pocket Slit: Brochure 6 3/8 Top Slit, Right"),
    /**The ui label for the rslit_b6_center slit adder*/
    "adder.rslit_b6_center.label": z
      .string()
      .describe("The ui label for the rslit_b6_center slit adder")
      .default("Right Pocket Slit: Brochure 4 3/8 Curved Up Slit, Centered"),
    /**The ui label for the rslit_b7_center slit adder*/
    "adder.rslit_b7_center.label": z
      .string()
      .describe("The ui label for the rslit_b7_center slit adder")
      .default("Right Pocket Slit: Brochure 6 3/8 Curved Up Slit, Centered"),
    /**The ui label for the rslit_b8_center slit adder*/
    "adder.rslit_b8_center.label": z
      .string()
      .describe("The ui label for the rslit_b8_center slit adder")
      .default("Right Pocket Slit: Brochure 4 3/8 Curved Down Slit, Centered"),
    /**The ui label for the rslit_c1_center slit adder*/
    "adder.rslit_c1_center.label": z
      .string()
      .describe("The ui label for the rslit_c1_center slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 4 Square Tabs, Centered",
      ),
    /**The ui label for the rslit_c1_left slit adder*/
    "adder.rslit_c1_left.label": z
      .string()
      .describe("The ui label for the rslit_c1_left slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 4 Square Tabs, Left",
      ),
    /**The ui label for the rslit_c1_right slit adder*/
    "adder.rslit_c1_right.label": z
      .string()
      .describe("The ui label for the rslit_c1_right slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 4 Square Tabs, Right",
      ),
    /**The ui label for the rslit_c1v_bot slit adder*/
    "adder.rslit_c1v_bot.label": z
      .string()
      .describe("The ui label for the rslit_c1v_bot slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 4 Square Tabs, Bottom",
      ),
    /**The ui label for the rslit_c1v_mid slit adder*/
    "adder.rslit_c1v_mid.label": z
      .string()
      .describe("The ui label for the rslit_c1v_mid slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 4 Square Tabs, Middle",
      ),
    /**The ui label for the rslit_c1v_top slit adder*/
    "adder.rslit_c1v_top.label": z
      .string()
      .describe("The ui label for the rslit_c1v_top slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 4 Square Tabs, Top",
      ),
    /**The ui label for the rslit_c2_center slit adder*/
    "adder.rslit_c2_center.label": z
      .string()
      .describe("The ui label for the rslit_c2_center slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 8 Square Corners, Centered",
      ),
    /**The ui label for the rslit_c2_left slit adder*/
    "adder.rslit_c2_left.label": z
      .string()
      .describe("The ui label for the rslit_c2_left slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 8 Square Corners, Left",
      ),
    /**The ui label for the rslit_c2_right slit adder*/
    "adder.rslit_c2_right.label": z
      .string()
      .describe("The ui label for the rslit_c2_right slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 8 Square Corners, Right",
      ),
    /**The ui label for the rslit_c3_center slit adder*/
    "adder.rslit_c3_center.label": z
      .string()
      .describe("The ui label for the rslit_c3_center slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 4 Half Moon Tabs, Centered",
      ),
    /**The ui label for the rslit_c3_left slit adder*/
    "adder.rslit_c3_left.label": z
      .string()
      .describe("The ui label for the rslit_c3_left slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 4 Half Moon Tabs, Left",
      ),
    /**The ui label for the rslit_c3_right slit adder*/
    "adder.rslit_c3_right.label": z
      .string()
      .describe("The ui label for the rslit_c3_right slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 4 Half Moon Tabs, Right",
      ),
    /**The ui label for the rslit_c4_center slit adder*/
    "adder.rslit_c4_center.label": z
      .string()
      .describe("The ui label for the rslit_c4_center slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 4 Quarter Moon Tabs, Centered",
      ),
    /**The ui label for the rslit_c4_left slit adder*/
    "adder.rslit_c4_left.label": z
      .string()
      .describe("The ui label for the rslit_c4_left slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 4 Quarter Moon Tabs, Left",
      ),
    /**The ui label for the rslit_c4_right slit adder*/
    "adder.rslit_c4_right.label": z
      .string()
      .describe("The ui label for the rslit_c4_right slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 4 Quarter Moon Tabs, Right",
      ),
    /**The ui label for the rslit_c5_center slit adder*/
    "adder.rslit_c5_center.label": z
      .string()
      .describe("The ui label for the rslit_c5_center slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Wide) Top Right, Centered",
      ),
    /**The ui label for the rslit_c5_left slit adder*/
    "adder.rslit_c5_left.label": z
      .string()
      .describe("The ui label for the rslit_c5_left slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Wide) Top Right, Left",
      ),
    /**The ui label for the rslit_c5_right slit adder*/
    "adder.rslit_c5_right.label": z
      .string()
      .describe("The ui label for the rslit_c5_right slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Wide) Top Right, Right",
      ),
    /**The ui label for the rslit_c6_center slit adder*/
    "adder.rslit_c6_center.label": z
      .string()
      .describe("The ui label for the rslit_c6_center slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Centered",
      ),
    /**The ui label for the rslit_c6_left slit adder*/
    "adder.rslit_c6_left.label": z
      .string()
      .describe("The ui label for the rslit_c6_left slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Left",
      ),
    /**The ui label for the rslit_c6_right slit adder*/
    "adder.rslit_c6_right.label": z
      .string()
      .describe("The ui label for the rslit_c6_right slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Right",
      ),
    /**The ui label for the rslit_c6v_bot slit adder*/
    "adder.rslit_c6v_bot.label": z
      .string()
      .describe("The ui label for the rslit_c6v_bot slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Bottom",
      ),
    /**The ui label for the rslit_c6v_mid slit adder*/
    "adder.rslit_c6v_mid.label": z
      .string()
      .describe("The ui label for the rslit_c6v_mid slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Middle",
      ),
    /**The ui label for the rslit_c6v_top slit adder*/
    "adder.rslit_c6v_top.label": z
      .string()
      .describe("The ui label for the rslit_c6v_top slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Wide) Top Right, Top",
      ),
    /**The ui label for the rslit_c7_center slit adder*/
    "adder.rslit_c7_center.label": z
      .string()
      .describe("The ui label for the rslit_c7_center slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Centered",
      ),
    /**The ui label for the rslit_c7_left slit adder*/
    "adder.rslit_c7_left.label": z
      .string()
      .describe("The ui label for the rslit_c7_left slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Left",
      ),
    /**The ui label for the rslit_c7_right slit adder*/
    "adder.rslit_c7_right.label": z
      .string()
      .describe("The ui label for the rslit_c7_right slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Right",
      ),
    /**The ui label for the rslit_c7v_bot slit adder*/
    "adder.rslit_c7v_bot.label": z
      .string()
      .describe("The ui label for the rslit_c7v_bot slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Bottom",
      ),
    /**The ui label for the rslit_c7v_mid slit adder*/
    "adder.rslit_c7v_mid.label": z
      .string()
      .describe("The ui label for the rslit_c7v_mid slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Middle",
      ),
    /**The ui label for the rslit_c7v_top slit adder*/
    "adder.rslit_c7v_top.label": z
      .string()
      .describe("The ui label for the rslit_c7v_top slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 2 Sets of 2 Corners (Tall) Top Right, Top",
      ),
    /**The ui label for the rslit_c8_center slit adder*/
    "adder.rslit_c8_center.label": z
      .string()
      .describe("The ui label for the rslit_c8_center slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Centered",
      ),
    /**The ui label for the rslit_c8_left slit adder*/
    "adder.rslit_c8_left.label": z
      .string()
      .describe("The ui label for the rslit_c8_left slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Left",
      ),
    /**The ui label for the rslit_c8_right slit adder*/
    "adder.rslit_c8_right.label": z
      .string()
      .describe("The ui label for the rslit_c8_right slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Right",
      ),
    /**The ui label for the rslit_c8v_bot slit adder*/
    "adder.rslit_c8v_bot.label": z
      .string()
      .describe("The ui label for the rslit_c8v_bot slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Bottom",
      ),
    /**The ui label for the rslit_c8v_mid slit adder*/
    "adder.rslit_c8v_mid.label": z
      .string()
      .describe("The ui label for the rslit_c8v_mid slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Middle",
      ),
    /**The ui label for the rslit_c8v_top slit adder*/
    "adder.rslit_c8v_top.label": z
      .string()
      .describe("The ui label for the rslit_c8v_top slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Top",
      ),
    /**The ui label for the rslit_c9v_bot slit adder*/
    "adder.rslit_c9v_bot.label": z
      .string()
      .describe("The ui label for the rslit_c9v_bot slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Bottom",
      ),
    /**The ui label for the rslit_c9v_mid slit adder*/
    "adder.rslit_c9v_mid.label": z
      .string()
      .describe("The ui label for the rslit_c9v_mid slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Middle",
      ),
    /**The ui label for the rslit_c9v_top slit adder*/
    "adder.rslit_c9v_top.label": z
      .string()
      .describe("The ui label for the rslit_c9v_top slit adder")
      .default(
        "Right Pocket Slit: Combination Business Card 3 Sets of 2 Corners (Tall) Top Right, Top",
      ),
    /**The ui label for the rslit_d1_center slit adder*/
    "adder.rslit_d1_center.label": z
      .string()
      .describe("The ui label for the rslit_d1_center slit adder")
      .default("Right Pocket Slit: CD 5 1/4 Top Slit, Centered"),
    /**The ui label for the rslit_d1_left slit adder*/
    "adder.rslit_d1_left.label": z
      .string()
      .describe("The ui label for the rslit_d1_left slit adder")
      .default("Right Pocket Slit: CD 5 1/4 Top Slit, Left"),
    /**The ui label for the rslit_d1_right slit adder*/
    "adder.rslit_d1_right.label": z
      .string()
      .describe("The ui label for the rslit_d1_right slit adder")
      .default("Right Pocket Slit: CD 5 1/4 Top Slit, Right"),
    /**The ui label for the rslit_d2_center slit adder*/
    "adder.rslit_d2_center.label": z
      .string()
      .describe("The ui label for the rslit_d2_center slit adder")
      .default("Right Pocket Slit: CD 5 1/4 Curved Down Slit, Centered"),
    /**The ui label for the rslit_d2_left slit adder*/
    "adder.rslit_d2_left.label": z
      .string()
      .describe("The ui label for the rslit_d2_left slit adder")
      .default("Right Pocket Slit: CD 5 1/4 Curved Down Slit, Left"),
    /**The ui label for the rslit_d2_right slit adder*/
    "adder.rslit_d2_right.label": z
      .string()
      .describe("The ui label for the rslit_d2_right slit adder")
      .default("Right Pocket Slit: CD 5 1/4 Curved Down Slit, Right"),
    /**The ui label for the rslit_d3_center slit adder*/
    "adder.rslit_d3_center.label": z
      .string()
      .describe("The ui label for the rslit_d3_center slit adder")
      .default("Right Pocket Slit: CD 5 1/4 Curved Up Slit, Centered"),
    /**The ui label for the rslit_d3_left slit adder*/
    "adder.rslit_d3_left.label": z
      .string()
      .describe("The ui label for the rslit_d3_left slit adder")
      .default("Right Pocket Slit: CD 5 1/4 Curved Up Slit, Left"),
    /**The ui label for the rslit_d3_right slit adder*/
    "adder.rslit_d3_right.label": z
      .string()
      .describe("The ui label for the rslit_d3_right slit adder")
      .default("Right Pocket Slit: CD 5 1/4 Curved Up Slit, Right"),
    /**The ui label for the rslit_d4_center slit adder*/
    "adder.rslit_d4_center.label": z
      .string()
      .describe("The ui label for the rslit_d4_center slit adder")
      .default("Right Pocket Slit: CD 5 1/4 Center Slit, Centered"),
    /**The ui label for the rslit_d4_left slit adder*/
    "adder.rslit_d4_left.label": z
      .string()
      .describe("The ui label for the rslit_d4_left slit adder")
      .default("Right Pocket Slit: CD 5 1/4 Center Slit, Left"),
    /**The ui label for the rslit_d4_right slit adder*/
    "adder.rslit_d4_right.label": z
      .string()
      .describe("The ui label for the rslit_d4_right slit adder")
      .default("Right Pocket Slit: CD 5 1/4 Center Slit, Right"),
    /**The ui label for the rslit_d5_center slit adder*/
    "adder.rslit_d5_center.label": z
      .string()
      .describe("The ui label for the rslit_d5_center slit adder")
      .default("Right Pocket Slit: CD 2 1/4 7 Variable Center Slit, Centered"),
    /**The ui label for the rslit_d5_left slit adder*/
    "adder.rslit_d5_left.label": z
      .string()
      .describe("The ui label for the rslit_d5_left slit adder")
      .default("Right Pocket Slit: CD 2 1/4 7 Variable Center Slit, Left"),
    /**The ui label for the rslit_d5_right slit adder*/
    "adder.rslit_d5_right.label": z
      .string()
      .describe("The ui label for the rslit_d5_right slit adder")
      .default("Right Pocket Slit: CD 2 1/4 7 Variable Center Slit, Right"),
    /**The ui label for the rslit_f1_center slit adder*/
    "adder.rslit_f1_center.label": z
      .string()
      .describe("The ui label for the rslit_f1_center slit adder")
      .default("Right Pocket Slit: Flash Drive 1/8 1/4 Thick, Centered"),
    /**The ui label for the rslit_f1_left slit adder*/
    "adder.rslit_f1_left.label": z
      .string()
      .describe("The ui label for the rslit_f1_left slit adder")
      .default("Right Pocket Slit: Flash Drive 1/8 1/4 Thick, Left"),
    /**The ui label for the rslit_f2_center slit adder*/
    "adder.rslit_f2_center.label": z
      .string()
      .describe("The ui label for the rslit_f2_center slit adder")
      .default("Right Pocket Slit: Flash Drive 5/16 1/2 Thick, Centered"),
    /**The ui label for the rslit_f2_left slit adder*/
    "adder.rslit_f2_left.label": z
      .string()
      .describe("The ui label for the rslit_f2_left slit adder")
      .default("Right Pocket Slit: Flash Drive 5/16 1/2 Thick, Left"),
    /**The ui label for the rslit_f2_right slit adder*/
    "adder.rslit_f2_right.label": z
      .string()
      .describe("The ui label for the rslit_f2_right slit adder")
      .default("Right Pocket Slit: Flash Drive 5/16 1/2 Thick, Right"),
    /**The ui label for the rslit_h1_center slit adder*/
    "adder.rslit_h1_center.label": z
      .string()
      .describe("The ui label for the rslit_h1_center slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 4 Corners, Centered",
      ),
    /**The ui label for the rslit_h1_left slit adder*/
    "adder.rslit_h1_left.label": z
      .string()
      .describe("The ui label for the rslit_h1_left slit adder")
      .default("Right Pocket Slit: Horizontal Business Card 4 Corners, Left"),
    /**The ui label for the rslit_h1_right slit adder*/
    "adder.rslit_h1_right.label": z
      .string()
      .describe("The ui label for the rslit_h1_right slit adder")
      .default("Right Pocket Slit: Horizontal Business Card 4 Corners, Right"),
    /**The ui label for the rslit_h1v_bot slit adder*/
    "adder.rslit_h1v_bot.label": z
      .string()
      .describe("The ui label for the rslit_h1v_bot slit adder")
      .default("Right Pocket Slit: Horizontal Business Card 4 Corners, Bottom"),
    /**The ui label for the rslit_h1v_mid slit adder*/
    "adder.rslit_h1v_mid.label": z
      .string()
      .describe("The ui label for the rslit_h1v_mid slit adder")
      .default("Right Pocket Slit: Horizontal Business Card 4 Corners, Middle"),
    /**The ui label for the rslit_h1v_top slit adder*/
    "adder.rslit_h1v_top.label": z
      .string()
      .describe("The ui label for the rslit_h1v_top slit adder")
      .default("Right Pocket Slit: Horizontal Business Card 4 Corners, Top"),
    /**The ui label for the rslit_h2_center slit adder*/
    "adder.rslit_h2_center.label": z
      .string()
      .describe("The ui label for the rslit_h2_center slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Corners Top Right, Centered",
      ),
    /**The ui label for the rslit_h2_left slit adder*/
    "adder.rslit_h2_left.label": z
      .string()
      .describe("The ui label for the rslit_h2_left slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Corners Top Right, Left",
      ),
    /**The ui label for the rslit_h2_right slit adder*/
    "adder.rslit_h2_right.label": z
      .string()
      .describe("The ui label for the rslit_h2_right slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Corners Top Right, Right",
      ),
    /**The ui label for the rslit_h2v_bot slit adder*/
    "adder.rslit_h2v_bot.label": z
      .string()
      .describe("The ui label for the rslit_h2v_bot slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Corners Top Right, Bottom",
      ),
    /**The ui label for the rslit_h2v_mid slit adder*/
    "adder.rslit_h2v_mid.label": z
      .string()
      .describe("The ui label for the rslit_h2v_mid slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Corners Top Right, Middle",
      ),
    /**The ui label for the rslit_h2v_top slit adder*/
    "adder.rslit_h2v_top.label": z
      .string()
      .describe("The ui label for the rslit_h2v_top slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Corners Top Right, Top",
      ),
    /**The ui label for the rslit_h3_center slit adder*/
    "adder.rslit_h3_center.label": z
      .string()
      .describe("The ui label for the rslit_h3_center slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Corners Top Left, Centered",
      ),
    /**The ui label for the rslit_h3_left slit adder*/
    "adder.rslit_h3_left.label": z
      .string()
      .describe("The ui label for the rslit_h3_left slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Corners Top Left, Left",
      ),
    /**The ui label for the rslit_h3_right slit adder*/
    "adder.rslit_h3_right.label": z
      .string()
      .describe("The ui label for the rslit_h3_right slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Corners Top Left, Right",
      ),
    /**The ui label for the rslit_h3v_bot slit adder*/
    "adder.rslit_h3v_bot.label": z
      .string()
      .describe("The ui label for the rslit_h3v_bot slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Corners Top Left, Bottom",
      ),
    /**The ui label for the rslit_h3v_mid slit adder*/
    "adder.rslit_h3v_mid.label": z
      .string()
      .describe("The ui label for the rslit_h3v_mid slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Corners Top Left, Middle",
      ),
    /**The ui label for the rslit_h3v_top slit adder*/
    "adder.rslit_h3v_top.label": z
      .string()
      .describe("The ui label for the rslit_h3v_top slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Corners Top Left, Top",
      ),
    /**The ui label for the rslit_h4_center slit adder*/
    "adder.rslit_h4_center.label": z
      .string()
      .describe("The ui label for the rslit_h4_center slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card Square Tabs, Centered",
      ),
    /**The ui label for the rslit_h4_left slit adder*/
    "adder.rslit_h4_left.label": z
      .string()
      .describe("The ui label for the rslit_h4_left slit adder")
      .default("Right Pocket Slit: Horizontal Business Card Square Tabs, Left"),
    /**The ui label for the rslit_h4_right slit adder*/
    "adder.rslit_h4_right.label": z
      .string()
      .describe("The ui label for the rslit_h4_right slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card Square Tabs, Right",
      ),
    /**The ui label for the rslit_h4v_bot slit adder*/
    "adder.rslit_h4v_bot.label": z
      .string()
      .describe("The ui label for the rslit_h4v_bot slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card Square Tabs, Bottom",
      ),
    /**The ui label for the rslit_h4v_mid slit adder*/
    "adder.rslit_h4v_mid.label": z
      .string()
      .describe("The ui label for the rslit_h4v_mid slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card Square Tabs, Middle",
      ),
    /**The ui label for the rslit_h4v_top slit adder*/
    "adder.rslit_h4v_top.label": z
      .string()
      .describe("The ui label for the rslit_h4v_top slit adder")
      .default("Right Pocket Slit: Horizontal Business Card Square Tabs, Top"),
    /**The ui label for the rslit_h5_center slit adder*/
    "adder.rslit_h5_center.label": z
      .string()
      .describe("The ui label for the rslit_h5_center slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Square Corners Top Right, Centered",
      ),
    /**The ui label for the rslit_h5_left slit adder*/
    "adder.rslit_h5_left.label": z
      .string()
      .describe("The ui label for the rslit_h5_left slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Square Corners Top Right, Left",
      ),
    /**The ui label for the rslit_h5_right slit adder*/
    "adder.rslit_h5_right.label": z
      .string()
      .describe("The ui label for the rslit_h5_right slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Square Corners Top Right, Right",
      ),
    /**The ui label for the rslit_h6_center slit adder*/
    "adder.rslit_h6_center.label": z
      .string()
      .describe("The ui label for the rslit_h6_center slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Square Corners Top Left, Centered",
      ),
    /**The ui label for the rslit_h6_left slit adder*/
    "adder.rslit_h6_left.label": z
      .string()
      .describe("The ui label for the rslit_h6_left slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Square Corners Top Left, Left",
      ),
    /**The ui label for the rslit_h6_right slit adder*/
    "adder.rslit_h6_right.label": z
      .string()
      .describe("The ui label for the rslit_h6_right slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 2 Square Corners Top Left, Right",
      ),
    /**The ui label for the rslit_h7_center slit adder*/
    "adder.rslit_h7_center.label": z
      .string()
      .describe("The ui label for the rslit_h7_center slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 4 Square Corners, Centered",
      ),
    /**The ui label for the rslit_h7_left slit adder*/
    "adder.rslit_h7_left.label": z
      .string()
      .describe("The ui label for the rslit_h7_left slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 4 Square Corners, Left",
      ),
    /**The ui label for the rslit_h7_right slit adder*/
    "adder.rslit_h7_right.label": z
      .string()
      .describe("The ui label for the rslit_h7_right slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card 4 Square Corners, Right",
      ),
    /**The ui label for the rslit_h8_center slit adder*/
    "adder.rslit_h8_center.label": z
      .string()
      .describe("The ui label for the rslit_h8_center slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card Half Moon Tabs, Centered",
      ),
    /**The ui label for the rslit_h8_left slit adder*/
    "adder.rslit_h8_left.label": z
      .string()
      .describe("The ui label for the rslit_h8_left slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card Half Moon Tabs, Left",
      ),
    /**The ui label for the rslit_h8_right slit adder*/
    "adder.rslit_h8_right.label": z
      .string()
      .describe("The ui label for the rslit_h8_right slit adder")
      .default(
        "Right Pocket Slit: Horizontal Business Card Half Moon Tabs, Right",
      ),
    /**The ui label for the rslit_k1 slit adder*/
    "adder.rslit_k1.label": z
      .string()
      .describe("The ui label for the rslit_k1 slit adder")
      .default("Right Pocket Slit: Key Card Slit"),
    /**The ui label for the rslit_l1_right slit adder*/
    "adder.rslit_l1_right.label": z
      .string()
      .describe("The ui label for the rslit_l1_right slit adder")
      .default("Right Pocket Slit: Flash Drive 1/8 1/4 Thick, Right"),
    /**The ui label for the rslit_none slit adder*/
    "adder.rslit_none.label": z
      .string()
      .describe("The ui label for the rslit_none slit adder")
      .default("Right Pocket Slit: None"),
    /**The ui label for the rslit_v1_center slit adder*/
    "adder.rslit_v1_center.label": z
      .string()
      .describe("The ui label for the rslit_v1_center slit adder")
      .default("Right Pocket Slit: Vertical Business Card 4 Corners, Centered"),
    /**The ui label for the rslit_v1_left slit adder*/
    "adder.rslit_v1_left.label": z
      .string()
      .describe("The ui label for the rslit_v1_left slit adder")
      .default("Right Pocket Slit: Vertical Business Card 4 Corners, Left"),
    /**The ui label for the rslit_v1_right slit adder*/
    "adder.rslit_v1_right.label": z
      .string()
      .describe("The ui label for the rslit_v1_right slit adder")
      .default("Right Pocket Slit: Vertical Business Card 4 Corners, Right"),
    /**The ui label for the rslit_v1v_bot slit adder*/
    "adder.rslit_v1v_bot.label": z
      .string()
      .describe("The ui label for the rslit_v1v_bot slit adder")
      .default("Right Pocket Slit: Vertical Business Card 4 Corners, Bottom"),
    /**The ui label for the rslit_v1v_mid slit adder*/
    "adder.rslit_v1v_mid.label": z
      .string()
      .describe("The ui label for the rslit_v1v_mid slit adder")
      .default("Right Pocket Slit: Vertical Business Card 4 Corners, Middle"),
    /**The ui label for the rslit_v1v_top slit adder*/
    "adder.rslit_v1v_top.label": z
      .string()
      .describe("The ui label for the rslit_v1v_top slit adder")
      .default("Right Pocket Slit: Vertical Business Card 4 Corners, Top"),
    /**The ui label for the rslit_v2_center slit adder*/
    "adder.rslit_v2_center.label": z
      .string()
      .describe("The ui label for the rslit_v2_center slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Corners Top Right, Centered",
      ),
    /**The ui label for the rslit_v2_left slit adder*/
    "adder.rslit_v2_left.label": z
      .string()
      .describe("The ui label for the rslit_v2_left slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Corners Top Right, Left",
      ),
    /**The ui label for the rslit_v2_right slit adder*/
    "adder.rslit_v2_right.label": z
      .string()
      .describe("The ui label for the rslit_v2_right slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Corners Top Right, Right",
      ),
    /**The ui label for the rslit_v2v_bot slit adder*/
    "adder.rslit_v2v_bot.label": z
      .string()
      .describe("The ui label for the rslit_v2v_bot slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Corners Top Right, Bottom",
      ),
    /**The ui label for the rslit_v2v_mid slit adder*/
    "adder.rslit_v2v_mid.label": z
      .string()
      .describe("The ui label for the rslit_v2v_mid slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Corners Top Right, Middle",
      ),
    /**The ui label for the rslit_v2v_top slit adder*/
    "adder.rslit_v2v_top.label": z
      .string()
      .describe("The ui label for the rslit_v2v_top slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Corners Top Right, Top",
      ),
    /**The ui label for the rslit_v3_center slit adder*/
    "adder.rslit_v3_center.label": z
      .string()
      .describe("The ui label for the rslit_v3_center slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Corners Top Left, Centered",
      ),
    /**The ui label for the rslit_v3_left slit adder*/
    "adder.rslit_v3_left.label": z
      .string()
      .describe("The ui label for the rslit_v3_left slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Corners Top Left, Left",
      ),
    /**The ui label for the rslit_v3_right slit adder*/
    "adder.rslit_v3_right.label": z
      .string()
      .describe("The ui label for the rslit_v3_right slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Corners Top Left, Right",
      ),
    /**The ui label for the rslit_v3v_bot slit adder*/
    "adder.rslit_v3v_bot.label": z
      .string()
      .describe("The ui label for the rslit_v3v_bot slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Corners Top Left, Bottom",
      ),
    /**The ui label for the rslit_v3v_mid slit adder*/
    "adder.rslit_v3v_mid.label": z
      .string()
      .describe("The ui label for the rslit_v3v_mid slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Corners Top Left, Middle",
      ),
    /**The ui label for the rslit_v3v_top slit adder*/
    "adder.rslit_v3v_top.label": z
      .string()
      .describe("The ui label for the rslit_v3v_top slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Corners Top Left, Top",
      ),
    /**The ui label for the rslit_v4_center slit adder*/
    "adder.rslit_v4_center.label": z
      .string()
      .describe("The ui label for the rslit_v4_center slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Square Tabs, Centered",
      ),
    /**The ui label for the rslit_v4_left slit adder*/
    "adder.rslit_v4_left.label": z
      .string()
      .describe("The ui label for the rslit_v4_left slit adder")
      .default("Right Pocket Slit: Vertical Business Card 2 Square Tabs, Left"),
    /**The ui label for the rslit_v4_right slit adder*/
    "adder.rslit_v4_right.label": z
      .string()
      .describe("The ui label for the rslit_v4_right slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Square Tabs, Right",
      ),
    /**The ui label for the rslit_v4v_bot slit adder*/
    "adder.rslit_v4v_bot.label": z
      .string()
      .describe("The ui label for the rslit_v4v_bot slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Square Tabs, Bottom",
      ),
    /**The ui label for the rslit_v4v_mid slit adder*/
    "adder.rslit_v4v_mid.label": z
      .string()
      .describe("The ui label for the rslit_v4v_mid slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Square Tabs, Middle",
      ),
    /**The ui label for the rslit_v4v_top slit adder*/
    "adder.rslit_v4v_top.label": z
      .string()
      .describe("The ui label for the rslit_v4v_top slit adder")
      .default("Right Pocket Slit: Vertical Business Card 2 Square Tabs, Top"),
    /**The ui label for the rslit_v5_center slit adder*/
    "adder.rslit_v5_center.label": z
      .string()
      .describe("The ui label for the rslit_v5_center slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Square Corners Top Right, Centered",
      ),
    /**The ui label for the rslit_v5_left slit adder*/
    "adder.rslit_v5_left.label": z
      .string()
      .describe("The ui label for the rslit_v5_left slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Square Corners Top Right, Left",
      ),
    /**The ui label for the rslit_v5_right slit adder*/
    "adder.rslit_v5_right.label": z
      .string()
      .describe("The ui label for the rslit_v5_right slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Square Corners Top Right, Right",
      ),
    /**The ui label for the rslit_v6_center slit adder*/
    "adder.rslit_v6_center.label": z
      .string()
      .describe("The ui label for the rslit_v6_center slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Square Corners Top Left, Centered",
      ),
    /**The ui label for the rslit_v6_left slit adder*/
    "adder.rslit_v6_left.label": z
      .string()
      .describe("The ui label for the rslit_v6_left slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Square Corners Top Left, Left",
      ),
    /**The ui label for the rslit_v6_right slit adder*/
    "adder.rslit_v6_right.label": z
      .string()
      .describe("The ui label for the rslit_v6_right slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 2 Square Corners Top Left, Right",
      ),
    /**The ui label for the rslit_v7_center slit adder*/
    "adder.rslit_v7_center.label": z
      .string()
      .describe("The ui label for the rslit_v7_center slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 4 Square Corners, Centered",
      ),
    /**The ui label for the rslit_v7_left slit adder*/
    "adder.rslit_v7_left.label": z
      .string()
      .describe("The ui label for the rslit_v7_left slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 4 Square Corners, Left",
      ),
    /**The ui label for the rslit_v7_right slit adder*/
    "adder.rslit_v7_right.label": z
      .string()
      .describe("The ui label for the rslit_v7_right slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card 4 Square Corners, Right",
      ),
    /**The ui label for the rslit_v8_center slit adder*/
    "adder.rslit_v8_center.label": z
      .string()
      .describe("The ui label for the rslit_v8_center slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card Half Moon Tabs, Centered",
      ),
    /**The ui label for the rslit_v8_left slit adder*/
    "adder.rslit_v8_left.label": z
      .string()
      .describe("The ui label for the rslit_v8_left slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card Half Moon Tabs, Left",
      ),
    /**The ui label for the rslit_v8_right slit adder*/
    "adder.rslit_v8_right.label": z
      .string()
      .describe("The ui label for the rslit_v8_right slit adder")
      .default(
        "Right Pocket Slit: Vertical Business Card Half Moon Tabs, Right",
      ),
    /**Error message when quantity is below the minimum order quantity.*/
    "error.ProductQuantityLessThanMinimumOrderQuantity": z
      .string()
      .describe(
        "Error message when quantity is below the minimum order quantity.",
      )
      .default(
        "The quantity is below the minimum order quantity for this product.",
      ),
    /**Error message when quantity is not a valid increment.*/
    "error.ProductQuantityIncrementNotValid": z
      .string()
      .describe("Error message when quantity is not a valid increment.")
      .default("The quantity is not a valid increment for this product."),
    /**Error message when variable address data is used in more than one frame.*/
    "error.VariableAddressMultipleFrames": z
      .string()
      .describe(
        "Error message when variable address data is used in more than one frame.",
      )
      .default("Variable address data can only be used in a single frame."),
    /**Error message when the number of variable addresses exceeds the order quantity.*/
    "error.VariableAddressCountExceedsOrderQuantity": z
      .string()
      .describe(
        "Error message when the number of variable addresses exceeds the order quantity.",
      )
      .default("The number of variable addresses exceeds the order quantity."),
    /**Error message when too many foil colors are used.*/
    "error.ExceedsMaxFoilColorAllowance": z
      .string()
      .describe("Error message when too many foil colors are used.")
      .default("Too many foil colors have been used."),
    /**Error message when foil coverage area exceeds the maximum.*/
    "error.ExceedsMaxFoilCoverageAllowance": z
      .string()
      .describe("Error message when foil coverage area exceeds the maximum.")
      .default("Foil coverage area exceeds the maximum allowed."),
    /**Error message when too many foil stamp elements are used.*/
    "error.ExceedsMaxFoilStampAllowance": z
      .string()
      .describe("Error message when too many foil stamp elements are used.")
      .default("Too many foil stamp elements have been used."),
    /**Error message when foil and ink are combined on a product that does not allow it.*/
    "error.FoilAndInkNotAllowed": z
      .string()
      .describe(
        "Error message when foil and ink are combined on a product that does not allow it.",
      )
      .default("Foil and ink cannot be combined on this product."),
    /**Error message when too many ink colors are used.*/
    "error.ExceedsMaxInkColorAllowance": z
      .string()
      .describe("Error message when too many ink colors are used.")
      .default("Too many ink colors have been used for offset printing."),
    /**Error message when ink coverage area exceeds the maximum.*/
    "error.ExceedsMaxInkCoverageAllowance": z
      .string()
      .describe("Error message when ink coverage area exceeds the maximum.")
      .default("Ink coverage area exceeds the maximum allowed."),
    /**Error message when too many ink stamp elements are used.*/
    "error.ExceedsMaxInkStampAllowance": z
      .string()
      .describe("Error message when too many ink stamp elements are used.")
      .default("Too many ink stamp elements have been used."),
    /**Error message when the selected ink colors cannot be combined.*/
    "error.InvalidInkCombination": z
      .string()
      .describe(
        "Error message when the selected ink colors cannot be combined.",
      )
      .default("The selected ink colors cannot be combined."),
    /**Error message when metallic ink colors cannot be digitally printed.*/
    "error.CannotDigitallyPrintMetallicInk": z
      .string()
      .describe(
        "Error message when metallic ink colors cannot be digitally printed.",
      )
      .default("Metallic ink colors cannot be digitally printed."),
    /**Error message when one or more print options are not supported by any vendor.*/
    "error.VendorDoesNotSupportAdders": z
      .string()
      .describe(
        "Error message when one or more print options are not supported by any vendor.",
      )
      .default("One or more print options are not supported by any vendor."),
    /**Error message when white ink is combined with other print processes.*/
    "error.WhiteInkAndOtherProcessNotAllowed": z
      .string()
      .describe(
        "Error message when white ink is combined with other print processes.",
      )
      .default("White ink cannot be combined with other print processes."),
    /**Error when offset color like a Pantone attempts to print digitally*/
    "error.SelectedColorRequiresOffsetPrinting": z
      .string()
      .describe(
        "Error when offset color like a Pantone attempts to print digitally",
      )
      .default("You have a color that requires offset printing."),
    /**Error message when a digital only custom color attempts to print offset*/
    "error.SelectedColorRequiresDigitalPrinting": z
      .string()
      .describe(
        "Error message when a digital only custom color attempts to print offset",
      )
      .default("You have a color that requires digital printing."),
    /**The icon for the template editor panels tool*/
    "tool.panels.icon": z
      .string()
      .describe("The icon for the template editor panels tool")
      .default("crop_rotate"),
    /**The label for the template editor panels tool*/
    "tool.panels.label": z
      .string()
      .describe("The label for the template editor panels tool")
      .default("Panels"),
    /**The icon for the template editor fold tool*/
    "tool.fold.icon": z
      .string()
      .describe("The icon for the template editor fold tool")
      .default("flip"),
    /**The label for the template editor fold tool*/
    "tool.fold.label": z
      .string()
      .describe("The label for the template editor fold tool")
      .default("Fold"),
    /**The icon for the template editor anchors tool*/
    "tool.anchors.icon": z
      .string()
      .describe("The icon for the template editor anchors tool")
      .default("anchor"),
    /**The label for the template editor anchors tool*/
    "tool.anchors.label": z
      .string()
      .describe("The label for the template editor anchors tool")
      .default("Anchors"),
    /**The icon for the template editor zones tool*/
    "tool.zones.icon": z
      .string()
      .describe("The icon for the template editor zones tool")
      .default("select_all"),
    /**The label for the template editor zones tool*/
    "tool.zones.label": z
      .string()
      .describe("The label for the template editor zones tool")
      .default("Zones"),
    /**The template editors say how many edits are waiting to be published, for exactly one. Can utilize $count*/
    "editor.common.pending.one": z
      .string()
      .describe(
        "The template editors say how many edits are waiting to be published, for exactly one. Can utilize $count",
      )
      .default("$count unsaved change."),
    /**The template editors say how many edits are waiting to be published. Can utilize $count*/
    "editor.common.pending.other": z
      .string()
      .describe(
        "The template editors say how many edits are waiting to be published. Can utilize $count",
      )
      .default("$count unsaved changes."),
    /**Shown after the unsaved change count in the template editors*/
    "editor.common.pending.hint": z
      .string()
      .describe("Shown after the unsaved change count in the template editors")
      .default("Publish a new version to keep them."),
    /**The button that throws away a template editor's unsaved changes*/
    "editor.common.pending.discard": z
      .string()
      .describe(
        "The button that throws away a template editor's unsaved changes",
      )
      .default("Discard"),
    /**The button that backs out of a template editor confirmation*/
    "editor.common.confirm.cancel": z
      .string()
      .describe("The button that backs out of a template editor confirmation")
      .default("Cancel"),
    /**The button that confirms removing something in a template editor*/
    "editor.common.confirm.remove": z
      .string()
      .describe(
        "The button that confirms removing something in a template editor",
      )
      .default("Remove"),
    /**Shown in the panels tool when the design has nothing to map*/
    "editor.panels.unavailable": z
      .string()
      .describe("Shown in the panels tool when the design has nothing to map")
      .default("This design has no panels to map."),
    /**The panels tool's instructions before a panel is picked*/
    "editor.panels.hint.pick": z
      .string()
      .describe("The panels tool's instructions before a panel is picked")
      .default(
        "Click a panel on a folded view to fix how it sits there. The F and arrow on each panel show which way up its art prints.",
      ),
    /**Shown when a panel is picked on the flat sheet instead of a folded view*/
    "editor.panels.hint.flat": z
      .string()
      .describe(
        "Shown when a panel is picked on the flat sheet instead of a folded view",
      )
      .default(
        "That's the flat sheet, where panels print. Switch to a folded view and click the panel there.",
      ),
    /**How a panel's art reads in this view, when it reads upright*/
    "editor.panels.reading.upright": z
      .string()
      .describe("How a panel's art reads in this view, when it reads upright")
      .default("Art upright on the flat sheet shows upright here."),
    /**How a panel's art reads in this view, when it is turned a quarter right*/
    "editor.panels.reading.turnedRight": z
      .string()
      .describe(
        "How a panel's art reads in this view, when it is turned a quarter right",
      )
      .default(
        "Art upright on the flat sheet shows turned a quarter right here.",
      ),
    /**How a panel's art reads in this view, when it is upside down*/
    "editor.panels.reading.upsideDown": z
      .string()
      .describe("How a panel's art reads in this view, when it is upside down")
      .default(
        "Art upright on the flat sheet shows upside down here. Normal for a pocket or flap that folds up.",
      ),
    /**How a panel's art reads in this view, when it is turned a quarter left*/
    "editor.panels.reading.turnedLeft": z
      .string()
      .describe(
        "How a panel's art reads in this view, when it is turned a quarter left",
      )
      .default(
        "Art upright on the flat sheet shows turned a quarter left here.",
      ),
    /**How a panel's art reads in this view, when it is mirrored, which is always a mistake*/
    "editor.panels.reading.mirrored": z
      .string()
      .describe(
        "How a panel's art reads in this view, when it is mirrored, which is always a mistake",
      )
      .default(
        "Mirrored. No fold can show printed art backwards, so this panel is wrong. Flip it back.",
      ),
    /**The badge on a panel that has an unsaved change*/
    "editor.panels.panel.changed": z
      .string()
      .describe("The badge on a panel that has an unsaved change")
      .default("Changed"),
    /**Turns the picked panel a quarter left*/
    "editor.panels.action.turnLeft": z
      .string()
      .describe("Turns the picked panel a quarter left")
      .default("Turn left"),
    /**Turns the picked panel a quarter right*/
    "editor.panels.action.turnRight": z
      .string()
      .describe("Turns the picked panel a quarter right")
      .default("Turn right"),
    /**Flips the picked panel left to right*/
    "editor.panels.action.flipLeftRight": z
      .string()
      .describe("Flips the picked panel left to right")
      .default("Flip ↔"),
    /**Flips the picked panel top to bottom*/
    "editor.panels.action.flipUpDown": z
      .string()
      .describe("Flips the picked panel top to bottom")
      .default("Flip ↕"),
    /**Undoes every change to the picked panel*/
    "editor.panels.action.putBack": z
      .string()
      .describe("Undoes every change to the picked panel")
      .default("Put back"),
    /**Closes the picked panel's card. Changes stay pending*/
    "editor.panels.action.close": z
      .string()
      .describe("Closes the picked panel's card. Changes stay pending")
      .default("Close"),
    /**Moves the picked panel up by one step*/
    "editor.panels.nudge.up": z
      .string()
      .describe("Moves the picked panel up by one step")
      .default("Move up"),
    /**Moves the picked panel down by one step*/
    "editor.panels.nudge.down": z
      .string()
      .describe("Moves the picked panel down by one step")
      .default("Move down"),
    /**Moves the picked panel left by one step*/
    "editor.panels.nudge.left": z
      .string()
      .describe("Moves the picked panel left by one step")
      .default("Move left"),
    /**Moves the picked panel right by one step*/
    "editor.panels.nudge.right": z
      .string()
      .describe("Moves the picked panel right by one step")
      .default("Move right"),
    /**The label for how far one move goes*/
    "editor.panels.nudge.step": z
      .string()
      .describe("The label for how far one move goes")
      .default("Step"),
    /**The toggle for the picked panel's placement as a list of steps*/
    "editor.panels.steps.title": z
      .string()
      .describe(
        "The toggle for the picked panel's placement as a list of steps",
      )
      .default("Exact steps"),
    /**Explains the exact steps list*/
    "editor.panels.steps.description": z
      .string()
      .describe("Explains the exact steps list")
      .default(
        "The panel's placement as steps from the flat sheet into this view, applied top to bottom, then the move.",
      ),
    /**A step that flips the panel left to right across a line*/
    "editor.panels.steps.flipAcross": z
      .string()
      .describe("A step that flips the panel left to right across a line")
      .default("Flip left to right at x"),
    /**A step that flips the panel top to bottom across a line*/
    "editor.panels.steps.flipDown": z
      .string()
      .describe("A step that flips the panel top to bottom across a line")
      .default("Flip top to bottom at y"),
    /**A step that turns the panel by some degrees*/
    "editor.panels.steps.turn": z
      .string()
      .describe("A step that turns the panel by some degrees")
      .default("Turn"),
    /**A step, or the button that adds one, that folds the panel across a crease. Can utilize $faces and $direction*/
    "editor.panels.steps.fold": z
      .string()
      .describe(
        "A step, or the button that adds one, that folds the panel across a crease. Can utilize $faces and $direction",
      )
      .default("Fold across $faces ($direction)"),
    /**The label for the panel's final move*/
    "editor.panels.steps.move": z
      .string()
      .describe("The label for the panel's final move")
      .default("Move"),
    /**The unit the panel's move is in*/
    "editor.panels.steps.unit": z
      .string()
      .describe("The unit the panel's move is in")
      .default("in"),
    /**Moves a step up the list*/
    "editor.panels.steps.moveUp": z
      .string()
      .describe("Moves a step up the list")
      .default("Move this step earlier"),
    /**Moves a step down the list*/
    "editor.panels.steps.moveDown": z
      .string()
      .describe("Moves a step down the list")
      .default("Move this step later"),
    /**Removes a step from the list*/
    "editor.panels.steps.remove": z
      .string()
      .describe("Removes a step from the list")
      .default("Remove this step"),
    /**The heading over the list of panels with unsaved changes*/
    "editor.panels.changed.title": z
      .string()
      .describe("The heading over the list of panels with unsaved changes")
      .default("Changed panels"),
    /**Which view a changed panel is on. Can utilize $view*/
    "editor.panels.changed.on": z
      .string()
      .describe("Which view a changed panel is on. Can utilize $view")
      .default("on $view"),
    /**The accessible name of the button that undoes one changed panel. Can utilize $panel and $view*/
    "editor.panels.changed.putBack": z
      .string()
      .describe(
        "The accessible name of the button that undoes one changed panel. Can utilize $panel and $view",
      )
      .default("Put back $panel on $view"),
    /**Points at the fold preview for checking changed panels*/
    "editor.panels.changed.preview": z
      .string()
      .describe("Points at the fold preview for checking changed panels")
      .default(
        "The fold preview under the designer shows every view with these changes.",
      ),
    /**Shown in the fold tool when the design has no fold*/
    "editor.fold.unavailable": z
      .string()
      .describe("Shown in the fold tool when the design has no fold")
      .default("This design has no fold to edit."),
    /**The fold tool's instructions*/
    "editor.fold.intro": z
      .string()
      .describe("The fold tool's instructions")
      .default(
        "Name the faces, set the creases and the fixed face, choose what each view shows, then re-fold to see the views redraw.",
      ),
    /**The heading over the template's faces*/
    "editor.fold.section.faces": z
      .string()
      .describe("The heading over the template's faces")
      .default("Faces"),
    /**Explains the faces list*/
    "editor.fold.faces.help": z
      .string()
      .describe("Explains the faces list")
      .default(
        "Click a face to see it on the canvas. Its name is what designs, previews and the vendor file call it; its kind says what it does.",
      ),
    /**Selects a face so it is outlined on the canvas*/
    "editor.fold.face.show": z
      .string()
      .describe("Selects a face so it is outlined on the canvas")
      .default("Show this face on the canvas"),
    /**Clears the selected face*/
    "editor.fold.face.hide": z
      .string()
      .describe("Clears the selected face")
      .default("Stop showing this face on the canvas"),
    /**Explains the icon on a designable face*/
    "editor.fold.face.designable": z
      .string()
      .describe("Explains the icon on a designable face")
      .default("Customers design on this face"),
    /**Explains the icon on a face customers never design on*/
    "editor.fold.face.notDesignableHelp": z
      .string()
      .describe("Explains the icon on a face customers never design on")
      .default("Not designable: a glue flap or a fold-in"),
    /**The note beside a face customers never design on*/
    "editor.fold.face.notDesignable": z
      .string()
      .describe("The note beside a face customers never design on")
      .default("not designable"),
    /**The label for a face's name*/
    "editor.fold.face.name": z
      .string()
      .describe("The label for a face's name")
      .default("Name"),
    /**The accessible name of a face's name field. Can utilize $face*/
    "editor.fold.face.nameOf": z
      .string()
      .describe("The accessible name of a face's name field. Can utilize $face")
      .default("$face name"),
    /**The label for what a face is*/
    "editor.fold.face.kind": z
      .string()
      .describe("The label for what a face is")
      .default("Kind"),
    /**The accessible name of a face's kind field. Can utilize $face*/
    "editor.fold.face.kindOf": z
      .string()
      .describe("The accessible name of a face's kind field. Can utilize $face")
      .default("$face kind"),
    /**Shown when intake could not tell what a face is*/
    "editor.fold.face.kindUnknown": z
      .string()
      .describe("Shown when intake could not tell what a face is")
      .default("unknown"),
    /**The face kind for a cover*/
    "editor.fold.kind.cover": z
      .string()
      .describe("The face kind for a cover")
      .default("Cover"),
    /**The face kind for a plain panel*/
    "editor.fold.kind.panel": z
      .string()
      .describe("The face kind for a plain panel")
      .default("Panel"),
    /**The face kind for a pocket*/
    "editor.fold.kind.pocket": z
      .string()
      .describe("The face kind for a pocket")
      .default("Pocket"),
    /**The face kind for a pocket tab*/
    "editor.fold.kind.pocketTab": z
      .string()
      .describe("The face kind for a pocket tab")
      .default("Pocket tab"),
    /**The face kind for a glue flap*/
    "editor.fold.kind.glueFlap": z
      .string()
      .describe("The face kind for a glue flap")
      .default("Glue flap"),
    /**The face kind for a tab*/
    "editor.fold.kind.tab": z
      .string()
      .describe("The face kind for a tab")
      .default("Tab"),
    /**The face kind for a flap*/
    "editor.fold.kind.flap": z
      .string()
      .describe("The face kind for a flap")
      .default("Flap"),
    /**The face kind for an edge*/
    "editor.fold.kind.edge": z
      .string()
      .describe("The face kind for an edge")
      .default("Edge"),
    /**The face kind for a spine*/
    "editor.fold.kind.spine": z
      .string()
      .describe("The face kind for a spine")
      .default("Spine"),
    /**The face kind for a gusset*/
    "editor.fold.kind.gusset": z
      .string()
      .describe("The face kind for a gusset")
      .default("Gusset"),
    /**The face kind for a tear strip*/
    "editor.fold.kind.tearStrip": z
      .string()
      .describe("The face kind for a tear strip")
      .default("Tear strip"),
    /**The face kind for a photo holder*/
    "editor.fold.kind.photoHolder": z
      .string()
      .describe("The face kind for a photo holder")
      .default("Photo holder"),
    /**The heading over the template's creases*/
    "editor.fold.section.creases": z
      .string()
      .describe("The heading over the template's creases")
      .default("Creases"),
    /**Explains crease directions*/
    "editor.fold.creases.help": z
      .string()
      .describe("Explains crease directions")
      .default(
        "A mountain crease folds away from you and a valley crease folds toward you, seen from the printed side.",
      ),
    /**The accessible name of a crease's direction choices. Can utilize $crease*/
    "editor.fold.crease.groupLabel": z
      .string()
      .describe(
        "The accessible name of a crease's direction choices. Can utilize $crease",
      )
      .default("$crease crease"),
    /**A crease that folds away from the printed side*/
    "editor.fold.crease.mountain": z
      .string()
      .describe("A crease that folds away from the printed side")
      .default("Mountain"),
    /**A crease that folds toward the printed side*/
    "editor.fold.crease.valley": z
      .string()
      .describe("A crease that folds toward the printed side")
      .default("Valley"),
    /**A line that is not folded*/
    "editor.fold.crease.none": z
      .string()
      .describe("A line that is not folded")
      .default("Not a crease"),
    /**The heading over how the template folds*/
    "editor.fold.section.folding": z
      .string()
      .describe("The heading over how the template folds")
      .default("Folding"),
    /**The label for the face that stays put while the rest fold*/
    "editor.fold.folding.fixedFace": z
      .string()
      .describe("The label for the face that stays put while the rest fold")
      .default("Fixed face"),
    /**Explains the fixed face*/
    "editor.fold.folding.fixedFaceHelp": z
      .string()
      .describe("Explains the fixed face")
      .default(
        "The face that stays put while everything else folds around it. Usually the back cover.",
      ),
    /**Shown when no fixed face has been chosen yet*/
    "editor.fold.folding.fixedFaceProposed": z
      .string()
      .describe("Shown when no fixed face has been chosen yet")
      .default("proposed by the rules"),
    /**The heading over which folds are closed in the design state*/
    "editor.fold.folding.hinges": z
      .string()
      .describe("The heading over which folds are closed in the design state")
      .default("Stays folded while customers design"),
    /**Explains the fold checkboxes*/
    "editor.fold.folding.hingesHelp": z
      .string()
      .describe("Explains the fold checkboxes")
      .default(
        "A checked fold stays closed in the state customers design in. Unchecked folds open flat.",
      ),
    /**Shown when the template has not been folded yet*/
    "editor.fold.folding.noModel": z
      .string()
      .describe("Shown when the template has not been folded yet")
      .default("No fold model yet. Re-fold to propose one from the creases."),
    /**The heading over the views customers see*/
    "editor.fold.section.views": z
      .string()
      .describe("The heading over the views customers see")
      .default("Views"),
    /**Explains views*/
    "editor.fold.views.help": z
      .string()
      .describe("Explains views")
      .default(
        "Each view is a tab customers see: which fold state, from which side, turned upright or not, and whether it is only a closed preview.",
      ),
    /**The label for the name customers see on a view's tab*/
    "editor.fold.view.name": z
      .string()
      .describe("The label for the name customers see on a view's tab")
      .default("Tab name"),
    /**Explains a view's name*/
    "editor.fold.view.nameHelp": z
      .string()
      .describe("Explains a view's name")
      .default(
        "What customers see on this view's tab, like Front, Inside or Back.",
      ),
    /**Explains why a standard view's name cannot be edited per style*/
    "editor.fold.view.standardNameHelp": z
      .string()
      .describe(
        "Explains why a standard view's name cannot be edited per style",
      )
      .default(
        "Every style shows this view under the same name, from the designer's labels.",
      ),
    /**The accessible name of a view's name field. Can utilize $view*/
    "editor.fold.view.nameOf": z
      .string()
      .describe("The accessible name of a view's name field. Can utilize $view")
      .default("$view tab name"),
    /**The label for which fold state a view shows*/
    "editor.fold.view.shows": z
      .string()
      .describe("The label for which fold state a view shows")
      .default("Shows"),
    /**Explains a view's fold state*/
    "editor.fold.view.showsHelp": z
      .string()
      .describe("Explains a view's fold state")
      .default("The fold state this view shows, like open or closed."),
    /**Shown when a view has no fold state yet*/
    "editor.fold.view.noState": z
      .string()
      .describe("Shown when a view has no fold state yet")
      .default("no state"),
    /**The label for which side of the sheet a view looks at*/
    "editor.fold.view.side": z
      .string()
      .describe("The label for which side of the sheet a view looks at")
      .default("Seen from"),
    /**Explains a view's side*/
    "editor.fold.view.sideHelp": z
      .string()
      .describe("Explains a view's side")
      .default(
        "Which side of the sheet you look at: the printed side or its back.",
      ),
    /**Shown when a view has no side yet*/
    "editor.fold.view.noSide": z
      .string()
      .describe("Shown when a view has no side yet")
      .default("not set"),
    /**The printed side of the sheet*/
    "editor.fold.view.printSide": z
      .string()
      .describe("The printed side of the sheet")
      .default("Print side"),
    /**The back of the sheet*/
    "editor.fold.view.reverseSide": z
      .string()
      .describe("The back of the sheet")
      .default("Reverse side"),
    /**Turns a view so its fixed face reads upright*/
    "editor.fold.view.upright": z
      .string()
      .describe("Turns a view so its fixed face reads upright")
      .default("Turn upright"),
    /**Explains turning a view upright*/
    "editor.fold.view.uprightHelp": z
      .string()
      .describe("Explains turning a view upright")
      .default("Turn the view so its fixed face reads upright."),
    /**Marks a view as a closed preview customers see but do not design on*/
    "editor.fold.view.preview": z
      .string()
      .describe(
        "Marks a view as a closed preview customers see but do not design on",
      )
      .default("Preview only"),
    /**Explains a preview-only view*/
    "editor.fold.view.previewHelp": z
      .string()
      .describe("Explains a preview-only view")
      .default("A closed preview: customers see it but do not design on it."),
    /**Shows labelled sample art on every face while editing*/
    "editor.fold.preview.sample": z
      .string()
      .describe("Shows labelled sample art on every face while editing")
      .default("Show sample content on every face"),
    /**The heading over what the fold checks found*/
    "editor.fold.section.findings": z
      .string()
      .describe("The heading over what the fold checks found")
      .default("Findings"),
    /**Redraws the views from the pending fold edits*/
    "editor.fold.action.refold": z
      .string()
      .describe("Redraws the views from the pending fold edits")
      .default("Re-fold"),
    /**Explains re-fold*/
    "editor.fold.action.refoldHelp": z
      .string()
      .describe("Explains re-fold")
      .default("Redraw the views from your names, creases and settings."),
    /**Lets the rules propose the fixed face, states and views again*/
    "editor.fold.action.propose": z
      .string()
      .describe("Lets the rules propose the fixed face, states and views again")
      .default("Propose again"),
    /**Explains propose again*/
    "editor.fold.action.proposeHelp": z
      .string()
      .describe("Explains propose again")
      .default(
        "Let the rules propose the fixed face, the states and the views again. Names the structure knows are re-derived.",
      ),
    /**Shown while a re-fold is running*/
    "editor.fold.status.refolding": z
      .string()
      .describe("Shown while a re-fold is running")
      .default("Re-folding…"),
    /**Shown when a re-fold fails. Can utilize $detail*/
    "editor.fold.error.refold": z
      .string()
      .describe("Shown when a re-fold fails. Can utilize $detail")
      .default("The re-fold didn't finish: $detail"),
    /**Shown in the anchors tool when the design has no anchors*/
    "editor.anchors.unavailable": z
      .string()
      .describe("Shown in the anchors tool when the design has no anchors")
      .default("This design has no anchors."),
    /**Shown when the template has no anchors*/
    "editor.anchors.hint.empty": z
      .string()
      .describe("Shown when the template has no anchors")
      .default(
        "This template has no anchors yet. Add one below where a slit or other fixture goes.",
      ),
    /**The anchors tool's instructions*/
    "editor.anchors.hint.pick": z
      .string()
      .describe("The anchors tool's instructions")
      .default(
        "Click an anchor here or on the canvas to move, size or fix it.",
      ),
    /**Which kind of anchor this is and which panel it sits on. Can utilize $role and $panel*/
    "editor.anchors.row.on": z
      .string()
      .describe(
        "Which kind of anchor this is and which panel it sits on. Can utilize $role and $panel",
      )
      .default("$role on $panel"),
    /**Marks an anchor with unsaved changes*/
    "editor.anchors.row.edited": z
      .string()
      .describe("Marks an anchor with unsaved changes")
      .default("edited"),
    /**Explains the pin on an anchor that always ships with a fixture. Can utilize $fixture*/
    "editor.anchors.row.alwaysShips": z
      .string()
      .describe(
        "Explains the pin on an anchor that always ships with a fixture. Can utilize $fixture",
      )
      .default("Always ships with $fixture"),
    /**The accessible name of the button that removes an anchor. Can utilize $anchor*/
    "editor.anchors.row.remove": z
      .string()
      .describe(
        "The accessible name of the button that removes an anchor. Can utilize $anchor",
      )
      .default("Remove $anchor"),
    /**An anchor a person placed or moved*/
    "editor.anchors.source.person": z
      .string()
      .describe("An anchor a person placed or moved")
      .default("placed by a person"),
    /**Explains an anchor a person placed*/
    "editor.anchors.source.personHelp": z
      .string()
      .describe("Explains an anchor a person placed")
      .default("Placed or moved by a person"),
    /**An anchor intake proposed from the die*/
    "editor.anchors.source.proposed": z
      .string()
      .describe("An anchor intake proposed from the die")
      .default("proposed"),
    /**Explains a proposed anchor*/
    "editor.anchors.source.proposedHelp": z
      .string()
      .describe("Explains a proposed anchor")
      .default("Intake proposed this from the die. Move it if it is wrong."),
    /**An anchor from some other source. Can utilize $source*/
    "editor.anchors.source.other": z
      .string()
      .describe("An anchor from some other source. Can utilize $source")
      .default("$source"),
    /**Explains an anchor from some other source*/
    "editor.anchors.source.otherHelp": z
      .string()
      .describe("Explains an anchor from some other source")
      .default("Where this anchor came from"),
    /**The title of the confirmation before an anchor is removed*/
    "editor.anchors.remove.title": z
      .string()
      .describe("The title of the confirmation before an anchor is removed")
      .default("Remove this anchor?"),
    /**The confirmation before an anchor is removed. Can utilize $anchor*/
    "editor.anchors.remove.message": z
      .string()
      .describe(
        "The confirmation before an anchor is removed. Can utilize $anchor",
      )
      .default(
        "$anchor comes off this template when you publish. Discard brings it back until then.",
      ),
    /**Which view the selected anchor is edited in. Can utilize $view*/
    "editor.anchors.editor.inView": z
      .string()
      .describe(
        "Which view the selected anchor is edited in. Can utilize $view",
      )
      .default("Edited in the $view view"),
    /**Where the selected anchor's centre sits. Can utilize $x and $y*/
    "editor.anchors.editor.centre": z
      .string()
      .describe(
        "Where the selected anchor's centre sits. Can utilize $x and $y",
      )
      .default('Centre $x" across, $y" down from the view\'s top left corner'),
    /**Undoes every change to the selected anchor*/
    "editor.anchors.editor.revert": z
      .string()
      .describe("Undoes every change to the selected anchor")
      .default("Revert to the stored anchor"),
    /**The accessible name of the anchor's move pad*/
    "editor.anchors.nudge.pad": z
      .string()
      .describe("The accessible name of the anchor's move pad")
      .default("Move the anchor with the arrow keys"),
    /**Moves the selected anchor up by one step*/
    "editor.anchors.nudge.up": z
      .string()
      .describe("Moves the selected anchor up by one step")
      .default("Move up"),
    /**Moves the selected anchor down by one step*/
    "editor.anchors.nudge.down": z
      .string()
      .describe("Moves the selected anchor down by one step")
      .default("Move down"),
    /**Moves the selected anchor left by one step*/
    "editor.anchors.nudge.left": z
      .string()
      .describe("Moves the selected anchor left by one step")
      .default("Move left"),
    /**Moves the selected anchor right by one step*/
    "editor.anchors.nudge.right": z
      .string()
      .describe("Moves the selected anchor right by one step")
      .default("Move right"),
    /**The label for how far one move goes*/
    "editor.anchors.nudge.step": z
      .string()
      .describe("The label for how far one move goes")
      .default("Step"),
    /**Rotates the selected anchor a quarter turn anticlockwise*/
    "editor.anchors.rotate.ccw": z
      .string()
      .describe("Rotates the selected anchor a quarter turn anticlockwise")
      .default("Rotate a quarter turn anticlockwise"),
    /**Rotates the selected anchor a quarter turn clockwise*/
    "editor.anchors.rotate.cw": z
      .string()
      .describe("Rotates the selected anchor a quarter turn clockwise")
      .default("Rotate a quarter turn clockwise"),
    /**The label for the anchor's width*/
    "editor.anchors.span.width": z
      .string()
      .describe("The label for the anchor's width")
      .default("Width"),
    /**The label for the anchor's height*/
    "editor.anchors.span.height": z
      .string()
      .describe("The label for the anchor's height")
      .default("Height"),
    /**Explains the anchor's size*/
    "editor.anchors.span.help": z
      .string()
      .describe("Explains the anchor's size")
      .default(
        "How much room the fixture has: the anchor's width and height in this view.",
      ),
    /**The unit the anchor's size is in*/
    "editor.anchors.span.unit": z
      .string()
      .describe("The unit the anchor's size is in")
      .default("in"),
    /**The heading over the fixture an anchor always ships with*/
    "editor.anchors.fixtures.fixedTitle": z
      .string()
      .describe("The heading over the fixture an anchor always ships with")
      .default("Always ships with"),
    /**The heading over the fixtures that can be previewed on an anchor*/
    "editor.anchors.fixtures.previewTitle": z
      .string()
      .describe(
        "The heading over the fixtures that can be previewed on an anchor",
      )
      .default("Preview a fixture here"),
    /**Shown when the fixture catalog is missing*/
    "editor.anchors.fixtures.noCatalog": z
      .string()
      .describe("Shown when the fixture catalog is missing")
      .default(
        "The fixture catalog did not load, so nothing can be previewed on this anchor.",
      ),
    /**Shows every fixture that fits the anchor. Can utilize $count*/
    "editor.anchors.fixtures.showAll": z
      .string()
      .describe("Shows every fixture that fits the anchor. Can utilize $count")
      .default("Show all $count"),
    /**Collapses the fixture list back to the first few*/
    "editor.anchors.fixtures.showFewer": z
      .string()
      .describe("Collapses the fixture list back to the first few")
      .default("Show fewer"),
    /**Makes the previewed fixture ship with every order*/
    "editor.anchors.fixtures.fix": z
      .string()
      .describe("Makes the previewed fixture ship with every order")
      .default("Always ship this one"),
    /**Turns a fixed fixture back into a customer choice*/
    "editor.anchors.fixtures.unfix": z
      .string()
      .describe("Turns a fixed fixture back into a customer choice")
      .default("Make it a purchase again"),
    /**Clears the previewed fixture*/
    "editor.anchors.fixtures.clear": z
      .string()
      .describe("Clears the previewed fixture")
      .default("Clear preview"),
    /**The accessible name of the fixture placement choices*/
    "editor.anchors.placement.label": z
      .string()
      .describe("The accessible name of the fixture placement choices")
      .default("Placement"),
    /**A fixture placed in the centre*/
    "editor.anchors.placement.center": z
      .string()
      .describe("A fixture placed in the centre")
      .default("Centred"),
    /**A fixture placed on the left*/
    "editor.anchors.placement.left": z
      .string()
      .describe("A fixture placed on the left")
      .default("Left"),
    /**A fixture placed on the right*/
    "editor.anchors.placement.right": z
      .string()
      .describe("A fixture placed on the right")
      .default("Right"),
    /**A fixture placed at the top*/
    "editor.anchors.placement.top": z
      .string()
      .describe("A fixture placed at the top")
      .default("Top"),
    /**A fixture placed in the middle*/
    "editor.anchors.placement.mid": z
      .string()
      .describe("A fixture placed in the middle")
      .default("Middle"),
    /**A fixture placed at the bottom*/
    "editor.anchors.placement.bot": z
      .string()
      .describe("A fixture placed at the bottom")
      .default("Bottom"),
    /**Shown when an anchor accepts every fixture of its kind*/
    "editor.anchors.fits.any": z
      .string()
      .describe("Shown when an anchor accepts every fixture of its kind")
      .default("Fits any fixture in the family"),
    /**Shown when an anchor accepts only some fixtures. Can utilize $count and $total*/
    "editor.anchors.fits.some": z
      .string()
      .describe(
        "Shown when an anchor accepts only some fixtures. Can utilize $count and $total",
      )
      .default("Fits $count of $total fixtures"),
    /**Explains which fixtures an anchor accepts*/
    "editor.anchors.fits.help": z
      .string()
      .describe("Explains which fixtures an anchor accepts")
      .default(
        "Leave every box clear to accept them all, or tick the ones this anchor can take.",
      ),
    /**The heading over adding an anchor*/
    "editor.anchors.add.title": z
      .string()
      .describe("The heading over adding an anchor")
      .default("Add an anchor"),
    /**Explains adding an anchor*/
    "editor.anchors.add.help": z
      .string()
      .describe("Explains adding an anchor")
      .default(
        "Mark where a slit or other fixture can go when the vendor die does not draw it. It starts centred on the panel; move and size it after.",
      ),
    /**The label for the panel a new anchor goes on*/
    "editor.anchors.add.panel": z
      .string()
      .describe("The label for the panel a new anchor goes on")
      .default("Panel"),
    /**The empty choice for a new anchor's panel*/
    "editor.anchors.add.panelChoose": z
      .string()
      .describe("The empty choice for a new anchor's panel")
      .default("choose a panel"),
    /**The label for the kind of a new anchor*/
    "editor.anchors.add.role": z
      .string()
      .describe("The label for the kind of a new anchor")
      .default("Kind"),
    /**Adds the anchor*/
    "editor.anchors.add.button": z
      .string()
      .describe("Adds the anchor")
      .default("Add"),
    /**Shown in the zones tool when there is nothing to edit*/
    "editor.zones.unavailable": z
      .string()
      .describe("Shown in the zones tool when there is nothing to edit")
      .default("Zones are not available here."),
    /**The zones tool's introduction when editing a template*/
    "editor.zones.intro.template": z
      .string()
      .describe("The zones tool's introduction when editing a template")
      .default(
        "Zones on the template govern every customer design on their panels. Publishing files them with the next version.",
      ),
    /**The zones tool's introduction when editing a design*/
    "editor.zones.intro.design": z
      .string()
      .describe("The zones tool's introduction when editing a design")
      .default(
        "Zones on this page govern only the items bound to them, and save with the design.",
      ),
    /**The heading while a zone is being drawn*/
    "editor.zones.drawing.title": z
      .string()
      .describe("The heading while a zone is being drawn")
      .default("Drawing"),
    /**The instruction while drawing a rectangle or ellipse zone*/
    "editor.zones.drawing.drag": z
      .string()
      .describe("The instruction while drawing a rectangle or ellipse zone")
      .default("Drag on the canvas to draw the zone."),
    /**The instruction while drawing a pen zone. Can utilize $count*/
    "editor.zones.drawing.pen": z
      .string()
      .describe("The instruction while drawing a pen zone. Can utilize $count")
      .default("Click each corner on the canvas ($count so far), then finish."),
    /**Closes the pen zone being drawn*/
    "editor.zones.drawing.finish": z
      .string()
      .describe("Closes the pen zone being drawn")
      .default("Finish"),
    /**Stops drawing without adding a zone*/
    "editor.zones.drawing.cancel": z
      .string()
      .describe("Stops drawing without adding a zone")
      .default("Cancel"),
    /**The heading over adding a zone*/
    "editor.zones.add.title": z
      .string()
      .describe("The heading over adding a zone")
      .default("Add a zone"),
    /**Shown when a template zone cannot be drawn on a folded view*/
    "editor.zones.add.needsFlatSheet": z
      .string()
      .describe("Shown when a template zone cannot be drawn on a folded view")
      .default("Template zones are drawn on the flat print sheet."),
    /**Switches to the flat print sheet to draw a template zone*/
    "editor.zones.add.goFlat": z
      .string()
      .describe("Switches to the flat print sheet to draw a template zone")
      .default("Go to the print sheet"),
    /**Adds a zone the shape of the selected item*/
    "editor.zones.add.fromSelection": z
      .string()
      .describe("Adds a zone the shape of the selected item")
      .default("From selection"),
    /**The label for adding a zone the shape of a panel*/
    "editor.zones.add.fromPanel": z
      .string()
      .describe("The label for adding a zone the shape of a panel")
      .default("From a panel"),
    /**The empty choice for adding a zone from a panel*/
    "editor.zones.add.fromPanelChoose": z
      .string()
      .describe("The empty choice for adding a zone from a panel")
      .default("choose a panel"),
    /**Adds a zone the shape of the chosen panel*/
    "editor.zones.add.fromPanelAdd": z
      .string()
      .describe("Adds a zone the shape of the chosen panel")
      .default("Add"),
    /**Draws a rectangle zone*/
    "editor.zones.shape.rect": z
      .string()
      .describe("Draws a rectangle zone")
      .default("Rectangle"),
    /**Draws an ellipse zone*/
    "editor.zones.shape.ellipse": z
      .string()
      .describe("Draws an ellipse zone")
      .default("Ellipse"),
    /**Draws a zone corner by corner*/
    "editor.zones.shape.pen": z
      .string()
      .describe("Draws a zone corner by corner")
      .default("Pen"),
    /**The heading over the zone list. Can utilize $count*/
    "editor.zones.list.title": z
      .string()
      .describe("The heading over the zone list. Can utilize $count")
      .default("Zones ($count)"),
    /**Shown when there are no zones*/
    "editor.zones.list.empty": z
      .string()
      .describe("Shown when there are no zones")
      .default("No zones yet."),
    /**The accessible name of a zone's remove button. Can utilize $zone*/
    "editor.zones.row.remove": z
      .string()
      .describe(
        "The accessible name of a zone's remove button. Can utilize $zone",
      )
      .default("Remove $zone"),
    /**The title of the confirmation before removing a zone*/
    "editor.zones.remove.title": z
      .string()
      .describe("The title of the confirmation before removing a zone")
      .default("Remove this zone?"),
    /**The confirmation before removing a template zone. Can utilize $zone*/
    "editor.zones.remove.message.template": z
      .string()
      .describe(
        "The confirmation before removing a template zone. Can utilize $zone",
      )
      .default(
        "The $zone zone stops governing customer designs once the next version is published.",
      ),
    /**The confirmation before removing a design zone. Can utilize $zone*/
    "editor.zones.remove.message.design": z
      .string()
      .describe(
        "The confirmation before removing a design zone. Can utilize $zone",
      )
      .default(
        "The $zone zone is removed and the items bound to it are released.",
      ),
    /**Lets a zone take a custom role*/
    "editor.zones.role.other": z
      .string()
      .describe("Lets a zone take a custom role")
      .default("Something else"),
    /**The label for a zone's role*/
    "editor.zones.field.role": z
      .string()
      .describe("The label for a zone's role")
      .default("What it is"),
    /**The label for a zone's custom role*/
    "editor.zones.field.customRole": z
      .string()
      .describe("The label for a zone's custom role")
      .default("Name"),
    /**The label for whether a zone keeps art in or out*/
    "editor.zones.field.admits": z
      .string()
      .describe("The label for whether a zone keeps art in or out")
      .default("Art"),
    /**Explains a zone's keep art in or out choice*/
    "editor.zones.field.admitsHelp": z
      .string()
      .describe("Explains a zone's keep art in or out choice")
      .default("Whether art has to stay inside this zone or outside it."),
    /**The label for what a zone does when art crosses it*/
    "editor.zones.field.policy": z
      .string()
      .describe("The label for what a zone does when art crosses it")
      .default("When art crosses it"),
    /**Explains a zone's policy choice*/
    "editor.zones.field.policyHelp": z
      .string()
      .describe("Explains a zone's policy choice")
      .default(
        "Whether crossing this zone is refused, flagged, or trimmed away.",
      ),
    /**A zone that art has to stay inside*/
    "editor.zones.admits.interior": z
      .string()
      .describe("A zone that art has to stay inside")
      .default("Keep art in"),
    /**Explains a keep art in zone*/
    "editor.zones.admits.interiorHelp": z
      .string()
      .describe("Explains a keep art in zone")
      .default("Art must stay inside this zone"),
    /**A zone that art has to stay out of*/
    "editor.zones.admits.exterior": z
      .string()
      .describe("A zone that art has to stay out of")
      .default("Keep art out"),
    /**Explains a keep art out zone*/
    "editor.zones.admits.exteriorHelp": z
      .string()
      .describe("Explains a keep art out zone")
      .default("Art must stay outside this zone, like a glue flap or a window"),
    /**A zone that refuses art crossing it*/
    "editor.zones.policy.block": z
      .string()
      .describe("A zone that refuses art crossing it")
      .default("Block"),
    /**Explains a blocking zone*/
    "editor.zones.policy.blockHelp": z
      .string()
      .describe("Explains a blocking zone")
      .default("The editor refuses a placement that crosses it"),
    /**A zone that flags art crossing it*/
    "editor.zones.policy.warn": z
      .string()
      .describe("A zone that flags art crossing it")
      .default("Warn"),
    /**Explains a warning zone*/
    "editor.zones.policy.warnHelp": z
      .string()
      .describe("Explains a warning zone")
      .default("Allowed, and flagged"),
    /**A zone that trims art crossing it*/
    "editor.zones.policy.clip": z
      .string()
      .describe("A zone that trims art crossing it")
      .default("Clip"),
    /**Explains a clipping zone*/
    "editor.zones.policy.clipHelp": z
      .string()
      .describe("Explains a clipping zone")
      .default("Allowed, and trimmed to it on the canvas and in print"),
    /**A keep art in, blocking zone in one sentence*/
    "editor.zones.summary.interior.block": z
      .string()
      .describe("A keep art in, blocking zone in one sentence")
      .default("Art has to stay inside. Crossing the edge is refused."),
    /**A keep art in, warning zone in one sentence*/
    "editor.zones.summary.interior.warn": z
      .string()
      .describe("A keep art in, warning zone in one sentence")
      .default("Art should stay inside. Crossing the edge is flagged."),
    /**A keep art in, clipping zone in one sentence*/
    "editor.zones.summary.interior.clip": z
      .string()
      .describe("A keep art in, clipping zone in one sentence")
      .default("Art is trimmed to the inside of this zone."),
    /**A keep art out, blocking zone in one sentence*/
    "editor.zones.summary.exterior.block": z
      .string()
      .describe("A keep art out, blocking zone in one sentence")
      .default("Art has to stay out. Covering it is refused."),
    /**A keep art out, warning zone in one sentence*/
    "editor.zones.summary.exterior.warn": z
      .string()
      .describe("A keep art out, warning zone in one sentence")
      .default("Art should stay out. Covering it is flagged."),
    /**A keep art out, clipping zone in one sentence*/
    "editor.zones.summary.exterior.clip": z
      .string()
      .describe("A keep art out, clipping zone in one sentence")
      .default("Art is trimmed away where it covers this zone."),
    /**The heading over the items bound to a design zone*/
    "editor.zones.bound.title": z
      .string()
      .describe("The heading over the items bound to a design zone")
      .default("Bound items"),
    /**Shown when no item is bound to a design zone*/
    "editor.zones.bound.none": z
      .string()
      .describe("Shown when no item is bound to a design zone")
      .default("Nothing is bound to this zone yet."),
    /**Releases an item from a design zone*/
    "editor.zones.bound.unbind": z
      .string()
      .describe("Releases an item from a design zone")
      .default("Unbind"),
    /**Binds the selected item to a design zone*/
    "editor.zones.bound.bind": z
      .string()
      .describe("Binds the selected item to a design zone")
      .default("Bind the selected item"),
  })
  .passthrough()
  .default({});
type _DesignerUiLabelsSchema = typeof _DesignerUiLabels;
export interface DesignerUiLabelsSchema extends _DesignerUiLabelsSchema {}
export const DesignerUiLabels: DesignerUiLabelsSchema = _DesignerUiLabels;
export type DesignerUiLabels = z.infer<typeof DesignerUiLabels>;
