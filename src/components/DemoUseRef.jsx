import { useRef, useState } from "react";

const DemoUseRef = () => {
  const [y, setY] = useState(0);
  const z = useRef(0); // z = { current:0 } we can assign any data type to this current variable. It's not used only for number.
  let x = 0;
  return (
    <>
      <div className="border border-black h-full w-full p-5">
        <div>Demo useRef Hook</div>

        <button
          onClick={() => {
            x += 1; //It will update the value of x but the component will not rerender on update of x.
            // But If my component rerender the value of x again become 0 as initial value
            console.log(x);
          }}
          className="bg-black text-white rounded p-2 cursor-pointer m-2">
          Increase X
        </button>
        <span>X : {x}</span>
        <hr className="text-gray-300"/>
        <button
          onClick={() => {
            setY(y + 1); // the component will be re-render on update on value of y. 
                        // Once y updated and re-renders the page, the value of x again becom 0 as initial value and the value of z stays as it's updated value.
          }}
          className="bg-black text-white rounded p-2 cursor-pointer m-2">
          Increase Y
        </button>
        <span>Y : {y}</span>
        <hr className="text-gray-300"/>
        <button
          onClick={() => {
            z.current += 1; // It will update the value of z but it will not re-render the component.
                            // But it keeps the updated value of z after re-render.
            console.log(z.current)
          }}
          className="bg-black text-white rounded p-2 cursor-pointer m-2">
          Increase z
        </button>
        <span>Z : {z.current}</span>
      </div>
    </>
  );
};

export default DemoUseRef;
