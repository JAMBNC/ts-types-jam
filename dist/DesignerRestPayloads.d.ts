import { z } from "zod";
declare const _DesignerRestPayloads: z.ZodUnion<readonly [import("./DesignerMediaGalleryResponse.js").DesignerMediaGalleryResponseSchema, import("./DesignerMediaUploadRequest.js").DesignerMediaUploadRequestSchema, import("./DesignerMediaUploadResponse.js").DesignerMediaUploadResponseSchema, import("./DesignerMediaRenditionRequest.js").DesignerMediaRenditionRequestSchema, import("./DesignerMediaRenditionResponse.js").DesignerMediaRenditionResponseSchema, import("./DesignerMediaDeleteResponse.js").DesignerMediaDeleteResponseSchema, import("./DesignerSaveResponse.js").DesignerSaveResponseSchema, import("./DesignerSaveRequest.js").DesignerSaveRequestSchema, import("./DesignerLoadResponse.js").DesignerLoadResponseSchema, import("./DesignerAddressBooksResponse.js").DesignerAddressBooksResponseSchema, import("./DesignerAddressBookResponse.js").DesignerAddressBookResponseSchema, import("./DesignerAddressBookUploadRequest.js").DesignerAddressBookUploadRequestSchema, import("./DesignerAddressBookUploadResponse.js").DesignerAddressBookUploadResponseSchema]>;
type _DesignerRestPayloadsSchema = typeof _DesignerRestPayloads;
export interface DesignerRestPayloadsSchema extends _DesignerRestPayloadsSchema {
}
/**A union of all possible Designer REST API request and response types.*/
export declare const DesignerRestPayloads: DesignerRestPayloadsSchema;
export type DesignerRestPayloads = z.infer<typeof DesignerRestPayloads>;
export {};
//# sourceMappingURL=DesignerRestPayloads.d.ts.map