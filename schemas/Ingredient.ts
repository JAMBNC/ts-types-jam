import { z } from "zod";
import { DataIngredient } from "./DataIngredient.js";
import { FillIngredient } from "./FillIngredient.js";
import { ImageIngredient } from "./ImageIngredient.js";
import { RectangleIngredient } from "./RectangleIngredient.js";
import { ShapeIngredient } from "./ShapeIngredient.js";
import { TextIngredient } from "./TextIngredient.js";

/**A discriminated union of all supported ingredient types.*/
export const Ingredient = z
  .discriminatedUnion("type", [
    DataIngredient,
    FillIngredient,
    ShapeIngredient,
    RectangleIngredient,
    TextIngredient,
    ImageIngredient,
  ])
  .describe("A discriminated union of all supported ingredient types.");
export type Ingredient = z.infer<typeof Ingredient>;
