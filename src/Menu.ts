import * as readlineSync from "readline-sync"

class Colors {
    static RESET = "\x1b[0m"
    static PINK = "\x1b[95m"
    static WHITE = "\x1b[97m"
    static CYAN = "\x1b[36m"
}

export class Menu {
    static iniciar(): void {
        let opcao: number;

        do {
            console.clear();
            console.log(Colors.CYAN + "==============================================" + Colors.RESET)
            console.log(Colors.PINK + "        🌸 PINK BANK 🌸             " + Colors.RESET)
            console.log(Colors.WHITE + "    Simples, seguro e do seu jeito. " + Colors.RESET)
            console.log(Colors.CYAN + "==============================================" + Colors.RESET)

            console.log(Colors.WHITE + "1 - Criar Conta")
            console.log("2 - Listar Contas")
            console.log("3 - Buscar Conta por Número")
            console.log("4 - Atualizar Dados da Conta")
            console.log("5 - Apagar Conta")
            console.log("6 - Sacar")
            console.log("7 - Depositar")
            console.log("8 - Transferir Valores")
            console.log("9 - Sair" + Colors.RESET)

            console.log(Colors.CYAN + "==============================================" + Colors.RESET)
            
            opcao = readlineSync.questionInt(Colors.PINK + "\nEscolha o que deseja: " + Colors.RESET)

            switch (opcao) {
                case 1:
                    console.log("✨ Criar Conta selecionado!")
                    break;
                case 2:
                    console.log("✨ Listar Contas selecionado!")
                    break;
                case 9:
                    console.log(Colors.PINK + "🌸 Obrigado por usar o Pink Bank! 🌸" + Colors.RESET)
                    break;
                default:
                    console.log(Colors.CYAN + "⚠️ Opção inválida!" + Colors.RESET)
            }

            if (opcao !== 9) readlineSync.question("\nPressione ENTER para continuar...")

        } while (opcao !== 9)
    }
}

Menu.iniciar()
