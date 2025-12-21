
export interface Burger {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
}

export interface RecommendedBurger {
  name: string;
  ingredients: string[];
  reasoning: string;
}
