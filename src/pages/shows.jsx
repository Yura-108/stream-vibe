import MovieDetails from "@/sections/MovieDetails";
import Seasons from "@/components/Seasons";
import ShowBanner from "@/sections/ShowBanner";

export const metadata = {
  title: 'Shows - Stranger Things',
}

export default function () {
  return (
    <>
      <ShowBanner />
      <MovieDetails seasons={<Seasons />} />
    </>
  )
}
