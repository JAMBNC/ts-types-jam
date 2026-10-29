import { z } from "zod";
const _DesignerImageColorCluster = z
    .object({
    /**The cluster's seed colour, sRGB 0 to 255.*/
    rgb: z
        .array(z.number())
        .min(3)
        .max(3)
        .describe("The cluster's seed colour, sRGB 0 to 255."),
    /**The seed in Lab.*/
    lab: z.array(z.number()).min(3).max(3).describe("The seed in Lab."),
    /**The cluster's drifting mean in Lab, used for membership.*/
    centroidLab: z
        .array(z.number())
        .min(3)
        .max(3)
        .describe("The cluster's drifting mean in Lab, used for membership."),
    /**The full-strength end of the cluster's tint ramp, sRGB 0 to 255.*/
    peakRgb: z
        .array(z.number())
        .min(3)
        .max(3)
        .describe("The full-strength end of the cluster's tint ramp, sRGB 0 to 255."),
    /**Sampled pixels in the cluster.*/
    pixelCount: z
        .number()
        .int()
        .gte(0)
        .describe("Sampled pixels in the cluster."),
    /**How wide a colour range belongs to the cluster: tight for crisp art, blended for anti-aliased edges.*/
    fuzz: z
        .enum(["tight", "blended"])
        .describe("How wide a colour range belongs to the cluster: tight for crisp art, blended for anti-aliased edges."),
})
    .strict()
    .describe("One colour fusion found in an image, as its analysis reports it.");
/**One colour fusion found in an image, as its analysis reports it.*/
export const DesignerImageColorCluster = _DesignerImageColorCluster;
