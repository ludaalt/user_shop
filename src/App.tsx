import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";

import ProductsProvider from "./context/context";

const App: React.FC = () => {
  return (
    <ProductsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<MainPage />} />
          <Route path={"/cart"} element={<CartPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ProductsProvider>
  );
};

export default App;
