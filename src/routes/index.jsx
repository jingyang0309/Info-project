import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/index.jsx";
import Header from "../components/Header/Header.jsx";
function RouteIndex() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RouteIndex;
