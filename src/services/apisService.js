import axios from 'axios';

const api = axios.create();

const baseUrlCoins = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10&currency=USD';
const baseUrlNews = 'https://api.coinstats.app/public/v1/news/latest?skip=0&limit=20';
const baseUrlCoin = 'https://api.coinstats.app/public/v1/charts?period=1m&coinId';

export const getCriptos = async() => {
    try {
        const resp = api.get(baseUrlCoins);
        const data = await resp;
        return data.data.coins;
    } catch (error) {
        return [];
    }

};

export const getNews = async() => {
    try {
        const resp = api.get(baseUrlNews);
        const data = await resp;
        return data.data.news;
    } catch (error) {
        return [];
    }
};

export const getCoinChar = async(id) => {
    try {
        const resp = api.get(`${baseUrlCoin}=${id}`);
        const data = await resp;
        return data.data.chart;
    } catch (error) {
        return [];
    }
};
