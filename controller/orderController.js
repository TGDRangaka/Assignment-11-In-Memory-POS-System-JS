import {Order} from "../model/order.js";
import {customers} from "../db/db_arrays.js";
import {items} from "../db/db_arrays.js";
import {orders} from "../db/db_arrays.js";

let cusRowIndex = null;
let itemRowIndex = null;

//loadCustomers
$("#orderCusId>button").on('click', ()=> {
    $("#cusDropdown").html(" ");
    customers.map((customer) => {
        $("#cusDropdown").append(`<a class="dropdown-item" href="#"> ${customer.id} </a>`);
    });
});

//setCustomerDetails
$("#cusDropdown").on('click', "a", function(){
    $("#orderCusId>button").text($(this).text())
    cusRowIndex = customers.findIndex(customer => customer.id == Number.parseInt($(this).text()));

    $("#orderCusName").val( customers[cusRowIndex].name );
    $("#orderCusAddress").val( customers[cusRowIndex].address );
    $("#orderCusSalary").val( customers[cusRowIndex].salary );
});

//loadItems
$("#orderItemId>button").on('click', ()=> {
    $("#itemDropdown").html(" ");
    items.map((item) => {
        $("#itemDropdown").append(`<a class="dropdown-item" href="#"> ${item.id} </a>`);
    });
});

//setItemDetails
$("#itemDropdown").on('click', "a", function(){
    $("#orderItemId>button").text($(this).text())
    itemRowIndex = items.findIndex(item => item.id == Number.parseInt($(this).text()));

    $("#orderItemName").val( items[itemRowIndex].name );
    $("#orderItemPrice").val( items[itemRowIndex].price );
    $("#qty-on-hand").val( items[itemRowIndex].qty );
});

//add-item action
//save order
