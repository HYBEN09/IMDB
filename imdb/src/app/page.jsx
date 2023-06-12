import { Results } from "@/components/DataResults/Results   ";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=ko-KR&page=1`,
    // 데이터 요청에 대한 캐싱 및 재검증(Revalidation)을 관리
    // 데이터는 10초(10000 밀리초) 동안 캐싱되며, 10초 후에는 서버에 재검증 요청을 보내어 새로운 데이터를 가져옵니다.
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
