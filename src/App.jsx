import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AboutPage from "./pages/AboutPage"
import ProductPricing from "./pages/ProductPricing"
import Layout from "./components/Layout"
import ScrollToTop from "./components/ScrollToTop"
import TestimonialPage from "./pages/TestimonialPage"

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
      {
        path: "/testimonial",
        element: <TestimonialPage />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
