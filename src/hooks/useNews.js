import { useEffect, useState } from "react";
import { getNews } from "../services/apisService";

export const useNews = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [news, setNews] = useState([]);

    const loadNews = async() => {
        setIsLoading(true);
        const resp = await getNews();
        setNews(resp);
        setIsLoading(false);
    };

    useEffect(() => {
        loadNews();
    }, []);

    return {
        isLoading,
        news,
    };
};

