import { z } from "zod";

const _Status = z.literal("CREATED");
type _StatusSchema = typeof _Status;
export interface StatusSchema extends _StatusSchema {}
export const Status: StatusSchema = _Status;
export type Status = z.infer<typeof Status>;
