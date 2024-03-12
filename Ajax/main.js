// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("btn-buscar-cep").addEventListener("click", function() {
//         // AJAX - Assincronous javascript and xml request
//         const xhtpp = new XMLHttpRequest();
//         const cep = document.getElementById("cep").value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//         xhtpp.open('GET', endpoint);
//         xhtpp.send()
        
//     })
// })

$(document).ready(function() {
    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        $.ajax(endpoint).done(function(res) {
            const logradouro = res.logradouro;
            const bairro = res.bairro;
            const cidade = res.localidade;
            const estado = res.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco);
        })
    })
})