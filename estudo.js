let tabuada = 111;
function escreva(){
    document.write("Tabuada do " + tabuada + "<br>");
    document.write(tabuada + " x 1 = " + (tabuada*1) + "<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2) + "<br>");
    document.write(tabuada + " x 3 = " + (tabuada*3) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10) + "<br>");
}

let lista = ["Jesus","Spessato","Duarte","Jorge","Neuza","Gilmar","Jossyara"];

function mostraLista(){
    document.write("Tamanho da lista: " + lista.length + "<br>");
    for(let i = 0; i < lista.length; i++){
        document.write("Professor: " + lista[i] + "<br>");
    }
}

function multiplica(){
    for(let i = 6; i <= 8; i++){
        document.write("Tabuada do " + i + "<br>");
        for(let j = 1; j <= 10; j++){
            document.write(i + " x "+j+" = " + (i*j) + "<br>");
        }
        document.write("<br>");
    }
}
function moeda(atual){
    return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
function total(){
    let v = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    
    if(!Number(v)){
        alert("O valor deve ser numérico.");
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return
    }

    if(!Number(v)){
        alert("O valor deve ser numérico.");
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return
    }
    if(!Number(j)){
        alert("Os juros devem ser numérico.");
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
        return
    }
    if(!Number(t)){
        alert("O valor dos meses deve ser numérico.");
        document.getElementById("meses").value = "";
        document.getElementById("meses").focus();
        return
    }
    let texto =""
    let r = 0;
    for(let i=1; i <= t;i++){
         r = v * (1+(j/100));
         texto +="Mês " + i = "valor: "+ moeda(r);         
         v = r;
    }
    document.getElementById("mes").innerHTML=texto;
    document.getElementById("totalGeral").innerHTML="Total: "+moeda(r);
    
}

let a = 5;
let b = -1;
let c = -6;
let raiz_quadrada

function calcularRaiz
    let delta = (b*b)-(-4*a*c);
    let x1, x2;
    if (delta < 0){

    }eslse{
        raiz_quadrada = Math.sqrt(delta);
        x1 = ((-b) + raiz_quadrada)/(2*a);
        x2 = ((-b) - raiz_quadrada)/(2*a);
    }

    document.getElementById("raiz").innerHTML = delta

