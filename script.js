
function calculoDePartidas( vitorias, derrotas){
    const saldoRankeadas = vitorias - derrotas

    if(vitorias <= 10){
        return vitorias + " vitorias,  é nivel ferro e o saldo Rankeado é de " + saldoRankeadas
    }else if(vitorias >= 11 && vitorias<= 20){
        return vitorias + " vitorias,  é nivel Bronze e o saldo Rankeado é de " + saldoRankeadas
    }else if(vitorias>=21 && vitorias<=50){
        return vitorias + " vitorias,  é nivel Prata e o saldo Rankeado é de " + saldoRankeadas
    }else if(vitorias>=51 && vitorias <=80){
        return vitorias + " vitorias,  é nivel Ouro e o saldo Rankeado é de " +  saldoRankeadas
    }else if(vitorias >=81 && vitorias<=90){
        return vitorias + " vitorias,  é nivel Diamante e o saldo Rankeado é de  " + saldoRankeadas
    }else if(vitorias >=91 && vitorias<=100){
        return vitorias + " vitorias,  é nivel Lendario e o saldo Rankeado é de " + saldoRankeadas
    }else if(vitorias>=101){
        return vitorias + " vitorias,  é nivel Imortal e o saldo Rankeado é de " + saldoRankeadas
    }else {
        return "digite a quantidade de vitorias!"
    }
}
const Nivel = calculoDePartidas(50,40)

alert("O Heroi tem saldo de " +  Nivel)