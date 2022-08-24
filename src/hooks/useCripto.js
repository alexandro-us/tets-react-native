import { useEffect, useState } from "react";
import { getCriptos } from "../services/apisService";

export const useCriptoCoins = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [coins, setCoins] = useState([]);

    const loadCoins = async() => {
        setIsLoading(true);
        const resp = await getCriptos();
        setCoins(resp);
        setIsLoading(false);
    };

    useEffect(() => {
        loadCoins();
    }, []);

    return {
        isLoading,
        coins,
    };
};

