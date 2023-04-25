$(document).ready(function() {
    $( ".needs-validation" ).validate({
        errorClass: "is-invalid",
        validClass: "is-valid",
        rules:{
            name:{
                required: true,
            },
            zip:{
                required: true,
            },

        },
        messages:{
            name:{
                required: "El nombre es requerido",
            },
            zip:{
                required: "El numero zip es requerido",
            },

        },
    })
});
