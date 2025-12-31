// --- 11: Awaited<T> ---
// Desenvuelve el tipo de una Promesa, obteniendo el tipo que resuelve.
/*

const promisedString = Promise.resolve("midudev")

type ResolvedString = Awaited<typeof promisedString> // Resuelve a la última siempre

*/

async function getInfoFromGitHub() {
  return fetch("https://api.github.com/users/MrOrdenador")
    .then((res) => res.json())
    .then((data) => {
      const { name, avatar_url } = data as { name: string; avatar_url: string };
      return { name, avatarUrl: avatar_url };
    });
}

const result = getInfoFromGitHub()

type UserInfoFromGitHubResponse = Awaited<ReturnType<typeof getInfoFromGitHub>>

const midudev: UserInfoFromGitHubResponse = {
  name: "Miguel Ángel Durán",
  avatarUrl: ".png"
}