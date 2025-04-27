import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routerPublic from "./router";
import Header from "./components/Layout/header";
// import 'Cards'

function App() {
  return (
    <Router>
      <Header />
      <div className="box-body">
        <Routes>
          {routerPublic.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
