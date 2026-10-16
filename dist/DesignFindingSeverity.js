import { z } from "zod";
const _DesignFindingSeverity = z.enum(["error", "warning", "info"]);
export const DesignFindingSeverity = _DesignFindingSeverity;
