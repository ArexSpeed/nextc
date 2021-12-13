import React from 'react';
import {SearchIcon, AtSymbolIcon, BellIcon} from '@heroicons/react/outline';
import Image from 'next/image';

function TopBar(props) {
    return (
        <div className="fixed flex items-center justify-between w-full h-16 pl-40 pr-5 bg-gradient-to-r from-purple-400 to-blue-500">
            <div className="flex items-center px-5">
                <SearchIcon className="w-5 h-5 text-white"/>
                <input type="text" placeholder="Search for tasks ..."
                className="text-lg text-white placeholder-gray-200 bg-transparent border-0 outline-none  focus:ring-0"/>
            </div>
            <div className="flex space-x-6">
                <AtSymbolIcon className="text-white w-7 h-7"/>
                <BellIcon className="text-white w-7 h-7"/>
                <div className="flex items-center text-white">
                    <h3 className="mr-3 font-bold">M. John Doe</h3>
                    <Image src="https://randomuser.me/api/portraits/men/75.jpg"
                        width="36" height="36" objectFit="cover"
                        className="rounded-full "/>
                </div>
            </div>
        </div>
    );
}

export default TopBar;