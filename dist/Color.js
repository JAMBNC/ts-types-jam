import { z } from "zod/v4";
export const Color = z
    .any()
    .describe("Schema definitions for colors used throughout our system");
