//DECLARANDO VARIÁVEIS E ESCOLHAS

var seletorSifra = document.getElementById('decoder');
var page = document.getElementById('selector');

var exibidorCesar = document.getElementById('exibidorCesar');
var exibidorBase64 = document.getElementById('exibidorBase64');

//EVENTOS

decoder.addEventListener('change',()=>{
    (decoder.value == 'base64')? base64() : caesar(); 
});

document.getElementById('input').addEventListener('keyup', (c)=>{
    let input = document.getElementById('input').value.split('');
    let output = document.getElementById('output');
    let chave = parseInt(document.getElementById('key').value);
    let decisao = document.getElementById('escolhaCesar').checked

    if(decisao){
        output.value = caesarLogic(input, chave);
    } else {
        output.value = caesarLogicDecode(input, chave)
    }
       
})

document.getElementById('input2').addEventListener('keyup', (c)=>{
    let input = document.getElementById('input2').value
    let output = document.getElementById('output2');
    let decisao = document.getElementById('escolhaBase64').checked
    
    output.value = base64Logic(input, decisao)
})


//ESTILO
var base64 = () => {
    page.style.backgroundImage = "url('matrix.jpg')";
    exibidorCesar.style.display = 'none'
    exibidorBase64.style.display = 'flex'
}

var caesar = () => {
    page.style.backgroundImage = "url('matrix.jpg')";
    exibidorCesar.style.display = 'flex'
    exibidorBase64.style.display = 'none'
}

//LOGICAS

function caesarLogic(arr, key){
    return arr.map((c)=>{
        let code = c.charCodeAt();
        if(code >= 65 && code <= 90){
            return String.fromCharCode(((code - 65 + key) % 26) + 65)
        } else if(code >= 97 && code <= 122){
            return String.fromCharCode(((code - 97 + key) % 26) + 97)
        } else return c
    }).join('')    
}

function caesarLogicDecode(arr, key){
    return arr.map((c)=>{
        let code = c.charCodeAt();
        if(code >= 65 && code <= 90){
            return (code-65-key < 0)?String.fromCharCode(((code - 65 - key + 26)%26)+65):String.fromCharCode(((code - 65 - key)%26)+65) 
        } else if(code >= 97 && code <= 122){
            return String.fromCharCode(((code - 97 - key + 26) % 26) + 97)
        } else return c
    }).join('')    
}

function base64Logic(input, decisao){
    return (decisao)? btoa(input) : atob(input)
}