import React from 'react';
import TopBar from './TopBar';
import SideBar from './SideBar';

function Layout({children}) {
    return (
        <div className="h-screen min-w-full min-h-screen overflow-hidden bg-blue-100">
            <TopBar/>
            <SideBar/>
            <main className="pt-16 pl-40">
                {children}
            </main>
        </div>
    );
}

export default Layout;