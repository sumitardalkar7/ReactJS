import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo , setResInfo ] = useState(null);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch('https://corsproxy.org/?' + encodeURIComponent(MENU_API_URL) + resId);
        const json = await data.json();
        // console.log(json);
        setResInfo(json.data);

    }

    return resInfo;
}

export default useRestaurantMenu;