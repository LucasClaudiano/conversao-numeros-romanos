let glossario = [
{numero:1000, romano:'M'}, 
{numero:900, romano:'CM'}, 
{numero:500, romano:'D'}, 
{numero:400, romano:'CD'},
{numero:100, romano:'C'},
{numero:90, romano:'XC'}, 
{numero:50, romano:'L'}, 
{numero:40, romano:'XL'}, 
{numero:10, romano:'X'}, 
{numero:9, romano:'IX'}, 
{numero:5, romano:'V'}, 
{numero:4, romano:'IV'}, 
{numero:1, romano:'I'}
]; 

function convert (convertNum){
    let romanoaux = ''; 
    let numero = convertNum; 

    for(let i=0; i<glossario.length;i++ ){
        if(glossario[i].numero<=numero){
            numero -= glossario[i].numero; 

            romanoaux += glossario[i].romano

            i--;
        }
    }
    document.getElementById('romanInput').value = romanoaux
}

document.getElementById('converter').addEventListener('click', function(){
    let numero = document.getElementById('numberInput').value; 

    convert(numero); 
});

    const convert2 = { 
        "M":1000, 
        "D":500, 
        "C":100, 
        "L":50, 
        "X":10, 
        "V":5, 
        "I":1
        };
        
        function romanosArabicos(s){
        
            let array = s.split(''); 
            
            let total = 0 ; 
            let atual; 
            let valorAtual; 
            let proximo; 
            let proximoValor; 
        
            for (let i=0; i < array.length; i++){
                atual =array[i]; 
                valorAtual = convert2[atual]; 
        
                proximo = array[i+1]; 
                proximoValor = convert2[proximo]
        
                if (valorAtual < proximoValor){
                    total -= (valorAtual); 
                }else{
                    total += (valorAtual);
                }
            }
            document.getElementById('romanInput2').value = total; 
            
        } 
        
        
        
        
        document.getElementById('converter2').addEventListener('click', function(){
        
            let outputnumber = document.getElementById('numberInput2').value;
            
            romanosArabicos(outputnumber); 
        })