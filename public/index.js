require('colors');
const fetchApi = require('./utils/api');

fetchApi('https://rickandmortyapi.com/api/character')
    .then((data) => {
        console.clear();
        console.log('==================================='.bgGreen);
        console.log(' Node JS • Women Who Code Medellín'.yellow);
        console.log('==================================='.bgGreen);
        for (let index = 0; index < data.results.length; index++) {
            let {id, name, species, gender} = data.results[index];
            species === 'Human' ? species = 'Persona 🌎' : species = 'Alien 👽'
            gender === 'Female' ? gender = 'Mujer 💗' : gender = 'Hombre 😎'
            console.log(' ');
            console.log(`${id}• `.red + `${name}`.blue + ' • ' + `${species}`.yellow + ' • ' + `${gender}`.cyan)
        }
    });