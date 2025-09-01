import * as readlineSync from "readline-sync";
import { Conta } from "./model/conta";
import { ContaCorrente } from "./model/contaCorrente";
import { ContaPoupanca } from "./model/contaPoupanca";

class Colors {
  static RESET = "\x1b[0m";
  static PINK = "\x1b[95m";
  static WHITE = "\x1b[97m";
  static CYAN = "\x1b[36m";
}

export class Menu {
  static iniciar(): void {
    let opcao: number;
    let contas: Conta[] = [];
    let numeroConta = 1;

    do {
      console.clear();
      console.log(Colors.CYAN + "==============================================" + Colors.RESET);
      console.log(Colors.PINK + "        🌸 PINK BANK 🌸             " + Colors.RESET);
      console.log(Colors.WHITE + "    Simples, seguro e do seu jeito. " + Colors.RESET);
      console.log(Colors.CYAN + "==============================================" + Colors.RESET);

      console.log(Colors.WHITE + "1 - Criar Conta");
      console.log("2 - Listar Contas");
      console.log("3 - Buscar Conta por Número");
      console.log("4 - Atualizar Dados da Conta");
      console.log("5 - Apagar Conta");
      console.log("6 - Sacar");
      console.log("7 - Depositar");
      console.log("8 - Transferir Valores");
      console.log("9 - Sair" + Colors.RESET);

      console.log(Colors.CYAN + "==============================================" + Colors.RESET);

      opcao = readlineSync.questionInt(Colors.PINK + "\nEscolha o que deseja: " + Colors.RESET);

      switch (opcao) {
        case 1:
          console.log("✨ Criar Conta selecionado!");
          const titular = readlineSync.question("Nome do Titular: ");
          const saldoInicial = readlineSync.questionFloat("Saldo Inicial: R$ ");

          const tipo = readlineSync.questionInt("Digite 1 para Conta Corrente ou 2 para Conta Poupança: ");
          let novaConta: Conta;

          if (tipo === 1) {
            const limite = readlineSync.questionFloat("Informe o limite da Conta Corrente: R$ ");
            novaConta = new ContaCorrente(numeroConta++, titular, saldoInicial, limite);
          } else {
            const rendimento = readlineSync.questionFloat("Informe a taxa de rendimento da Poupança (%): ");
            novaConta = new ContaPoupanca(numeroConta++, titular, saldoInicial, rendimento);
          }

          contas.push(novaConta);
          console.log("✅ Conta criada com sucesso!");
          break;

        case 2:
          console.log("✨ Listar Contas selecionado!");
          if (contas.length === 0) {
            console.log("Nenhuma conta cadastrada.");
          } else {
            contas.forEach(c => c.visualizarDados());
          }
          break;

        case 3:
          const numeroBusca = readlineSync.questionInt("Número da conta: ");
          const encontrada = contas.find(c => c.getNumero() === numeroBusca);
          if (encontrada) {
            encontrada.visualizarDados();
          } else {
            console.log("Conta não encontrada.");
          }
          break;

        case 6:
          const numSaque = readlineSync.questionInt("Número da conta: ");
          const contaSaque = contas.find(c => c.getNumero() === numSaque);
          if (contaSaque) {
            const valor = readlineSync.questionFloat("Valor do saque: R$ ");
            contaSaque.sacar(valor);
          } else {
            console.log("Conta não encontrada.");
          }
          break;

        case 7:
          const numDeposito = readlineSync.questionInt("Número da conta: ");
          const contaDeposito = contas.find(c => c.getNumero() === numDeposito);
          if (contaDeposito) {
            const valor = readlineSync.questionFloat("Valor do depósito: R$ ");
            contaDeposito.depositar(valor);
          } else {
            console.log("Conta não encontrada.");
          }
          break;

        case 9:
          console.log(Colors.PINK + "🌸 Obrigado por usar o Pink Bank! 🌸" + Colors.RESET);
          break;

        default:
          console.log(Colors.CYAN + "⚠️ Opção inválida!" + Colors.RESET);
      }

      if (opcao !== 9) readlineSync.question("\nPressione ENTER para continuar...");

    } while (opcao !== 9);
  }
}

Menu.iniciar();
