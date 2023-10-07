export class Order {
    constructor(id, customer, items, discount, total) {
        this.id = id;
        this.customer = customer;
        this.items = items;
        this.discount = discount;
        this.total = total;
    }
}
