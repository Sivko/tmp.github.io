export default function Tabs() {
  
  const Tab = ({ name }: { name: string }) => {
    return (<div className="h-full px-2 flex items-center justify-center hover:text-white border-r border-r-secondary cursor-pointer">
      {name}
    </div>)
  }

  return (
    <header className="h-[60px] border-b border-secondary w-full flex">
      <Tab name="Строительно монтажные работы" />
    </header>
  )
}