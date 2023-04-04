function contar(){
    let inicio = document.querySelector(".inicio")
    let fim = document.querySelector(".fim")
    let passo = document.querySelector(".passo")
    let res = document.querySelector(".res")
    

    if(inicio.value.length == 0 || fim.value.length == 0|| passo.value.length == 0){
        res.innerHTML = `Impossível contar`        
        window.alert("[ERRO] Coloque um número por favor!!!")
    }else{
        res.innerHTML = `Contando: `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //erro resolvido do 0
        if (p <= 0){
            window.alert(`Passo inválido! considerando PASSO 1`)
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
            res.innerHTML += `\u{1f3c1}`
        }else{
            //contagem regressiva
            for (let c = i; c>= f; c -= p ){
                res.innerHTML += ` ${c} \u{1f449}`
            }
            res.innerHTML += `\u{1f3c1}`
        }
        
    }


}