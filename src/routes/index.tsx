import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages";
import Header from "../components/Header/Header";
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
