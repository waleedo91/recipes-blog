import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Recipe } from "../../types/recipes";

const API_BASE_URL = "https://gno8ti4lpa.execute-api.us-east-2.amazonaws.com";

interface RecipeState {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
}

const initialState: RecipeState = {
  recipes: [],
  loading: false,
  error: null,
};

export const fetchRecipes = createAsyncThunk<Recipe[]>(
  "recipes/fetchRecipes",
  async () => {
    const res = await fetch(`${API_BASE_URL}/recipes`);
    if (!res.ok) throw new Error("Failed to fetch recipes");
    return res.json();
  }
);

export const addRecipe = createAsyncThunk<Recipe, Omit<Recipe, "id">>(
  "recipes/addRecipe",
  async (newRecipe) => {
    const res = await fetch(`${API_BASE_URL}/recipes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecipe),
    });
    if (!res.ok) throw new Error("Failed to add recipe");
    return res.json();
  }
);

const recipesSLice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchRecipes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch recipes";
    });
    builder.addCase(addRecipe.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export default recipesSLice.reducer;
