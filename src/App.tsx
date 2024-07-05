import { IoAppsSharp } from "react-icons/io5";
import { IoArrowUndo } from "react-icons/io5";
import Aside from "./Aside";
import Main from "./Main";

function App() {
  return (
    <div className="text-secondary min-h-[100dvh]">
      <header className="flex gap-4 border border-background border-b-secondary px-4" >
        <button><IoAppsSharp /></button>
        <button><IoArrowUndo /></button>
        <button className="active">Просмотр</button>
        <button>Управление</button>
      </header>
      <div className="flex min-h-[calc(100dvh-42px)]">
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
