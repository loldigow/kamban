"use strict"

class kamban{
    constructor()
    {
        this._filas=[];
    }
    insert_lista(params)
    {
        this._filas.push(new fila(params));
    }
}