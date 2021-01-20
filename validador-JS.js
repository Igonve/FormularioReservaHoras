function validacion(){
    var rut = document.getElementById("rut").value;
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var edad = document.getElementById("edad").value;
    var email = document.getElementById("email").value;
    var especialidad = document.getElementById("especialidad").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    const rutpatron = /^(\d{1,2}(\.?\d{3}){2}[-]?[\dkK])$/;
    const patronname =  /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
    //^[A-Z]+$/i;
    const patronlastname = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
    const patronedad =  /^\d{1,3}$/;
    const patronemail = /^[^@|\s]+@[^@|\s]+\.[a-zA-Z]+/;
    /*/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;*/
    
    if (rut == ""){
        alert("Por favor ingrese su Rut");
        }
    if (name == ""){
    alert("Por favor ingrese su Nombre");
    }
    if (lastname == ""){
        alert("Por favor ingrese su Apellido");
        }
    if (edad == ""){
            alert("Por favor ingrese su Edad");
            }
    if (email == ""){
    alert("Por favor ingrese su Email");
    }
    if (especialidad == ""){
        alert("Por favor seleccione la Especialidad");
        }
    if (fecha == ""){
    alert("Por favor ingrese una fecha");
    }
    if (hora == ""){
        alert("Por favor ingrese una hora");
        }


    if (rut === ""){
        alert("Ingrese todos los datos");
        return false;
    }

    if (rut.match(rutpatron));
    else alert('Rut no válido');
    
    if (name.match(patronname));
    else alert('Nombre no válido, solo debe contener letras');

    if (lastname.match(patronlastname))
    alert('Apellido no válido, solo debe contener letras');

    if (edad.match(!patronedad))
    alert('Edad no válida, solo debe contener números');

    if (email.match(patronemail)); else
    alert('Email no válido, ingrese su mail correctamente');
   



      

    if ( (rut != "") && (name != "") && (lastname != "") && (edad != "") && (email != "") && (especialidad != "") && (fecha != "") && (hora != "")  ){
        alert('Estimado(a)'  + ' ' + name + ' ' + lastname + ', su hora para'  + ' ' + especialidad  + ' ' + 'ha sido reservada para el día'  + ' ' + fecha  + ' ' + 'a las'  + ' ' + hora + '.'
        + ' ' + 'Además, se le envió un mensaje a su correo:'  + ' ' + email  + ' ' + 'con el detalle de su cita. Gracias por preferirnos.'); }}
