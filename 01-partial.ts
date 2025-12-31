// --- 01: Partial<T> ---
// Hace que todas las propiedades de un tipo sean opcionales.

interface User {
  id: number; // Solucion incorrecta: hacer todo opcional. Estamos perdiendo informacion de la interfaz si lo hacemos
  name: string;
  email: string;
  isAdmin: boolean;
}

function updateUser(id: number, userUpdate: Partial<User>){ // Partial funciona de forma generica con cualquier tipo
  console.log(`Updating user ${id} with`, userUpdate);
  // Lógica para actualizar el usuario en la base de datos
}

updateUser(1, { name: "Nuevo Nombre" }); // Error: faltan propiedades obligatorias