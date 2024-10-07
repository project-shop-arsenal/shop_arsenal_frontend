// src/components/client/ClientLayout.js
import React from 'react';
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Topbar from "../common/Topbar";

const ClientLayout = ({ children }) => {
    return (
        <div>
            <Topbar/>

            {/* Navbar cho phần client */}
            <Navbar />

            {/* Nội dung chính của các trang client */}
            <main>
                {children}
            </main>

            {/* Footer cho phần client */}
            <Footer />
        </div>
    );
};

export default ClientLayout;
