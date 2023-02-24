import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetImages from "./components/GetImages";
import GetSpecificimage from "./components/GetSpecificimage";

export default function App() {
  return (
    <>
      <nav
        data-testid="check"
        className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3"
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              Image gallery
            </a>
          </div>
          <div id="example-navbar-danger">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/search"
                >
                  Search
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetImages />}></Route>
          <Route path="/search" element={<GetSpecificimage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
