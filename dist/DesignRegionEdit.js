import { z } from "zod";
import { DesignRegion } from "./DesignRegion.js";
const _DesignRegionEdit = z
    .object({
    id: z.string(),
    /**An area that governs where art goes: it keeps art in (interior) or out (exterior), and refuses, flags or trims what crosses it. On a template it governs all customer art on its panels; on a DesignState page it governs only the ingredients whose restrictions name it.*/
    region: DesignRegion.optional(),
})
    .strict()
    .describe("A region prepress added, changed or deleted: the region that replaces the one with this id, or joins the interpretation; absent region deletes it.");
/**A region prepress added, changed or deleted: the region that replaces the one with this id, or joins the interpretation; absent region deletes it.*/
export const DesignRegionEdit = _DesignRegionEdit;
