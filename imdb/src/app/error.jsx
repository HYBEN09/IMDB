"use client";

import { useEffect } from "react";

function Error({ error, reset }) {
  useEffect(() => console.error(error), []);

  return (
    <div className="text-center mt-20">
      <h1 className="mb-10 text-amber-700">Something went wrong</h1>
      <button
        className="hover:text-amber-600 bg-gray-100 py-2 px-4 rounded-md shadow-md hover:shadow-lg"
        onClick={reset}
      >
        Try Again
      </button>
    </div>
  );
}

export default Error;
