import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="p-5 bg-blue-500">
      <p className="font-bold text-white">I am the Header</p>
      <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-lg">
        Home
      </Link>
      <Link
        href="/todos"
        className="ml-2 px-2 py-1 bg-white text-blue-500 rounded-lg"
      >
        Todos
      </Link>
      <Link
        href="/search"
        className="ml-2 px-2 py-1 bg-white text-blue-500 rounded-lg"
      >
        Search
      </Link>
    </div>
  );
}

export default Header;
