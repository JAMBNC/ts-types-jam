import { z } from "zod";

const _DesignerSaveEvent = z
  .object({
    type: z.literal("save"),
    payload: z
      .object({
        /**The design state as a json encoded string*/
        design: z
          .string()
          .describe("The design state as a json encoded string"),
        /**The encoded snapshots as a json encoded string*/
        encodedSnapshots: z
          .string()
          .describe("The encoded snapshots as a json encoded string"),
        /**The translated config used by the current design session json encoded.*/
        config: z
          .string()
          .describe(
            "The translated config used by the current design session json encoded.",
          ),
        /**The preflight data in a json encoded string*/
        preflight: z
          .string()
          .describe("The preflight data in a json encoded string"),
        /**Uuid to pass back with the response*/
        saveRequestUuid: z
          .string()
          .regex(
            /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
          )
          .describe("Uuid to pass back with the response"),
      })
      .strict(),
  })
  .strict()
  .describe("Event emitted when the designer saves the current design state.");
type _DesignerSaveEventSchema = typeof _DesignerSaveEvent;
export interface DesignerSaveEventSchema extends _DesignerSaveEventSchema {}
/**Event emitted when the designer saves the current design state.*/
export const DesignerSaveEvent: DesignerSaveEventSchema = _DesignerSaveEvent;
export type DesignerSaveEvent = z.infer<typeof DesignerSaveEvent>;
