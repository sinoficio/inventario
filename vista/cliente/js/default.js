$(document).ready(function(){
    $("#municipio").change(function(){
        //obtener el valor de lo que esta seleccionado
        var id = $("#municipio").find(':selected').val();
        
        //limpiar parroquias
        $("#parroquia").empty();

            $.ajax({
               type:"POST",
               dataType:"json",
               url:"http://localhost/inventario/cliente/cargarParroquias/"+id,
                success:function(data){
                     $("#parroquia").append("<option value='seleccione'>Seleccione</option>");
                     for (i=0; i < data.length; i++){
                        $("#parroquia").append("<option value=" + data[i].idParroquia + ">" + data[i].parroquia + "</option>");
                     }
                }
            });
            
            
        });
        
       

});

function eliminarClientes(id){
    if(confirm("¿Desea Eliminar este Cliente?")){
        location.href="http://localhost/inventario/cliente/eliminar/"+id;
    }
//    else{
//        return false;
//    }
}