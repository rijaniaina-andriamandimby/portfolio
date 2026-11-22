import type { en } from "./en";

// English is the reference dictionary: every other language must expose exactly the same keys.
export type Dict = typeof en;
