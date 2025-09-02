import readlinesync = require('readline-sync')
import { Conta } from './src/model/Conta'
import { ContaCorrente } from './src/model/ContaCorrente'
import { ContaPoupanca } from './src/model/ContaPoupanca'


class Colors {
    static RESET = "\x1b[0m"
    static PINK = "\x1b[95m"
    static WHITE = "\x1b[97m" 
}

function sobre(): void {
    console.log(Colors.PINK + "**********************************" + Colors.RESET)
    console.log(Colors.PINK + "        BANCO - PINK BANK  🐽  " + Colors.RESET)
    console.log(Colors.PINK + "**********************************" + Colors.RESET)
    console.log(Colors.PINK + "Desenvolvido por: Sthefany O Mattos" + Colors.RESET)
    console.log(Colors.PINK + "GitHub: @Sthefanyom" + Colors.RESET)
    console.log(Colors.PINK +"Contato: om.sthefany@gmail.com" + Colors.RESET)
    console.log(Colors.PINK + "**********************************" + Colors.RESET)
}

function keyPress(): void {
    console.log(Colors.RESET, "")
    console.log("Pressione ENTER para continuar...")
    readlinesync.prompt()
}
export function main() {
    let opcao: number;

   // Objeto da Classe ContaCorrente (Teste)
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    // Objeto da Classe ContaPoupanca (teste)
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();


    while (true) {
        console.log(Colors.PINK + "*********************************************" + Colors.RESET)
        console.log(Colors.PINK + "          BANCO - PINK BANK  🐽         " + Colors.RESET)
        console.log(Colors.PINK + "*********************************************" + Colors.RESET)

        console.log(Colors.PINK + "   1 - Criar Conta 🐷                   " + Colors.RESET)
        console.log(Colors.PINK + "   2 - Listar todas as Contas            " + Colors.RESET)
        console.log(Colors.PINK + "   3 - Buscar Conta por Numero           " + Colors.RESET)
        console.log(Colors.PINK + "   4 - Atualizar Dados da Conta          " + Colors.RESET)
        console.log(Colors.PINK + "   5 - Apagar Conta                      " + Colors.RESET)
        console.log(Colors.PINK + "   6 - Sacar                             " + Colors.RESET)
        console.log(Colors.PINK + "   7 - Depositar                         " + Colors.RESET)
        console.log(Colors.PINK + "   8 - Transferir valores entre Contas   " + Colors.RESET)
        console.log(Colors.PINK + "   9 - Sair  🐖                         " + Colors.RESET)

        console.log(Colors.PINK + "Entre com a opção desejada 💕:          " + Colors.RESET)
        opcao = readlinesync.questionInt("")

        if (opcao == 9) {
            console.log(Colors.PINK + "Pink Bank - O porquinho que cuida do seu futuro." + Colors.RESET)
            sobre()
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log(Colors.PINK + "\nCriar Conta\n" + Colors.RESET)
                keyPress()
                break;
            case 2:
                console.log(Colors.PINK + "\nListar todas as Contas\n" + Colors.RESET)
                keyPress()
                break;
            case 3:
                console.log(Colors.PINK + "\nConsultar dados da Conta - por número\n" + Colors.RESET)
                keyPress()
                break;
            case 4:
                console.log(Colors.PINK + "\nAtualizar dados da Conta\n" + Colors.RESET)
                keyPress()
                break;
            case 5:
                console.log(Colors.PINK + "\nApagar uma Conta\n" + Colors.RESET)
                keyPress()
                break;
            case 6:
                console.log(Colors.PINK + "\nSaque\n" + Colors.RESET)
                keyPress()
                break;
            case 7:
                console.log(Colors.PINK + "\nDepósito\n" + Colors.RESET)
                keyPress()
                break;
            case 8:
                console.log(Colors.PINK + "\nTransferência entre Contas\n" + Colors.RESET)
                keyPress()
                break;
            default:
                console.log(Colors.PINK + "\nOpção Inválida!\n" + Colors.RESET)
                keyPress()
                break;
        }
    }
}

main()