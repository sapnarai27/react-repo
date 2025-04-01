import { useEffect, useState } from "react";
import { RES_DETAIL } from "./constants";

const useResDetails =(resId)=>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch(RES_DETAIL+resId)
        const jsonData = await data.json();
        const resInfo = jsonData.data;
        setResInfo(resInfo);
    }

    return resInfo;
}

export default useResDetails;