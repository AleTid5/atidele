import runes from "@/app/data/runes.json";
import type { Rune } from "@/app/types/api/runes";

export const getRuneContent = (color: string): Rune | null => {
  try {
    return (runes as unknown as Record<string, Rune>)[color];
  } catch (error) {
    console.error(error);
    return null;
  }
};
