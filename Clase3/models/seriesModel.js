const fs = require('fs');
require('./../database/db.json');

class Serie {
    _series = [];
    _dbPath = 'Clase3/database/db.json';

    constructor(){
        this.readDataBase();
    }

    findSerieById(id = 0){
        const serie = this._series.find( s => s.id === Number(id) );
        if(!serie) return;
        return serie;
    }

    readDataBase(){
        if(!fs.existsSync(this._dbPath)) return;

        const info = fs.readFileSync(this._dbPath, { encoding: 'utf-8' });
        const data = JSON.parse(info);
        this._series = data.series;
    }
}

module.exports = Serie;