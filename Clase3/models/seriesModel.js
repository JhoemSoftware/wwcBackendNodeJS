const fs = require('fs');
require('../database/db.json');

class Serie {
    _series = [];
    _dbPath = 'Clase3/database/db.json';

    constructor(){
        this.readDataBase();
    }

    readDataBase(){
        if(fs.existsSync(this._dbPath)) return;

        const info = fs.readFileSync(thi._dbPath, { encoding: 'utf-8' });
        const data = JSON.parse(info);
        this._series = data.series;
    }
}

module.exports = Serie;