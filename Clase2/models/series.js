const fs = require('fs');
require('./../database/db.json');
class Series {
    series = [];
    dbPath = 'Clase2/database/db.json';

    constructor(){
        this.leerBD();
    }

    buscarSerie(serie = 0){   
        const infoBD = this.series.find( s => s.id === Number(serie) )?.name;
        
        if(!infoBD) return;

        return infoBD;
    }

    agregarSeries(serie = ''){
        const dataBD = this.series.find( s => s.name === serie );

        if(dataBD) return;

        const ultimoRegistro = (this.series[this.series.length - 1].id) + 1;

        const nuevoRegistro = {
            id: ultimoRegistro,
            name: serie
        }

        this.series.push(nuevoRegistro);
        
        this.guardarBD();

        return nuevoRegistro;
    }

    editarSerie(id = 0, name = ''){
        const serie = this.series.find( s => s.id === id );
        
        if(!serie) return;

        serie.name = name;

        this.guardarBD();

        return serie;
    }

    eliminarSerie(id = 0){
        const infoBD = this.series.find( s => s.id === Number(id) );
        if(!infoBD) return;

        this.series = this.series.filter( s => s.id != Number(id) );
        
        this.guardarBD();

        return true;
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