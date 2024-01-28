import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage.tsx";
import SecondPage from "../SecondPage/SecondPage.tsx";
import "./App.css";
import ErrorPage from "../404/ErrorPage.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task/:id" element={<SecondPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
