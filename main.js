$(document).ready(function(){

    $('form').on('submit', function(e){

        e.preventDefault();
        
        let tarefa = $('#tarefa-value').val();

        let novaTarefa = $(`<li>${tarefa}</li>`); //Adiciona tarefa 

        $(novaTarefa).appendTo('ul');

        $('#tarefa-value').val('');

    })
    
    $('li').click(function(){
        $('li').toggleClass('concluido')
    })

    });