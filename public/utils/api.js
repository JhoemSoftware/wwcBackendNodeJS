const fetchApi = async (url) => {
    try {
        const api = (await fetch(url)).json();
        return api;
    } catch (e) {
        throw new Error ('No funcione');
    }
}

module.exports = fetchApi