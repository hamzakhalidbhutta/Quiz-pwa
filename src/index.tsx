import ReactDOM from "react-dom";
import App from "./App";
import Splash from "./Pages/Splash";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { QuizProvider } from "./store/Provider/QuizProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
ReactDOM.render(
  <Router>
    <App>
      <QuizProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Splash />} />
        </Routes>
      </QuizProvider>
    </App>
  </Router>,
  document.getElementById("root")
);
serviceWorkerRegistration.unregister();
