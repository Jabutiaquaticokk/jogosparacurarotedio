let items=['Pedra', 'Papel', 'Tesoura']
let escolha=0

function pedraPapelTesoura(){
    let i=Number(Math.ceil(Math.random()*3))
    // console.log(i)
    let n
    i=i-1
    escolha=escolha-1
    n=items[i]
    alert('Pedra, papel e tesooouuuurA.')
    document.getElementById('ppd').innerHTML='Sua escolha: '+items[escolha]+'<br> Escolha do Bot: '+n
    // console.log(n);
    if(escolha==0&&i==1||escolha==1&&i==0){
        document.getElementById('ppd').innerHTML+='<br>Papel Vence'
        if(escolha==1&&i==0){
            document.getElementById('ppd').innerHTML+='<br>Você Ganhou'
        }else{
            document.getElementById('ppd').innerHTML+='<br>Bot Ganhou'
            
        }
    }else if(escolha==1&&i==2||escolha==2&&i==1){
        document.getElementById('ppd').innerHTML+='<br>Tesoura Vence'
        if(escolha==2&&i==1){
            document.getElementById('ppd').innerHTML+='<br>Você Ganhou'
        }else{
            document.getElementById('ppd').innerHTML+='<br>Bot Ganhou'
            
        }
    }else if(escolha==0&&i==2||escolha==2&&i==0){
        document.getElementById('ppd').innerHTML+='<br>Pedra Vence'
        if(escolha==0&&i==2){
            document.getElementById('ppd').innerHTML+='<br>Você Ganhou'
        }else{
            document.getElementById('ppd').innerHTML+='<br>Bot Ganhou'
            
        }
    }else if(escolha==i){
        document.getElementById('ppd').innerHTML+='<br>Empate'
    }

    
}

function pedra(){
    escolha=1
}
function Papel(){
    escolha=2
}
function Tesoura(){
    escolha=3
}