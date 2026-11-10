const { Given, When, Then } = require('@cucumber/cucumber');

Given('que ingreso con un usuario válido', async function () {

    await this.page.goto('https://www.saucedemo.com/');

    await this.page.fill('#user-name', 'standard_user');
    await this.page.fill('#password', 'secret_sauce');

    await this.page.click('#login-button');

});

When('agrego un producto al carrito', async function () {

    await this.page.click(
        '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

    await this.page.waitForTimeout(2000);

});

Then('el carrito debe mostrar {int} producto', async function (cantidad) {

    const badge = await this.page.locator(
        '.shopping_cart_badge'
    ).textContent();

    if (badge !== cantidad.toString()) {
        throw new Error('Cantidad incorrecta');
    }

});

Given('que tengo un producto agregado', async function () {

    await this.page.goto('https://www.saucedemo.com/');

    await this.page.fill('#user-name', 'standard_user');
    await this.page.fill('#password', 'secret_sauce');

    await this.page.click('#login-button');

    await this.page.click(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

});

When('ingreso al carrito', async function () {

    await this.page.click('.shopping_cart_link');

    await this.page.waitForTimeout(2000);

});

Then('debo visualizar el producto agregado', async function () {

    const producto = await this.page
        .locator('.cart_item .inventory_item_name')
        .first()
        .textContent();

    if (producto !== 'Sauce Labs Backpack') {
        throw new Error(
            `Producto incorrecto: ${producto}`
        );
    }

});

