const gretins = () => {
    console.log('Hola Node JS');
}

const fetchApi = async (url) => {
    try {
        const api = (await fetch(url)).json()
        console.log(api)
    } catch (error) {
        throw new Error ('No funcione')
    }
}

module.exports = {
    gretins,
    fetchApi
}