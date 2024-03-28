import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage.tsx";
import SecondPage from "../SecondPage/SecondPage.tsx";
import "./App.css";
import ErrorPage from "../404/ErrorPage.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <div className="app__content-wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/task/:id" element={<SecondPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
      <div id="modal"></div>
    </div>
  );
}

export default App;
