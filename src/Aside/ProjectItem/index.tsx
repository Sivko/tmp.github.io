import { BsGrid1X2Fill } from "react-icons/bs";


export default function ProjectItem({ name }: { name: string }) {

  return (<div className="flex items-center text-white gap-2 cursor-pointer">
    <BsGrid1X2Fill size={22} />
    <span className="w-full truncate">{name}</span>
  </div>)
}