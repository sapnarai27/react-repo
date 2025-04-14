import { useCallback, useMemo, useState } from "react";
import DemoUseCallback from "./DemeUseCallback";
import DemoUseMemo from "./DemoUseMemo";
import DemoUseRef from "./DemoUseRef";

const DemoHooks = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [inputNumber, setInputNumber] = useState(0);
  const [toDos, setToDos] = useState([]);

  const primeNumber = useMemo(() => {
    console.log(inputNumber);
    let count = 0;
    let num = 2;
    const isPrime = (num) => {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
    while (count < inputNumber) {
      if (isPrime(num)) {
        count++;
      }
      num++;
    }
    return num - 1;
  }, [inputNumber]);

  const addToDo = useCallback(() => {
    setToDos([...toDos, "todo"]);
  }, [toDos]);

  return (
    <>
      <div className={"m-auto w-6/12 p-5 " + (isDarkTheme && "bg-gray-500")}>
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className="bg-black text-white rounded p-2 m-2 cursor-pointer">
          Change Theme
        </button>
        <DemoUseCallback toDos={toDos} addToDo={addToDo} />
        <DemoUseMemo
          inputNumber={inputNumber}
          setInputNumber={setInputNumber}
          primeNumber={primeNumber}
        />
        <DemoUseRef/>
      </div>
    </>
  );
};
export default DemoHooks;
