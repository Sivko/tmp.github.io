import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ProjectItem from "./ProjectItem";

export default function Aside() {

  const projects = [{ name: "По объекту" }, { name: "Объекты" }]

  return (
    <div className="w-[300px] border-r border-r-secondary h-auto">
      <header className="flex justify-between items-center border-b border-b-secondary px-4 h-[60px]">
        <div className="leading-none">
          <div>Название проекта</div>
          <span className="text-sm">Аббревиатура</span>
        </div>
        <button className="">
          <MdOutlineKeyboardArrowDown size={28} />
        </button>
      </header>
      <div className="px-4 flex gap-2 flex-col pt-4">
        {projects.map((item) => <ProjectItem key={item.name} {...item} />)}
      </div>
    </div>)
}