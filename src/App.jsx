import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AboutPage from "./pages/AboutPage"
import ProductPricing from "./pages/ProductPricing"
import Layout from "./components/Layout"
import ScrollToTop from "./components/ScrollToTop"

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <AboutPage />,
      },
      {
        path: "/pricing",
        element: <ProductPricing />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
