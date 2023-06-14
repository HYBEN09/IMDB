"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import classes from "./SearchBox.module.css";

export function SearchBox() {
  const [search, setSearch] = useState();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.formWrapper}>
      <input
        type="text"
        value={search}
        placeholder="Search keywords..."
        onChange={(e) => setSearch(e.target.value)}
        className={classes.input}
      />
      <button type="submit" disabled={!search} className={classes.button}>
        Search
      </button>
    </form>
  );
}
