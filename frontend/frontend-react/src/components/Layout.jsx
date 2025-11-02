import { Header } from "./Header";
import { Aside } from "./Aside";
import { useState } from "react";
export function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="h-screen w-screen grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] gap-4 bg-gray-800">
        <header className="col-span-2 bg-gray-900 text-white shadow-md">
          <Header />
        </header>
        <aside
          className={`${
            isOpen ? "w-60" : "w-16"
          } transition-all duration-300 overflow-hidden bg-gray-800 text-white`}
        >
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 m-2 bg-gray-700 rounded-md hover:bg-gray-600 transition"
          >
            ☰
          </button>
          <Aside />
        </aside>
        <main className="row-start-2 col-start-2 bg-gray-700 text-white p-6 rounded-l-2xl shadow-inner">
          {children}
        </main>
      </div>
    </>
  );
}
