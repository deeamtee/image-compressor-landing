import { Route, Routes, useLocation } from "react-router";
import Header from "./components/Header/Header";
import Brief from "./components/Brief/Brief";
import Help from "./components/Help/Help";
import ContactUs from "./components/ContactUs/ContactUs";
import Instructions from "./components/Instructions/Instructions";
import Footer from "./components/Footer/Footer";
import Scrollbars from "rc-scrollbars";
import styles from "./App.module.css";
import Sorry from "./components/Sorry/Sorry";

function App() {
  const location = useLocation();

  const isMainPage = location.pathname === "/home";

  return (
    <Scrollbars
      style={{ height: "100vh" }}
      classes={{
        trackVertical: styles.trackVertical,
        thumbVertical: styles.thumbVertical,
      }}
    >
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Brief />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/sorry" element={<Sorry />} />
        </Routes>
        <Footer isMainPage={isMainPage} />
      </div>
    </Scrollbars>
  );
}

export default App;
