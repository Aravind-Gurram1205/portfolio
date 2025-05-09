import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            {/* Navigation Bar */}
            <nav className="bg-gradient-to-r from-blue-400 to-teal-400 bg-opacity-90 backdrop-blur-md sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-white">Portfolio</h1>
                </div>
            </nav>

            {/* Page Content */}
            <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
