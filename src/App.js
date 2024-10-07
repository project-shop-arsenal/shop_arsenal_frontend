// import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ClientLayout from "./components/client/layout/ClientLayout";
import {Helmet} from 'react-helmet';
import Carousel from "./components/client/home/Carousel";
import Categories from "./components/client/home/Categories";
import FeaturedProducts from "./components/client/home/FeaturedProducts";
import ShopList from "./components/client/shop/ShopList";
import ProductDetail from "./components/client/shop/ProductDetail";
import Cart from "./components/client/cart/Cart";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                {/* Các route cho Client */}
                <Route path="/" element={
                    <>
                        <Helmet>
                            {/* Import CSS của client */}
                            <link rel="stylesheet" href="/css/bootstrap.css"/>
                            <link rel="stylesheet" href="/css/bootstrap-grid.css"/>
                            <link rel="stylesheet" href="/css/bootstrap-reboot.css"/>
                            <link rel="stylesheet" href="/css/style.css"/>
                        </Helmet>
                        <ClientLayout>
                            <Carousel/>
                            <Categories/>
                            <FeaturedProducts/>
                        </ClientLayout>
                    </>
                }/>
                <Route path="/shop" element={
                    <>
                        <Helmet>
                            {/* Import CSS của client */}
                            <link rel="stylesheet" href="/css/bootstrap.css"/>
                            <link rel="stylesheet" href="/css/bootstrap-grid.css"/>
                            <link rel="stylesheet" href="/css/bootstrap-reboot.css"/>
                            <link rel="stylesheet" href="/css/style.css"/>
                        </Helmet>
                        <ClientLayout>
                            <ShopList/>
                        </ClientLayout>
                    </>
                }/>
                <Route path="/productDetail" element={
                    <>
                        <Helmet>
                            {/* Import CSS của client */}
                            <link rel="stylesheet" href="/css/bootstrap.css"/>
                            <link rel="stylesheet" href="/css/bootstrap-grid.css"/>
                            <link rel="stylesheet" href="/css/bootstrap-reboot.css"/>
                            <link rel="stylesheet" href="/css/style.css"/>
                        </Helmet>
                        <ClientLayout>
                            <ProductDetail/>
                        </ClientLayout>
                    </>
                }/>
                <Route path="/Cart" element={
                    <>
                        <Helmet>
                            {/* Import CSS của client */}
                            <link rel="stylesheet" href="/css/bootstrap.css"/>
                            <link rel="stylesheet" href="/css/bootstrap-grid.css"/>
                            <link rel="stylesheet" href="/css/bootstrap-reboot.css"/>
                            <link rel="stylesheet" href="/css/style.css"/>
                        </Helmet>
                        <ClientLayout>
                            <Cart/>
                        </ClientLayout>
                    </>
                }/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
