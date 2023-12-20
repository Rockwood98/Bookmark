import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Accordion from "./pages/Accordion";
import ExtensionPage from "./pages/ExtensionPage";
import FeaturesPage from "./pages/FeaturesPage";
import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";

function App() {
  const [openModal, setOpenModal] = useState(false);
  function closeModalF() {
    setOpenModal(false);
  }
  function openModalF() {
    setOpenModal(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setOpenModal(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="AppLayout">
      {openModal && <Modal closeModal={closeModalF} />}
      <div className={openModal ? "blur" : ""}>
        <div className="App">
          <HomePage openModal={openModalF} />
          <FeaturesPage />
          <ExtensionPage />
          <Accordion />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
