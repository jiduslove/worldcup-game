import { BrowserRouter, Route, Routes } from "react-router-dom"; // 페이지를 넘어갈 수 있도록 라우트를 쓰기위해서 이 코드를 씀.
import Main from "./pages/main";
import Worldcup from "./pages/worldcup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/worldcup" element={<Worldcup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
