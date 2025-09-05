import { Colors } from "../util/Colors";
import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";


export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>()
    numero: number = 0

    
    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero)

        if (buscaConta != null) {
            buscaConta.visualizar()
        } else
        console.log(Colors.PINK + "A Conta numero: " + numero + "  não foi encontrada!" + Colors.RESET)
    }
    
    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar()
    }
}
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta)
        console.log(Colors.PINK + "A Conta número: "   + conta.numero +   "  foi criada com sucesso!" + Colors.RESET)
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero)

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta
            console.log(Colors.PINK + "A Conta numero: " + conta.numero +  "  Foi atualizada com sucesso!" + Colors.RESET)
        } else
            console.log(Colors.PINK + " A Conta numero: " + conta.numero + "  não foi encontrada!" + Colors.RESET)
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero)

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1)
            console.log(Colors.PINK + " A conta numero: " + numero + "  foi apagada com sucesso!" + Colors.RESET)
        }else
        console.log(Colors.PINK + "A conta numero: " + numero + "  não foi encontrada!" + Colors.RESET)
    }
    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {

        if(conta.sacar(valor) == true)
            console.log(Colors.PINK + "\nO Saque na Conta numero: " + numero +
                "  foi efetuado com sucesso!" + Colors.RESET);

        }else
            console.log(Colors.PINK + "\nA Conta numero: " + numero +
                "  não foi encontrada!" + Colors.RESET)
    }
    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            conta.depositar(valor);
            console.log(Colors.PINK + "\nO Depósito na Conta numero: " + numero +
                "  foi efetuado com sucesso!" + Colors.RESET);
        } else
            console.log(Colors.PINK + "\nA Conta numero: " + numero +
                " não foi encontrada!" + Colors.RESET);
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
         let contaOrigem = this.buscarNoArray(numeroOrigem);
    let contaDestino = this.buscarNoArray(numeroDestino);

    if (contaOrigem != null && contaDestino != null) {
        if(contaOrigem.sacar(valor) == true){
            contaDestino.depositar(valor);
            console.log(Colors.PINK + "\nA Transferência da Conta numero: " + numeroOrigem +
                " para a Conta numero: " + numeroDestino + "  foi efetuada com sucesso!" +
                Colors.RESET);
        }
    } else
        console.log(Colors.PINK + "\nA Conta numero: " + numeroOrigem +
            " e/ou a Conta numero: " + numeroDestino + " não foram encontradas!" +
            Colors.RESET);

    }
    
    public gerarNumero(): number {
        return ++ this.numero
    }

    //Checa de uma Conta Existe
    public buscarNoArray(numero: number): Conta | null {

        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta
    }
        return null
   }
}