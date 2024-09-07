//Seleccionamos el formulario y los elementos

const form = document.getElementById('appointment-form');

//Agregamos un listener para el evento del envío

form.addEventListener('submit', function (event){
    event.preventDefault();
    //Prevenimos que se envíe el formulario por defecto
})

//Obtenemos los valores de los campos que llenemos del formulario

const petName = document.getElementById('pet-name') .value;
const petType = document.getElementById('pet-type') .value;
const ownerName = document.getElementById('owner-name') .value;
const appointmentReason = document.getElementById('appointment-reason') .value;
const appointmentDate = document.getElementById('appointment-date') .value;
const appointmentTime = document.getElementById('appointment-time') .value;

//Validamos los campos

if (!petName || !ownerName || !appointmentReason || !appointmentDate || !appointmentTime){
    alert('Por favor, complete todos los campos.');
    return;
}

// Crear un objeto de cita

const appointment = {
    petName,
    petType,
    ownerName,
    appointmentReason,
    appointmentDate,
    appointmentTime
};

// Guardamos la cita en el Local Storage

let appointments =  JSON.parse(localStorage.getItem('appointments')) || [];
appointments.push(appointment);

localStorage.setItem('appointments', JSON.stringify(appointments));

// Mostramos un mensaje de éxito

alert('Cita registrada con éxito.');

// Limpiamos el formulario
form.reset();

