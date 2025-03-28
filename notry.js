
$(function () {
    $("#datepicker").datepicker({
        dateFormat: "dd-mm-yy", // Change format if needed
        changeMonth: true,
        changeYear: true
    });
});
$(document).ready(function () {
    $('#bootstrap-datepicker').datepicker({
        format: 'dd-mm-yyyy',
        autoclose: true,
        todayHighlight: true
    });
});