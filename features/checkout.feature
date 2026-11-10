Feature: Checkout

  Scenario: Compra exitosa

    Given que tengo productos en el carrito
    When completo los datos de compra
    Then debo visualizar el mensaje "Thank you for your order!"

