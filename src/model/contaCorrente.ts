import { Conta } from "./Conta"

//Criando a Classe Filha da Conta
export class ContaCorrente extends Conta {

    private _limite: number

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number) {
        super( numero, agencia, tipo, titular, saldo)
        this._limite = limite
    }

//Criando Get e Set da Classe Filha
public get limite() {
    return this._limite
    }

public set limite(limite: number) {
    this.limite = limite
    }

//Criando Método Específico
public sacar (valor: number): boolean {
    if((this.saldo + this._limite) < valor) {
        console.log ("\n Saldo Insuficiente!")
        return false
    }
    this.saldo = this.saldo - valor
        return true
}

public visualizar(): void {
    super.visualizar()
    console.log("limite: " + this._limite.toFixed(2))

}
    }