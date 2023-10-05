import {Customer} from "../model/customer.js";
import {customers} from "../db/db_arrays.js";

let row_index = null;

const loadCustomerTable = () => {
    $("#cusTable").html("");
    customers.map((customer) => {
        $("#cusTable").append(`<tr><td> ${customer.id} </td><td> ${customer.name} </td><td> ${customer.address} </td><td> ${customer.salary} </td></tr>`);
    });
};

//save
$("#cus-save").on('click', () => {
    let id = Number.parseInt($("#cusId").val()),
        name = $("#cusName").val(),
        address = $("#cusAddress").val(),
        salary = Number.parseFloat($("#cusSalary").val());

    let customer = new Customer(id, name, address, salary);
    customers.push(customer);

    loadCustomerTable();
    $("#cus-reset").click();
});

//search
$("#cusTable").on('click', "tr", function(){
    let selectedId = Number.parseInt( $(this).find("td:nth-child(1)").text() );

    $("#cusId").val( selectedId );
    $("#cusName").val( $(this).find("td:nth-child(2)").text() );
    $("#cusAddress").val( $(this).find("td:nth-child(3)").text() );
    $("#cusSalary").val( Number.parseFloat( $(this).find("td:nth-child(4)").text() ) );

    row_index = customers.findIndex((customer => customer.id == selectedId));
});

//update
$("#cus-update").on('click', () => {
    let id = Number.parseInt($("#cusId").val()),
        name = $("#cusName").val(),
        address = $("#cusAddress").val(),
        salary = Number.parseFloat($("#cusSalary").val());

    customers[row_index].id = id;
    customers[row_index].name = name;
    customers[row_index].address = address;
    customers[row_index].salary = salary;

    loadCustomerTable();
    $("#cus-reset").click();
});

//remove
$("#cus-delete").on('click', () => {
    customers.splice(row_index, 1);
    loadCustomerTable();
    $("#cus-reset").click();
});

