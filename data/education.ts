import { GraduationCap, Languages, Laptop, School, type LucideIcon } from "lucide-react";

export type Status = "progress" | "completed" | "certified";
export type Level = "master" | "bachelor" | "certificate" | "highschool";
export type Key = "master" | "bachelor" | "office" | "english" | "bac";

// Most recent first. "major" = degrees (larger node on the axis).
export const steps: { key: Key; icon: LucideIcon; level: Level; major: boolean; status: Status }[] = [
  { key: "master", icon: GraduationCap, level: "master", major: true, status: "progress" },
  { key: "bachelor", icon: GraduationCap, level: "bachelor", major: true, status: "completed" },
  { key: "office", icon: Laptop, level: "certificate", major: false, status: "certified" },
  { key: "english", icon: Languages, level: "certificate", major: false, status: "certified" },
  { key: "bac", icon: School, level: "highschool", major: true, status: "completed" },
];
