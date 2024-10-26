import { FcFlashOn } from "react-icons/fc";
import { FaCalendar, FaClock } from "react-icons/fa";
import { RiTodoLine } from "react-icons/ri";

export const Features = [
    { text: 'ToDo List', icon: < RiTodoLine className="fill-sky-300" /> },
    { text: 'Calendar', icon: < FaCalendar className="fill-violet-500" /> },
    { text: 'Reminders', icon: < FcFlashOn /> },
    { text: 'Planning', icon: <FaClock className="fill-purple-500" /> },
]

export const Company = [
    { text: 'History' },
    { text: 'Our team' },
    { text: 'Blog' },
]