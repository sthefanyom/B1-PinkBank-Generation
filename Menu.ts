import readlinesync = require("readline-sync")
import { ContaCorrente } from './src/model/ContaCorrente'
import { ContaPoupanca } from './src/model/ContaPoupanca'
import { ContaController } from './src/controller/ContaController'


class Colors {
    static RESET = "\x1b[0m"
    static PINK = "\x1b[95m"
    static WHITE = "\x1b[97m" 
}

export function main() {

    //Intanciar da Classe Controller
    let contas: ContaController = new ContaController()
    // Váriaveis Extras
    let  opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number
    let titular: string
    const tiposContas = ['Conta Corrente' , 'Conta Poupanca']
    // Constas Teste
    console.log("\nCriar Contas\n");

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);

    contas.listarTodas();

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
                
                console.log("Digite o número da agência: ")
                agencia = readlinesync.questionInt("")

                console.log("Digite o Nome do Titular da conta: ")
                titular = readlinesync.question("")

                console.log("\nDigite o tipo da Conta: ")
                tipo = readlinesync.keyInSelect(tiposContas, "", {cancel: false}) +1

                console.log("\nDigite o Saldo da conta (R$): ")
                saldo = readlinesync.questionFloat("")

                switch (tipo) {
                    case 1:
                    console.log("Digite o Limite da Conta (R$): ")
                    limite = readlinesync.questionFloat("")
                    contas.cadastrar(
                        new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo,limite))
                        break

                    case 2:
                        console.log("Digite o Dia do aniversário da Conta Poupança: ")
                        aniversario = readlinesync.questionInt("")
                        contas.cadastrar( new ContaPoupanca (contas.gerarNumero(), agencia,tipo, titular, saldo, aniversario))
                        break   
                
                    }

                keyPress()
                break;

            case 2:
                console.log(Colors.PINK + "\nListar todas as Contas\n" + Colors.RESET)
                contas.listarTodas()
                keyPress()
                break;
            case 3:
                console.log(Colors.PINK + "\nConsultar dados da Conta - por número\n" + Colors.RESET)
                 
                console.log("Digite o número da Conta: ")
                numero = readlinesync.questionInt("")
                contas.procurarPorNumero(numero)
            
                keyPress()
                break;
            case 4:
                console.log(Colors.PINK + "\nAtualizar dados da Conta\n" + Colors.RESET)

                    console.log("Digite o número da Conta: ");
        numero = readlinesync.questionInt("");

        let conta = contas.buscarNoArray(numero);

        if (conta != null) {

            console.log("Digite o Número da agência: ");
            agencia = readlinesync.questionInt("");

            console.log("Digite o Nome do Titular da conta: ");
            titular = readlinesync.question("");

            tipo = conta.tipo;

            console.log("\nDigite o Saldo da conta (R$): ");
            saldo = readlinesync.questionFloat("");

            switch (tipo) {
                case 1:
                    console.log("Digite o Limite da Conta (R$): ");
                    limite = readlinesync.questionFloat("");
                    contas.atualizar(
                        new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                    break;
                case 2:
                    console.log("Digite o Dia do aniversário da Conta Poupança: ");
                    aniversario = readlinesync.questionInt("");
                    contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                    break;
            }

        } else {
            console.log(Colors.PINK + "\nA Conta numero: " + numero + " não foi encontrada!", Colors.RESET);
    }
                keyPress()
                break;
            case 5:
                console.log(Colors.PINK + "\nApagar uma Conta\n" + Colors.RESET)

                console.log("Digite o número da Conta: ")
                numero = readlinesync.questionInt("")
                contas.deletar(numero)

                keyPress()
                break;
            case 6:
                console.log(Colors.PINK + "\nSaque\n" + Colors.RESET)
                console.log("Digite o número da Conta: ");
                    numero = readlinesync.questionInt("");

                    console.log("\nDigite o valor do Saque (R$): ");
                    valor = readlinesync.questionFloat("");

                    contas.sacar(numero, valor);
                keyPress()
                break;
            case 7:
                console.log(Colors.PINK + "\nDepósito\n" + Colors.RESET)
                 console.log("Digite o número da Conta: ");
                    numero = readlinesync.questionInt("");

                    console.log("\nDigite o valor do Depósito (R$): ");
                    valor = readlinesync.questionFloat("");

                    contas.depositar(numero, valor);
                keyPress()
                break;
            case 8:
                console.log(Colors.PINK + "\nTransferência entre Contas\n" + Colors.RESET)
                console.log("Digite o número da Conta de Origem: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o número da Conta de Destino: ");
                numeroDestino = readlinesync.questionInt("");

                console.log("\nDigite o valor do Depósito (R$): ");
                valor = readlinesync.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);
                keyPress()
                break;
            default:
                console.log(Colors.PINK + "\nOpção Inválida!\n" + Colors.RESET)
                keyPress()
                break;
        }
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
}

main()