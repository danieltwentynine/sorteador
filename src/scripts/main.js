document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('forms').addEventListener('submit', function(event){
        event.preventDefault();
        let numeroMaximo = document.getElementById('numeroMax').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroRandom = Math.random() * numeroMaximo;
        
        document.getElementById('result').innerText = Math.floor(numeroRandom + 1);
        document.querySelector('.resultado').style.display = 'block';
    })
})