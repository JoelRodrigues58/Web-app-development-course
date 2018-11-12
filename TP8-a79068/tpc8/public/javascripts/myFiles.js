$(()=>{
    $('#lista').load('http://localhost:4008/ficheiros')

    $('#adicionar').click(e=>{
        e.preventDefault()
        new Date($.now());
        
        const fil = $('#fil')[0].files[0];

        var date = new Date();
        var time = +date.getFullYear() + "-" + (date.getUTCMonth()+1) + "-" +date.getDate() + " " 
        + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()


        $('#lista').append(
            '<tr>'+ 
                '<td>' +
                    ' <a href= /'+fil.name +' target="_blank">' +fil.name +'</a>'+
                '</td>' +
                '<td>' +
                    $('#descricao').val()+
                '</td>' +
                '<td>' +
                    time +
                '</td>' +
            '</tr>')
        ajaxPost()
    })

    function ajaxPost(){
        const fil = $('#fil')[0].files[0];
        const formData = new FormData();

        var date = new Date();
        var time = +date.getFullYear() + "-" + (date.getUTCMonth()+1) + "-" +date.getDate() + " " 
        + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

        formData.append('ficheiro', fil);
        formData.append('desc', $('#descricao').val());
        formData.append('time', time);

        $.ajax({
            type:"POST",
            contentType:false,
            processData:false,
            url:"http://localhost:4008/ficheiros/guardar",
            data: formData,
            mimeType:'multipart/form-data',
            error: e=> {
                alert('Erro no Post: ' + e)
                console.log("Erro no post: "+ e)
            }
        })

        $('#descricao').val("")
        $('#fil').val("")
    }
})
