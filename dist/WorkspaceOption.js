import { z } from "zod";
import { Workspace } from "./Workspace.js";
export const WorkspaceOption = z
    .object({
    /**The workspace option uuid*/
    uuid: z
        .string()
        .regex(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
        .describe("The workspace option uuid"),
    workspace: Workspace,
    /**Customer friendly label for the workspace option.*/
    label: z
        .string()
        .describe("Customer friendly label for the workspace option."),
    /**Customer friendly description of the workspace option.*/
    description: z
        .string()
        .describe("Customer friendly description of the workspace option."),
    /**Url for the banner image used for this option on the frontend*/
    bannerUrl: z
        .string()
        .describe("Url for the banner image used for this option on the frontend"),
})
    .strict();
