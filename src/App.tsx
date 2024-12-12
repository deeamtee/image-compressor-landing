import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import { Header, Footer, Brief, Help, ContactUs, Instructions, Sorry } from "./components";
import Scrollbars from "rc-scrollbars";

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
