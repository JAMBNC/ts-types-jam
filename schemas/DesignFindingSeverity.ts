import { z } from "zod";

const _DesignFindingSeverity = z.enum(["error", "warning", "info"]);
type _DesignFindingSeveritySchema = typeof _DesignFindingSeverity;
export interface DesignFindingSeveritySchema extends _DesignFindingSeveritySchema {}
export const DesignFindingSeverity: DesignFindingSeveritySchema =
  _DesignFindingSeverity;
export type DesignFindingSeverity = z.infer<typeof DesignFindingSeverity>;
