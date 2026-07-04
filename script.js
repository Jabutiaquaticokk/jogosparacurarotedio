let items=['Pedra', 'Papel', 'Tesoura']

function pedraPapelTesoura(){
    let i=Number(Math.ceil(Math.random()*3))
    // console.log(i)
    let n
    let escolha=Number(prompt('Escolha:  Pedra(1)  Papel(2) Tesoura(3)'))
    escolha=escolha -1
    i=i-1
    n=items[i]
    document.getElementById('ppd').innerHTML='Sua escolha: '+items[escolha]+'<br> Escolha do Bot: '+n
    // console.log(n);
    if(escolha==0&&i==1||escolha==1&&i==0){
        document.getElementById('ppd').innerHTML+='<br>Papel Vence'
    }else if(escolha==1&&i==2||escolha==2&&i==1){
        document.getElementById('ppd').innerHTML+='<br>Tesoura Vence'
    }else if(escolha==0&&i==2||escolha==2&&i==0){
        document.getElementById('ppd').innerHTML+='<br>Pedra Vence'
    }else if(escolha==i){
        document.getElementById('ppd').innerHTML+='<br>Empate'
    }

    
}