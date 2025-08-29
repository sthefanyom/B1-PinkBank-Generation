"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const readlineSync = __importStar(require("readline-sync"));
const Colors_1 = require("./util/Colors");
class Menu {
    static iniciar() {
        let opcao;
        do {
            console.clear();
            console.log(Colors_1.Colors.CYAN + "==================================" + Colors_1.Colors.RESET);
            console.log(Colors_1.Colors.GREEN + "     BANCO - CONTA BANCÁRIA       " + Colors_1.Colors.RESET);
            console.log(Colors_1.Colors.CYAN + "==================================" + Colors_1.Colors.RESET);
            console.log("1 - Criar Conta");
            console.log("2 - Listar Contas");
            console.log("3 - Buscar Conta por Número");
            console.log("4 - Atualizar Dados da Conta");
            console.log("5 - Apagar Conta");
            console.log("6 - Sacar");
            console.log("7 - Depositar");
            console.log("8 - Transferir Valores entre Contas");
            console.log("9 - Sair");
            console.log(Colors_1.Colors.CYAN + "==================================" + Colors_1.Colors.RESET);
            opcao = readlineSync.questionInt("Escolha uma opcao: ");
            switch (opcao) {
                case 1:
                    console.log("Criar Conta selecionado!");
                    break;
                case 2:
                    console.log("Listar Contas selecionado!");
                    break;
                case 9:
                    console.log(Colors_1.Colors.RED + "Saindo... Obrigado por usar o sistema!" + Colors_1.Colors.RESET);
                    break;
                default:
                    console.log(Colors_1.Colors.YELLOW + "Opcao inválida!" + Colors_1.Colors.RESET);
            }
            if (opcao !== 9)
                readlineSync.question("Pressione ENTER para continuar...");
        } while (opcao !== 9);
    }
}
exports.Menu = Menu;
Menu.iniciar();
//# sourceMappingURL=Menu.js.map