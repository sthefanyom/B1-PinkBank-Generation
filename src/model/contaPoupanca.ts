import { Conta } from "./conta";

export class ContaPoupanca extends Conta {
  private rendimento: number; // em percentual (%)

  constructor(numero: number, titular: string, saldoInicial: number, rendimento: number) {
    super(numero, titular, saldoInicial);
    this.rendimento = rendimento;
  }

  public aplicarRendimento(): void {
    const ganho = this.saldo * (this.rendimento / 100);
    this.saldo += ganho;
    console.log(`Rendimento de R$${ganho.toFixed(2)} aplicado!`);
  }

  public visualizarDados(): void {
    super.visualizarDados();
    console.log(`Taxa de rendimento: ${this.rendimento}%`);
  }
}
