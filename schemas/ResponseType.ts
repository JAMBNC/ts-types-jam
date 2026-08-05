import { z } from "zod";

const _ResponseType = z.literal("merchantResponse");
type _ResponseTypeSchema = typeof _ResponseType;
export interface ResponseTypeSchema extends _ResponseTypeSchema {}
export const ResponseType: ResponseTypeSchema = _ResponseType;
export type ResponseType = z.infer<typeof ResponseType>;
