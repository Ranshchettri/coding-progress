// import { useEffect, useState } from "react";
// import { Link, Outlet, useLocation, useParams } from "react-router";
// export default function SingleProductPage() {
//   const location = useLocation();
//   console.log(location);
//   const { productID } = useParams();
//   const [product, setProduct] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [errr, setError] = useState(null);
//   const getData = async () => {
//     setIsError(false);
//     setIsLoading(true);
//     try {
//       const res = await fetch(`https://fakestoreapi.com/products/${productID}`);
//       const data = await res.json();
//       if (data) {
//         setProduct(data);
//       }
//     } catch (errr) {
//       console.error(errr);
//       setIsError(true);
//       setError("something went wrong while featching data");
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   useEffect(() => {
//     getData();
//   }, []);
//   const isINTabPage = location?.pathname?.split("/").filter(Boolean).at(-1);
//   console.log(isINTabPage == "review" ? "../" : "#");
//   return (
//     <div>
//       <h1>Single Product Page</h1>
//       {isLoading ? (
//         <div>loading...</div>
//       ) : isError ? (
//         <div>{errr}</div>
//       ) : (
//         <div
//           style={{
//             border: "1px solid",
//             backgroundColor: "purple",
//             color: "white",
//             padding: "1rem",
//           }}
//         >
//           <img src={product?.image} style={{ height: "3rem" }} />
//           <h3>{product?.title}</h3>
//           <h3>{product?.description}</h3>
//         </div>
//       )}
//       <div style={{ display: "flex", gap: "1rem" }}>
//         <button>
//           <Link to="review">review</Link>
//         </button>
//         <button>
//           <Link to={isINTabPage == "review" ? `./` : "#"}>overview</Link>
//         </button>
//       </div>
//       <Outlet />
//     </div>
//   );
// }

// export function ReviewPage() {
//   return (
//     <div>
//       <div>
//         <Link to={"../"}>Go back</Link>
//       </div>
//       <h1>review Page</h1>
//     </div>
//   );
// }

// export function OverviewPage() {
//   return (
//     <div>
//            <h1>Overview Page</h1>
//     </div>
//   );
// }










import { Routes, Route, Outlet, Link } from "react-router";
import HomePage from "./pages/homePage";
import SingleProductPage, {
  OverviewPage,
  ReviewPage,
} from "./pages/product/signleProduct";
import ProductPage from "./pages/product";

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