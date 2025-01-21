import React from 'react';
import Sidebar from './Sidebar';


interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children}) =>
{
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />
            {/* Main Content */}
            <div className="flex-1 bg-gray-100 p-6">{children}</div>
        </div>
    );
};

export default AdminLayout;
