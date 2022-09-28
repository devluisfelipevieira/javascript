let num = document.getElementById('txtn')
let val = document.getElementById('val')
let res = document.getElementById('res')
let valores = []

function isNumber(n){
    if (Number(n) < 1 || Number(n) > 100){
        return false
    }
    else{
        return true
    }

}

function inList(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }

}

function adicionar(){

    if(isNumber(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        val.appendChild(item)
        res.innerHTML = ''
    }
    else{
        window.alert('O valor inválido ou já está na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    let total = 0
    for (let v in valores){
        total += valores[v]
    }
    let c = valores.length
    let media = total/c
    c --
    c = Number(c)
    valores = valores.sort()
    res.innerHTML = ''
    res.innerText = `Ao todo, temos ${valores.length} numeros cadastrados`
    res.innerHTML += `<p>O maior valor informado foi: ${valores[c]}</p>`
    res.innerHTML += `<p>O menor valor informado foi: ${valores[0]}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${total}</p>`
    res.innerHTML += `<p>A media dos valores é: ${media}</p>`

}