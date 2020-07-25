import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{

    constructor(cliente){
        super(0,cliente, 1001)
    }

    sacar(valor) {
        let taxa = 1.01;

        this._sacar(valor, taxa);
    }

}