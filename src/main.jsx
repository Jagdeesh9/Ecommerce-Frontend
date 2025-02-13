import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure Tailwind styles are loaded
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import ProductList from "./features/productList/productList";
import Cart from "./features/cart/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element={<App/>}>
      <Route path="/product" element={<ProductList/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router}/>
    </Provider>
  </React.StrictMode>
);
