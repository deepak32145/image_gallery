import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetImages from "./GetImages";
import GetSpecificimage from "./GetSpecificimage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetImages />}></Route>
          <Route path="/search" element={<GetSpecificimage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
