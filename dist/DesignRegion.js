import { z } from "zod";
import { DesignRegionAdmits } from "./DesignRegionAdmits.js";
import { DesignRegionPolicy } from "./DesignRegionPolicy.js";
import { Path } from "./Path.js";
const _DesignRegion = z
    .object({
    id: z.string(),
    /**What the region is, resolved against a configuration registry. An open string so a product we do not make yet can name its own zones.*/
    role: z
        .string()
        .describe("What the region is, resolved against a configuration registry. An open string so a product we do not make yet can name its own zones."),
    /**Which side of the outline art belongs on: interior keeps art inside it, exterior keeps art out of it. A template region without it is exterior, a DesignState page region without it is interior.*/
    admits: DesignRegionAdmits.optional(),
    /**How hard the restriction is: refuse the placement, allow it and warn, or allow it and trim the art to the region on the canvas and in print.*/
    policy: DesignRegionPolicy,
    /**A vector path consisting of ordered control points.*/
    path: Path,
})
    .strict()
    .describe("An area that governs where art goes: it keeps art in (interior) or out (exterior), and refuses, flags or trims what crosses it. On a template it governs all customer art on its panels; on a DesignState page it governs only the ingredients whose restrictions name it.");
/**An area that governs where art goes: it keeps art in (interior) or out (exterior), and refuses, flags or trims what crosses it. On a template it governs all customer art on its panels; on a DesignState page it governs only the ingredients whose restrictions name it.*/
export const DesignRegion = _DesignRegion;
