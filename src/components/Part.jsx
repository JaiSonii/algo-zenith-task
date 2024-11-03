import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { utilIcons as icons } from '../utils/icons';
import { secondsToHHMMSS } from '../utils/utilArray';

const Part = ({ part, index }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-md border border-[#A4E6FF] relative transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 relative">
                <div>
                    <span className="text-[#17384D] text-sm font-normal">PART {index}</span>
                    <h2 className="text-black font-semibold text-lg mt-1">{part.title}</h2>
                </div>
                <div>
                    <div className="flex items-center space-x-4 text-[#17384D] text-sm">
                        <div className="flex items-center gap-2">
                            {icons['clock']}
                            <span>{secondsToHHMMSS(part.duration)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {icons['chart']}
                            <span>{part.difficulty}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {icons['duplicate']}
                            <span>{part.noOfModules}</span>
                        </div>
                        <div
                            onClick={() => setOpen(prev => !prev)}
                            className={`cursor-pointer transform transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
                        >
                            {open ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <span className="p-1 bg-[#EFF5FF] font-normal rounded-md text-xs border border-[#99E4FF] mt-2">
                            {part.precentComplete}% Complete
                        </span>
                    </div>
                </div>

                {/* Progress bar with filled and unfilled parts */}
                <div className="absolute bottom-0 left-0 w-full h-1 rounded-b-lg bg-[#EFF5FF]">
                    <div
                        className="h-full bg-[#172B4DD9] rounded-b-lg transition-all duration-500 ease-in-out"
                        style={{ width: `${part.precentComplete}%` }}
                    />
                </div>
            </div>

            {/* Expandable content with transition */}
            <div
                className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[1000px] opacity-100 px-4 py-2' : 'max-h-0 opacity-0'}`}
            >
                {open && part.content.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-between hover:bg-gray-100 px-2 py-4 my-4 rounded-md transition duration-300 border-b border-gray-200"
                    >
                        <div className='flex items-center gap-2 text-[#3467AE]'>
                            {icons[item.type]}
                            <span className="text-black font-semibold">{item.title}</span>
                        </div>
                        <div className='flex items-center gap-2 text-[#17384D]'>
                            {icons['clock']}
                            <span className="font-normal">{secondsToHHMMSS(item.duration)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Part;
