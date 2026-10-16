import { z } from "zod";
const _DesignRegionAdmits = z
    .enum(["interior", "exterior"])
    .describe("Which side of the outline art belongs on: interior keeps art inside it, exterior keeps art out of it. A template region without it is exterior, a DesignState page region without it is interior.");
/**Which side of the outline art belongs on: interior keeps art inside it, exterior keeps art out of it. A template region without it is exterior, a DesignState page region without it is interior.*/
export const DesignRegionAdmits = _DesignRegionAdmits;
