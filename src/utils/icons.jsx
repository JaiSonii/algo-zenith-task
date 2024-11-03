import { GoClock } from "react-icons/go";
import { HiOutlineChartBar, HiOutlineDocumentDuplicate, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { IoPlayOutline } from "react-icons/io5";
import { PiPlayCircle } from "react-icons/pi";
import { RxCode } from "react-icons/rx";


export const utilIcons  = {
    video : <PiPlayCircle size={20}/>,
    article : <HiOutlineQuestionMarkCircle size={20}/>,
    quiz : <HiOutlineQuestionMarkCircle size={20}/>,
    codingExercise : <RxCode size={20}/>,
    duplicate : <HiOutlineDocumentDuplicate size={20}/>,
    clock : <GoClock size={20}/>,
    chart : <HiOutlineChartBar size={20}/>,
    combined : <HiOutlineDocumentDuplicate size={20}/>,
}