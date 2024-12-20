import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routerPublic from "./router";
// import 'Cards'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="box-body">
        <Router>
          <Routes>
            {routerPublic.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
