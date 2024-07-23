import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Teammatches from "./Components/Teammatches/Teammatches";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/id/:id" element={<Teammatches />} />
        {/* <Route path="/contact" component={Contact} />
      <Route path="*" component={NotFound} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
