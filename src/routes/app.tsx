import { BrowserRouter, Routes, Route } from "react-router";
import Frontend from "../containers/frontend";

// Import all route components
import {
  Home,
  About,
  Shop,
  ProductCategories,
  Tag,
  Product,
  Search,
  Services,
  Service,
  FAQ,
  Download,
  Videos,
  Contact,
  Team,
  Error,
} from "../types/pages";

// Route config that matches navItems
const routeMap = {
  "/": Home,
  "/about": About,
  "/shop": Shop,
  "/product/:slug": Product,
  "/category/:slug": ProductCategories,
  "/tag/:slug": Tag,
  "/search": Search,
  "/services": Services,
  "/contact": Contact,
  "/service/:slug": Service,
  "/faq": FAQ,
  "/download": Download,
  "/videos": Videos,
  "/team": Team,
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Frontend />}>
          {Object.entries(routeMap).map(([path, Component]) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
