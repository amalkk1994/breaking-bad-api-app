import "./App.css"
import Layout from "./layouts/Layout"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import BrowseCharacters from "./pages/BrowseCharacters"
import BrowseCollections from "./pages/BrowseCollections"
import DailyCharacters from "./pages/DailyCharacters"
import QuizPage from "./pages/QuizPage"

function App() {
  return (
    <div className="App">
      <Link to="/dailyCharacters">Daily characters</Link>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browseCharacters" element={<BrowseCharacters />} />
          <Route path="browseCollections" element={<BrowseCollections />} />
          <Route path="dailyCharacters" element={<DailyCharacters />} />
          <Route path="quiz" element={<QuizPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
