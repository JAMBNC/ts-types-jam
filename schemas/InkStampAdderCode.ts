import { z } from "zod";

const _InkStampAdderCode = z.enum(["ink_stamp_1", "ink_stamp_2"]);
type _InkStampAdderCodeSchema = typeof _InkStampAdderCode;
export interface InkStampAdderCodeSchema extends _InkStampAdderCodeSchema {}
export const InkStampAdderCode: InkStampAdderCodeSchema = _InkStampAdderCode;
export type InkStampAdderCode = z.infer<typeof InkStampAdderCode>;
