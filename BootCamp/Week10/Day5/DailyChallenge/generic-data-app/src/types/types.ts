export interface Recipe {
    title: string;
    image: string;
    instructions: string;
    ingredients: string[];
}
  
export interface ApiResponse {
    recipes: Recipe[];
}
