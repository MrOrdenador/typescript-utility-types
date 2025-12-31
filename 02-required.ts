// --- 02: Required<T> ---
// Hace que todas las propiedades de un tipo (incluso las opcionales) sean requeridas.

interface ProductIncomplete {
  id: number;
  name?: string;
  price?: number;
}

type ProductComplete = Required<ProductIncomplete>;

const product: ProductIncomplete = {
  id: 1,
};

const productComplete: ProductComplete = {
  id: 1,
  name: "Switch 2",
  price: 299,
};
