import { Navigate, Route, Routes } from "react-router";
import {
  Header,
  Footer,
  Brief,
  Help,
  ContactUs,
  Instructions,
  Sorry,
} from "./components";
import Scrollbars from "rc-scrollbars";
import styles from "./App.module.css";

function App() {
  return (
    <Scrollbars
      style={{ height: "100vh" }}
      classes={{
        trackVertical: styles.trackVertical,
        thumbVertical: styles.thumbVertical,
      }}
      autoHide
      autoHideTimeout={1000}
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
