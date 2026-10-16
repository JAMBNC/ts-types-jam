import { z } from "zod";
const _DerivedFromKind = z.enum(["style", "prebuilt", "design"]);
export const DerivedFromKind = _DerivedFromKind;
