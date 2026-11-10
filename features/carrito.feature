Feature: Carrito

  Scenario: Agregar producto

    Given que ingreso con un usuario válido
    When agrego un producto al carrito
    Then el carrito debe mostrar 1 producto

  Scenario: Visualizar carrito

    Given que tengo un producto agregado
    When ingreso al carrito
    Then debo visualizar el producto agregado

