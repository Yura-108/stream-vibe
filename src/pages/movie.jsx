import MovieBanner from "@/sections/MovieBanner/index.js";
import MovieDetails from "@/sections/MovieDetails/index.js";

export const metadata = {
  title: 'Movie - Kantara',
}

export default function () {
  return (
    <>
      <MovieBanner/>
      <MovieDetails/>
    </>
  )
}
