import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routers";
import DefaultLayout from "./components/layout/DefaultLayout";
import ScrollToTop from "./contexts/ScrollToTop";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {routes.map(({ path, page: Page }) => (
          <Route
            key={path}
            path={path}
            element={
              <DefaultLayout>
                <Page />
              </DefaultLayout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
