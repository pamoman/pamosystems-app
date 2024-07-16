/*
 * Config - Fetch
 */

const fetchInstance = async (url, params = {}) => {
    try {
        const baseURL = process.env.NEXT_PUBLIC_API_URL;
        const cache = process.env.NODE_ENV ? 'no-store' : 'force-cache';
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        const res = await fetch(baseURL + url, { cache, headers, ...params });

        const data = await res.json();

        return data;
    } catch(e) {
        console.log(e.message);

        return null;
    }
};

export default fetchInstance;