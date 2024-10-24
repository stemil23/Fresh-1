import { Handlers, PageProps } from "$fresh/server.ts";
import client from "../db.ts";
import e from "$generated/index.ts";

interface Movie {
  title: string | null;
  actors: { name: string }[];
}

export const handler: Handlers<Movie[]> = {
  async GET(_, ctx) {
    const query = e.select(e.Movie, () => ({
      title: true,
      actors: {
        name: true
      }
    }));

    const movies = await query.run(client);
    return ctx.render(movies);
  },
};

export default function Home({ data: movies }: PageProps<Movie[]>) {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4">
          Here are the movies and actors in our database:
        </p>
        <div class="w-full">
          {movies.map((movie) => (
            <div key={movie.title} class="mb-4 p-4 border rounded">
              <h2 class="text-2xl font-bold">{movie.title}</h2>
              <h3 class="text-xl mt-2">Actors:</h3>
              <ul class="list-disc list-inside">
                {movie.actors.map((actor) => (
                  <li key={actor.name}>{actor.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
