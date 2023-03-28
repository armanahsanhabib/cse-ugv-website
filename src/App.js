import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./pages/home/components/Footer";
import Header from "./pages/home/components/Header";
import Home from "./pages/home/Home";
import NoPage from "./pages/no-page/NoPage";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App; 