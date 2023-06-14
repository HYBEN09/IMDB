import Link from "next/link";
import Image from "next/image";
import classes from "./Card.module.css";
import { FiThumbsUp } from "react-icons/fi";

export function Card({ result }) {
  return (
    <div className={classes.cardWrapper}>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          className={classes.imageContainer}
          alt="image is not available"
        ></Image>
        <div className="p-2">
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 ml-4" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
