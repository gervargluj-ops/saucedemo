class CheckoutPage{

    constructor(page){

        this.page = page;

        this.firstName =
        '#first-name';

        this.lastName =
        '#last-name';

        this.postalCode =
        '#postal-code';

        this.continueButton =
        '#continue';

        this.finishButton =
        '#finish';

        this.confirmation =
        '.complete-header';
    }

    async completePurchase(){

        await this.page.fill(
        this.firstName,
        'Gerson');

        await this.page.fill(
        this.lastName,
        'Vargas');

        await this.page.fill(
        this.postalCode,
        '13001');

        await this.page.click(
        this.continueButton);

        await this.page.click(
        this.finishButton);
    }
}

module.exports = CheckoutPage;