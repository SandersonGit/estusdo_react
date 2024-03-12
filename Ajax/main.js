document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btn-buscar-cep").addEventListener("click", function() {
        // AJAX - Assincronous javascript and xml request
        const xhtpp = new XMLHttpRequest();
        const cep = document.getElementById("cep").value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        xhtpp.open('GET', endpoint);
        xhtpp.send()
        
    })
})