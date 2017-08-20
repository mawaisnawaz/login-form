var modalCall = document.querySelector("#modal-call");
var modalEmail = document.querySelector("#modal-email");

var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var cancelButton = document.querySelector("#cancel-button");
var openButtonCall = document.querySelector(".open-button-call");
var openButtonEmail = document.querySelector(".open-button-email");


$("#close-button").on( "click", function( event ) {
    $("#modal-call").addClass('closed');
    $("#modal-email").addClass('closed');
    $("#modal-sme").addClass('closed');
    $("#modal-overlay").addClass('closed');
    $("#close-button").addClass('closed');
});

$(".cancel-button").on( "click", function( event ) {
    $("#modal-call").addClass('closed');
    $("#modal-email").addClass('closed');
    $("#modal-sme").addClass('closed');
    $("#modal-overlay").addClass('closed');
    $("#close-button").addClass('closed');
});

$(".open-button").on( "click", function( event ) {
    var modalId = $(this).attr('data-modal'); 
    $("#" + modalId).removeClass('closed');
    $("#modal-overlay").removeClass('closed');
    $("#close-button").removeClass('closed');
});

$(".open-button-email").on( "click", function( event ) {
    $("#modal-email").removeClass('closed');
    $("#modal-overlay").removeClass('closed');
    $("#close-button").removeClass('closed');
});

// if(closeButton){
//     closeButton.addEventListener("click", function() {
//         modalCall.classList.toggle("closed");
//         modalEmail.classList.toggle("closed");
//         modalOverlay.classList.toggle("closed");
//         closeButton.classList.toggle("closed");
//     });    
// }

// if(cancelButton){
//     cancelButton.addEventListener("click", function() {
//         modalCall.classList.toggle("closed");
//         modalEmail.classList.toggle("closed");
//         modalOverlay.classList.toggle("closed");
//         closeButton.classList.toggle("closed");
//     });    
// }

// if(openButtonCall){
//     openButtonCall.addEventListener("click", function() {
//         modalCall.classList.toggle("closed");
//         modalOverlay.classList.toggle("closed");
//         closeButton.classList.toggle("closed");
//     });    
// }

// if(openButtonEmail){
//     openButtonEmail.addEventListener("click", function() {
//         modalEmail.classList.toggle("closed");
//         modalOverlay.classList.toggle("closed");
//         closeButton.classList.toggle("closed");
//     });    
// }