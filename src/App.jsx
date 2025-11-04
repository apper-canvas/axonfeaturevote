import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "@/components/organisms/Header";
import BoardPage from "@/components/pages/BoardPage";
import SubmitPage from "@/components/pages/SubmitPage";
import RoadmapPage from "@/components/pages/RoadmapPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface-50">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<BoardPage />} />
            <Route path="/submit" element={<SubmitPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
          </Routes>
        </main>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          style={{ zIndex: 9999 }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;