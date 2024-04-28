import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className="bg-white rounded-lg w-11/12  py-2 text-center font-bold mb-8">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col items-center">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
