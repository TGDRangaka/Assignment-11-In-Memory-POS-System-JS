import {Order} from "../model/order.js";
import {customers} from "../db/db_arrays.js";
import {items} from "../db/db_arrays.js";
import {orders} from "../db/db_arrays.js";
import {Item} from "../model/item.js";

let cusRowIndex = null;
let itemRowIndex = null;
let total = 0;
let subTotal = 0;
let tempItems = [];
let addedItems = [];

const loadAddItemTable = ()=>{
    addedItems.map((item) => {
        $("#orderedItemTBody").append(`
                    <tr>
                        <td> ${item.id} </td>
                        <td> ${item.name} </td>
                        <td> ${item.price} </td>
                        <td> ${item.qty} </td>
                        <td> ${item.price * item.qty} </td>
                    </tr>
    `   );
    })
}

//loadCustomers
$("#orderCusId").on('click', ()=>{
    $("#orderCusId").html("");
    customers.map((customer) => {
        $("#orderCusId").append(`<option value="${customer.id}"> ${customer.id} </option>`);
    });
});

//setCustomerDetails
$("#customerSelector").on('click', 'select', function (){
    cusRowIndex = customers.findIndex(customer => customer.id == Number.parseInt($(this).val()));
    $("#orderCusName").val( customers[cusRowIndex].name );
    $("#orderCusAddress").val( customers[cusRowIndex].address );
    $("#orderCusSalary").val( customers[cusRowIndex].salary );
});

//loadItems
$("#OrderItemId").on('click', ()=> {
    $("#OrderItemId").html("");
    items.map((item) => {
        $("#OrderItemId").append(`<option value="${item.id}"> ${item.id} </option>`);
    });
});

//setItemDetails
$("#itemSelector").on('click', 'select', function (){
    itemRowIndex = items.findIndex(item => item.id == Number.parseInt($(this).text()));

    $("#orderItemName").val( items[itemRowIndex].name );
    $("#orderItemPrice").val( items[itemRowIndex].price );
    $("#qty-on-hand").val( items[itemRowIndex].qty );
});

//add-item action
$("#add-item-btn").on('click', ()=>{
    console.log($("#orderItemId:selected").val());
    let id = $("#orderItemId").val(),
        name = $("#orderItemName").val(),
        price = Number.parseFloat($("#orderItemPrice").val()),
        qty = Number.parseInt($("#orderItemQty").val()),
        itemTotal = price * qty;


    addedItems.push(new Item(id, name, price, qty, itemTotal));
    loadAddItemTable();

    tempItems.push(items[itemRowIndex]);
    items[itemRowIndex].qty -= qty;

    subTotal += itemTotal;
    $("#subTotal").text(`Sub Total: Rs. ${subTotal} `)
});


//save order
