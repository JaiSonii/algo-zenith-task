import React, { useState } from 'react';
import {  HiOutlineChartBar, HiOutlineClipboard, HiOutlineLightBulb, HiOutlineStar, HiOutlineUserGroup, HiOutlineViewGrid } from 'react-icons/hi';
import { TbMenu2 } from 'react-icons/tb';

const LeftSidebar = () => {
    const menuItems = [
        {
            label: 'Dashboard',
            icon: <HiOutlineViewGrid size={25} />,
        },
        {
            label: 'Learn',
            icon: <HiOutlineLightBulb size={25} />,
        },
        {
            label: 'Forums',
            icon: <HiOutlineUserGroup size={25} />,
        },
        {
            label: 'Upskill',
            icon: <HiOutlineClipboard size={25} />,
        },
        {
            label: 'Contest',
            icon: <HiOutlineChartBar size={25} />,
        },
        {
            label: 'Leaderboard',
            icon: <HiOutlineStar size={25} />,
        },
    ];

    const [selected, setSelected] = useState('Upskill');

    return (
        <div className="p-6 flex flex-col items-center gap-4 shadow-lg bg-gradient-to-t from-[#EFF5FF] to-[#EFF5FF00] h-full">
            {/* Logo or Title */}


            {/* Menu Items */}
            <div className="w-full flex flex-col gap-2 items-start">
                <div className="mb-6 py-3 px-4 font-bold text-2xl text-[#172B4D] flex items-center gap-4">
                    <TbMenu2 />
                    <h1 className="">AlgoZenith</h1>
                </div>
                {menuItems.map((item) => (
                    <div onClick={()=>setSelected(item.label)}
                        key={item.label}
                        className={`flex items-center gap-4 w-full py-3 px-4 text-[#172B4D] hover:bg-blue-100 rounded-lg cursor-pointer transition-all duration-300 ${selected === item.label ? 'bg-[#D6F4FF]' : ''}`}
                    >
                        {item.icon}
                        <span className="text-lg font-medium">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeftSidebar;
