const displayNoneSections = () => {
    $("#dashboard-section").css("display", "none");
    $("#customer-section").css("display", "none");
    $("#item-section").css("display", "none");
    $("#order-section").css("display", "none");
}

displayNoneSections();
$("#dashboard-section").css("display", "block");

$("#dashboard").on('click', () => {
    displayNoneSections();
    $("#dashboard-section").css("display", "block");
});

$("#customer").on('click', () => {
    displayNoneSections();
    $("#customer-section").css("display", "block");
});

$("#item").on('click', () => {
    displayNoneSections();
    $("#item-section").css("display", "block");
});

$("#order").on('click', () => {
    displayNoneSections();
    $("#order-section").css("display", "block");
});