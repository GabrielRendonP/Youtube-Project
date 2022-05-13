
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import ItemDescription from './pages/ItemDescription';
import { AnimatePresence } from 'framer-motion';
import Favorites from './pages/Favorites';
import { AuthRoute } from './components/authRoute/AuthRoute';
import Unauthorized from './pages/Unauthorized';

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='videos/:videoId' element={<ItemDescription />} />
          <Route path="about" element={<ItemDescription />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route
            path="/favorites"
            element={
              <AuthRoute>
                <Favorites />
              </AuthRoute>
            }
            />
        </Route>
      </Routes>
    </div>
    </AnimatePresence>
  );
}

export default App;
