let mobNavOpened = false;

const displayNoneSections = () => {
    mobNavOpened = false;
    $(".mob-nav-btns").css("right", "-100vw");
    $("#dashboard-section").css("display", "none");
    $("#customer-section").css("display", "none");
    $("#item-section").css("display", "none");
    $("#order-section").css("display", "none");
}

displayNoneSections();
$("#dashboard-section").css("display", "block");

$(".dashboard").on('click', () => {
    displayNoneSections();
    $("#sectionName").text("Dashboard");
    $("#dashboard-section").css("display", "block");
});

$(".customer").on('click', () => {
    displayNoneSections();
    $("#sectionName").text("Customer Manage");
    $("#customer-section").css("display", "block");
});

$(".item").on('click', () => {
    displayNoneSections();
    $("#sectionName").text("Item Manage");
    $("#item-section").css("display", "block");
});

$(".order").on('click', () => {
    displayNoneSections();
    $("#sectionName").text("Place Orders");
    $("#order-section").css("display", "block");
});

$(".mob-nav-menu").on('click', ()=>{
    if(mobNavOpened){
        mobNavOpened = false;
        $(".mob-nav-btns").css("right", "-100vw");
    }else{
        mobNavOpened = true;
        $(".mob-nav-btns").css("right", 0);
    }
});

$(".mob-nav-btns i").on('click', ()=>{
    $(".mob-nav-btns").css("right", "-100vw");
});

$("section").on('click', ()=>{
    mobNavOpened = false;
    $(".mob-nav-btns").css("right", "-100vw");
})