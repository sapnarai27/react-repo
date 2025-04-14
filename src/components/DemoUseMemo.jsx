const DemoUseMemo = ({inputNumber, setInputNumber, primeNumber}) => {
    return (
      <div className="my-2 border border-black h-full w-full p-5">
        <div>Demo useMemo Hook</div>
        <input type="number" onChange={(e)=>setInputNumber(e.target.value)}  className="border p-3 m-3"/>
        <br/>
        {inputNumber}th Prime Number : {primeNumber}
      </div>
    );
  };
  
  export default DemoUseMemo;
  