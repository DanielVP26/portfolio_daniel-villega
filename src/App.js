import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
