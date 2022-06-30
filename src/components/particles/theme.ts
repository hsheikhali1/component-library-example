type Variations = "1" | "2" | "3" | "4" | "5";
type Colors =
  | "bits-blue"
  | "bubblegum-pink"
  | "algae-green"
  | "peel-orange"
  | "sassy-purple"
  | "marine-teal";

export type TextColors =
  | `text-${Colors}-${Variations}`
  | `text-${Colors}`
  | "text-black"
  | "text-white"
  | "text-current"
  | "text-security-black";

export type BackgroundColors =
  | `bg-${Colors}-${Variations}`
  | `bg-${Colors}`
  | "bg-soft-navy"
  | "bg-security-black";

export type FillColors =
  | `fill-${Colors}-${Variations}`
  | `fill-${Colors}`
  | "fill-transparent"
  | "fill-current";
