const { Given, When, Then } = require('@cucumber/cucumber');

const assert = require('assert');
const LoginPage = require('../pages/LoginPage');

Given('que ingreso a SauceDemo', async function () {

    this.loginPage = new LoginPage(this.page);

    await this.loginPage.open();

    await this.page.waitForTimeout(2000);

});

When(
'inicio sesión con usuario {string} y contraseña {string}',
async function (user, pass) {

    await this.loginPage.login(user, pass);

});

Then(
'debo visualizar la página de productos',
async function () {

    assert(
        this.page.url().includes('inventory')
    );

});

Then('debe mostrarse el mensaje de usuario bloqueado', async function () {

    const error = await this.page.locator('[data-test="error"]').textContent();

    if (!error.includes('locked out')) {
        throw new Error('No se mostró el mensaje esperado');
    }

});