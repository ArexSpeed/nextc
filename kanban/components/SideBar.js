import React from 'react';
import { UserGroupIcon, ServerIcon, CalendarIcon, ChartSquareBarIcon,
CogIcon } from '@heroicons/react/outline';

function SideBar(props) {
    return (
        <div className="fixed inset-y-0 left-0 w-40 bg-white">
            <h1 className="flex items-center justify-center h-16 text-2xl font-bold text-white bg-purple-600">hussle</h1>

            <ul className="flex flex-col h-full text-lg">
                <li className="flex flex-col items-center justify-center text-gray-500 py-7">
                    <UserGroupIcon className="w-7 h-7"/>
                    Manage
                </li>
                <li className="flex flex-col items-center justify-center font-bold text-purple-500 border-l-4 border-purple-500 py-7">
                    <ServerIcon className="text-purple-500 w-7 h-7"/>
                    Boards
                </li>
                <li className="flex flex-col items-center justify-center text-gray-500 py-7">
                    <CalendarIcon className="w-7 h-7"/>
                    Schedule
                </li>
                <li className="flex flex-col items-center justify-center text-gray-500 py-7">
                    <ChartSquareBarIcon className="w-7 h-7"/>
                    Report
                </li>

                <li className="flex flex-col items-center justify-center mt-auto mb-16 text-gray-500 py-7">
                    <CogIcon className="w-7 h-7"/>
                    Settings
                </li>
            </ul>
        </div>
    );
}

export default SideBar;