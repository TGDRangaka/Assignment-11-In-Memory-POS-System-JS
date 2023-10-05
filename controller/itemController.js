import {Item} from "../model/item.js";
import {items} from "../db/db_arrays.js";

let row_index = null;

const loadItemTable = () => {
    $("#itemTable").html("");
    items.map((item) => {
        $("#itemTable").append(`<tr><td> ${item.id} </td><td> ${item.name} </td><td> ${item.price} </td><td> ${item.qty} </td></tr>`);
    });
};

//save
$("#item-save").on('click', () => {
    let id = Number.parseInt($("#itemId").val()),
        name = $("#itemName").val(),
        price = Number.parseFloat($("#itemPrice").val()),
        qty = Number.parseInt($("#itemQty").val());

    let item = new Item(id, name, price, qty);
    items.push(item);

    loadItemTable();
    $("#item-reset").click();
});

//search
$("#itemTable").on('click', "tr", function(){
    let selectedId = Number.parseInt( $(this).find("td:nth-child(1)").text() );

    $("#itemId").val( selectedId );
    $("#itemName").val( $(this).find("td:nth-child(2)").text() );
    $("#itemPrice").val( Number.parseFloat($(this).find("td:nth-child(3)").text() ) );
    $("#itemQty").val( Number.parseInt( $(this).find("td:nth-child(4)").text() ) );

    row_index = items.findIndex((item => item.id == selectedId));
});

//update
$("#item-update").on('click', () => {
    let id = Number.parseInt($("#itemId").val()),
        name = $("#itemName").val(),
        price = Number.parseFloat($("#itemPrice").val()),
        qty = Number.parseInt($("#itemQty").val());

    items[row_index].id = id;
    items[row_index].name = name;
    items[row_index].price = price;
    items[row_index].qty = qty;

    loadItemTable();
    $("#item-reset").click();
    row_index = null;
});

//remove
$("#item-delete").on('click', () => {
    if (row_index == null) return;
    items.splice(row_index, 1);
    loadItemTable();
    $("#item-reset").click();
});