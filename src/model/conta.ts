export class Conta {
  protected numero: number
  protected titular: string
  protected saldo: number

  constructor(numero: number, titular: string, saldoInicial: number) {
    this.numero = numero
    this.titular = titular
    this.saldo = saldoInicial
  }

  public getNumero(): number {
    return this.numero
  }

  public getTitular(): string {
    return this.titular;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor
      console.log(`Depósito de R$${valor} realizado com sucesso!`)
    } else {
      console.log("Valor inválido para depósito.")
    }
  }

  public sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor
      console.log(`Saque de R$${valor} realizado com sucesso!`)
    } else {
      console.log("Saldo insuficiente ou valor inválido.")
    }
  }

  public visualizarDados(): void {
    console.log(
      `Conta: ${this.numero} | Titular: ${this.titular} | Saldo: R$${this.saldo}`
    )
  }
}