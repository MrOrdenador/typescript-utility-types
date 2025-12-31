// --- 05: Readonly<T> ---
// Hace que todas las propiedades de un tipo sean de solo lectura.

interface Pizza {
  name: string;
  toppings: string[]; // Si añadieramos Readonly<string[]>, ya NO se podría hacer lo de la línea 15
}

const pizza: Readonly<Pizza> = {
  name: "Margherita",
  toppings: ["Tomato", "Mozzarella", "Basil"],
};

// pizza.name = "Pepperoni"; // ERROR
pizza.toppings.push("Pepperoni"); // OK, porque no lo estamos asignando de nuevo, es la misma lista, y modificarla SI podemos