const fs = require('fs');

require('./../database/db.json');
class Series {
    series = [];
    dbPath = 'Clase2/database/db.json';

    constructor(){
        this.leerBD();
    }

    agregarSeries(serie = ''){
        const ultimoRegistro = (this.series[this.series.length - 1].id) + 1;

        const nuevoRegistro = {
            id: ultimoRegistro,
            serie
        }

        this.series.push(nuevoRegistro);
        
        this.guardarBD();

        return nuevoRegistro;
    }

    buscarSerie(serie = 0){   
        const infoBD = this.series.find( s => s.id === Number(serie))?.name;
        
        if(!infoBD) return;

        return infoBD;
    }

    guardarBD(){
        const manyRows = {
            series: this.series
        };

        fs.writeFileSync( this.dbPath, JSON.stringify(manyRows) );
    }

    leerBD(){
        if(!fs.existsSync(this.dbPath)) return;

        const info = fs.readFileSync(this.dbPath,{ encoding: 'utf-8' });
        const data = JSON.parse(info);
        this.series = data.series;
    }
}

module.exports = Series;