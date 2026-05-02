import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Homepage from "../pages/homepage/Homepage"
import Books from "../pages/books/Books"
import BookDetails from "../pages/bookDetails/BookDetails"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: '/books',
        Component: Books,
      },
      {
        path:"/bookDetails/:id",
        Component: BookDetails,
        loader: () => fetch('/booksData.json').then(res => res.json()),
      }
    ],
    errorElement: <ErrorPage />,
  },
])

export default router;