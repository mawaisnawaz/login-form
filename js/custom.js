$(document).on('click', '.filterIcon', function (e) {
    $('.filterIcon').css('right' , '350px');
    $('.filterIcon').addClass('closeNav');
    $('.filterIcon').html('<i class="icon-close" aria-hidden="true"></i>');
    $('#mySidenav').css('width' , '350px');
});

$(document).on('click', '.closeNav', function (e) {
    $('.filterIcon').css('right' , '5px');
    $('.filterIcon').removeClass('closeNav');
    $('.filterIcon').html('<i class="icon-filter" aria-hidden="true"></i>');
    $('#mySidenav').css('width' , '0px');
});


$('#reportFromDate').datepicker({
    maxViewMode: 0,
    todayHighlight: true,
    format: 'dd-mm-yyyy',
    autoclose : true
}).on('changeDate', function (selected) {
    var startDate = new Date(selected.date.valueOf());
    $('#reportToDate').datepicker('setStartDate', startDate);
}).on('clearDate', function (selected) {
    $('#reportToDate').datepicker('setStartDate', null);
});


$('#reportToDate').datepicker({
    format: 'dd-mm-yyyy',
    todayHighlight: true,
    autoclose: true
}).on('changeDate', function (selected) {
    var endDate = new Date(selected.date.valueOf());
    $('#reportFromDate').datepicker('setEndDate', endDate);
}).on('clearDate', function (selected) {
    $('#reportFromDate').datepicker('setEndDate', null);
});



