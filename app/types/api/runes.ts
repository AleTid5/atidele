export type Rune = {
  name: string;
  description: string;
  powers: string[];
  origin: string;
  element: "fire" | "water" | "air" | "earth" | "light";
  symbol: string;
  temperament: string;
  activation: string;
  drawbacks: string[];
};
