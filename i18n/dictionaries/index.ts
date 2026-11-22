import { en } from "./en";
import { fr } from "./fr";
import { de } from "./de";
import { es } from "./es";
import type { Dict } from "./types";

export const LANGS = ["en", "fr", "de", "es"] as const;
export type Lang = (typeof LANGS)[number];
export const LANG_NAMES: Record<Lang, string> = { en: "English", fr: "Français", de: "Deutsch", es: "Español" };
export type { Dict };
export const dictionaries: Record<Lang, Dict> = { en, fr, de, es };
