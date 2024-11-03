import React, { useState } from 'react';
import { BiSolidBell } from 'react-icons/bi';
import Part from './Part';
import { utilIcons as icons } from '../utils/icons';
import { secondsToHHMMSS } from '../utils/utilArray';
import { HiOutlineBriefcase, HiOutlineCalendar, HiOutlineInformationCircle } from 'react-icons/hi';

const MainContent = ({ chapters }) => {
    const [selectedChapter, setSelectedChapter] = useState(chapters[0]);

    return (
        <div className="py-8 pr-8 bg-white h-full overflow-auto">
            {/* Notification and Profile Section */}
            <div className="flex justify-end mb-6">
                <div className="flex items-center space-x-4 text-[#172B4D]">
                <div className='p-2 bg-[#E7F8FF] rounded-lg'>
                <BiSolidBell className="text-2xl cursor-pointer transition duration-300 " />
                </div>
                    
                    <div className="bg-gray-300 w-12 h-12 rounded-full" />
                </div>
            </div>

            {/* Header Section */}
            <div className='p-4 border border-[#A4E6FF] rounded-lg '>
                <div className="bg-white p-4 rounded-lg flex items-center justify-between mb-4">
                    <div className='flex items-center p-2 justify-between gap-2 bg-gradient-to-b from-[#EFF5FF] to-[#EFF5FF00] rounded-lg '>
                        <div className='flex items-center space-x-2 p-3'>
                            <HiOutlineCalendar size={20}/>
                            <span className='text-black font-semibold text-sm'>Mentor Sessions</span>
                        </div>
                        <div className='flex items-center space-x-2 p-3 bg-white rounded-lg shadow-md border border-gray-300'>
                            <HiOutlineBriefcase size={20}/>
                            <span className='text-black font-semibold text-sm'>Learning Material</span>
                        </div>
                    </div>
                    <button className="">
                        <div className='flex items-center space-x-2 p-2 border border-[#99E4FF] rounded-lg'>
                            <HiOutlineInformationCircle size={20}/>
                            <span className=' text-black text-sm font-semibold'>How it works</span>
                        </div>
                    </button>
                </div>

                {/* Main Content Section */}
                <div className="grid grid-cols-3">
                    {/* Sidebar Chapters */}
                    <div className="col-span-1 bg-white p-4 rounded-lg">
                        <div className="flex flex-col space-y-2">
                            {chapters.map((chapter, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedChapter(chapter)}
                                    className={`text-sm font-semibold text-gray-600 p-4 rounded-sm transition duration-300 mt-2 border-b border-gray-200 ${selectedChapter === chapter
                                        ? 'bg-[#EFF5FF] text-blue-700'
                                        : 'hover:bg-gray-100'
                                        }`}
                                >
                                    <div className='flex items-center justify-between'>
                                        <span className='text-black font-semibold text-lg'>{chapter.title}</span>
                                        <div className='text-[#608AD2] flex items-center gap-2'>
                                            {icons['clock']}
                                            <span className='font-normal'>{secondsToHHMMSS(chapter.duration)}</span>

                                        </div>

                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Selected Chapter Parts */}
                    <div className="col-span-2">
                        {selectedChapter.parts.map((part, index) => (
                            <div key={index} className="mb-2">
                                <Part part={part} index={index + 1} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainContent;
