// --- 06: Exclude<T, U> ---
// Excluye de un tipo unión los elementos que indiques

type Characters = "Iron Man" | "Thor" | "Loki" | "Hulk" | "Thanos";

type Avengers = Exclude<Characters, "Loki" | "Thanos">;
type Villains = Exclude<Characters, Avengers>;

const hero: Avengers = "Thor";
const villain: Villains = "Thanos";

type Animal =
  | { kind: "dog"; bark: string }
  | { kind: "cat"; meow: string }
  | { kind: "fish"; swimSpeed: number };

type NoCatsAllowed = Exclude<Animal, { kind: "cat" }>;

const animal: NoCatsAllowed = {
  kind: "dog",
  bark: "woooof",
}