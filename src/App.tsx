import { Navigate, Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Brief from "./components/Brief/Brief";
import Help from "./components/Help/Help";
import ContactUs from "./components/ContactUs/ContactUs";
import Instructions from "./components/Instructions/Instructions";
import Footer from "./components/Footer/Footer";
import Scrollbars from "rc-scrollbars";
import Sorry from "./components/Sorry/Sorry";
import { useEffect, useState } from "react";

function App() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (isScrolling) {
      const timeout = setTimeout(() => setIsScrolling(false), 1000); // Скрыть через 1 секунду бездействия
      return () => clearTimeout(timeout);
    }
  }, [isScrolling]);

  const handleScroll = () => {
    setIsScrolling(true);
  };

  return (
    <Scrollbars
      style={{ height: "100vh" }}
      onScroll={handleScroll}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: "gray",
            opacity: isScrolling ? 1 : 0,
            transition: "opacity 0.3s ease",
            borderRadius: "4px",
          }}
        />
      )}
    >
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Brief />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/sorry" element={<Sorry />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </div>
    </Scrollbars>
  );
}

export default App;