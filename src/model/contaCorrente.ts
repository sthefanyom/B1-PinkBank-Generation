import { Conta } from "./conta";

export class ContaCorrente extends Conta {
  private limite: number;

  constructor(numero: number, titular: string, saldoInicial: number, limite: number) {
    super(numero, titular, saldoInicial);
    this.limite = limite;
  }

  public sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo + this.limite) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso! (com limite)`);
    } else {
      console.log("Saldo insuficiente mesmo com limite.");
    }
  }

  public visualizarDados(): void {
    super.visualizarDados();
    console.log(`Limite disponível: R$${this.limite}`);
  }
}