const { Given, When, Then } = require('@cucumber/cucumber');

Given('que tengo productos en el carrito', async function () {

    await this.page.goto('https://www.saucedemo.com/');

    await this.page.fill('#user-name', 'standard_user');
    await this.page.fill('#password', 'secret_sauce');

    await this.page.click('#login-button');

    await this.page.waitForTimeout(2000);

    await this.page.click(
        '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

    await this.page.waitForTimeout(2000);

    await this.page.click('.shopping_cart_link');

    await this.page.waitForTimeout(2000);

});


When('completo los datos de compra', async function () {

    await this.page.click('[data-test="checkout"]');

    await this.page.fill('#first-name','Gerson'
    );

    await this.page.fill('#last-name','Vargas'
    );

    await this.page.fill('#postal-code','13001'
    );

    await this.page.click('#continue'
    );

    await this.page.click('#finish'
    );

    await this.page.waitForTimeout(2000);

});

Then(
'debo visualizar el mensaje {string}',
async function (mensajeEsperado) {

    const mensaje = await this.page.locator('.complete-header').textContent();

    if (mensaje !== mensajeEsperado) {
        throw new Error(
          'Mensaje incorrecto'
        );
    }

});