"use client";

import Link from "next/link";

import { useSearchParams } from "next/navigation";

export function NavbarItem({ title, param }) {
  //현재 URL의 쿼리 파라미터를 가져올 수 있다.
  const searchParams = useSearchParams();

  // "genre"라는 쿼리 파라미터의 값을 가져옵니다.
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          // genre이 존재하고, genre과 param 값이 동일한 경우
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4  decoration-amber-500 rounded-lg"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
