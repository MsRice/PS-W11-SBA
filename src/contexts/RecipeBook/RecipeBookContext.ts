import { createContext } from "react";
import type { RecipeBookContextType } from "../../types";

export const RecipeBookContext = createContext<RecipeBookContextType | undefined>(undefined)