import { memo } from "react";

const DemoUseCallback = ({ toDos, addToDo }) => {
  console.log("child rerender....");
  return (
    <div className="border border-black h-full w-full p-5">
      <div>Demo useCallback Hook</div>

      {toDos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
      <button className="bg-black text-white rounded p-2 cursor-pointer" onClick={addToDo}>
        Add Todo
      </button>
    </div>
  );
};

export default memo(DemoUseCallback);
