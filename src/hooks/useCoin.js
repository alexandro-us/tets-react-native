import { useEffect, useState } from "react";
import { getCoinChar } from "../services/apisService";

export const useCoinChar = (id) => {

    const [isLoading, setIsLoading] = useState(true);
    const [charData, setCharData] = useState([]);

    const loadCoinChar = async() => {
        setIsLoading(true);
        const resp = await getCoinChar(id);
        setCharData(resp);
        setIsLoading(false);
    };

    useEffect(() => {
        loadCoinChar();
    }, []);

    return {
        isLoading,
        charData,
    };
};

