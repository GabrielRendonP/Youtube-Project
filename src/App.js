
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import ItemDescription from './pages/ItemDescription';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='videos/:videoId' element={<ItemDescription />} />
          <Route path="about" element={<ItemDescription />} />
        </Route>
      </Routes>
    </div>
    </AnimatePresence>
  );
}

export default App;
