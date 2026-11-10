class InventoryPage{

    constructor(page){
        this.page = page;

        this.firstProduct =
        '[data-test="add-to-cart-sauce-labs-backpack"]';

        this.shoppingCart =
        '.shopping_cart_link';
    }

    async addProduct(){
        await this.page.click(this.firstProduct);
    }

    async openCart(){
        await this.page.click(this.shoppingCart);
    }
}

module.exports = InventoryPage;