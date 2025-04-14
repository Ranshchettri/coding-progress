import { Routes, Route, Outlet, Link } from "react-router";
import HomePage from "./pages/homePage";
import SingleProductPage, {
  OverviewPage,
  ReviewPage,
} from "./pages/product/signleProduct";
import ProductPage from "./pages/product";

links=[
  {
    path: "/Home",
    name: "Home",

  },
  {
    path: "/About",
    name: "About",
  },
  {
    path: "/Contact",
    name: "Contact",
  }
]
export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="contact" element={<div>Contact Page</div>} />
        <Route path="product">
          <Route element={<ProductPage />} index />
          <Route path=":productID" element={<SingleProductPage />}>
            <Route path="review" element={<ReviewPage />} />
            <Route index element={<OverviewPage />} />
          </Route>
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Route>
      <Route path="login" element={<div>Login Page</div>} />
      <Route path="register" element={<div>Register Page</div>} />
    </Routes>
  );
}

export function UserLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export function Navbar() {
  console.log("Navbar");
  return (
    <div>
      <div>Navbar</div>
      {["/", "/contact", "/product"].map((path) => (
        <Link key={path} to={path}>
          {path}
        </Link>
      ))}
    </div>
  );
}

export function Footer() {
  console.log("Footer");
  return (
    <div>
      <div>Footer</div>
    </div>
  );
}





