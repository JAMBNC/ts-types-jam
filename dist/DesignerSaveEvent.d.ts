import { z } from "zod";
/**Event emitted when the designer saves the current design state.*/
export declare const DesignerSaveEvent: z.ZodObject<{
    type: z.ZodLiteral<"save">;
    payload: z.ZodObject<{
        addressListId: z.ZodNumber;
        alchemySnapshots: z.ZodString;
        autoSeparated: z.ZodBoolean;
        config: z.ZodString;
        isCmyk: z.ZodBoolean;
        orientation: z.ZodNumber;
        pages: z.ZodString;
        pagesOrdered: z.ZodString;
        preflight: z.ZodString;
        productSku: z.ZodString;
        qty: z.ZodNumber;
        returnAddressString: z.ZodString;
        sRecipAddressString: z.ZodString;
        designerInstanceCode: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerSaveEvent = z.infer<typeof DesignerSaveEvent>;
//# sourceMappingURL=DesignerSaveEvent.d.ts.map