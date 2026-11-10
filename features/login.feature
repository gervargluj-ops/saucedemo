Feature: Login

  Scenario: Login exitoso

    Given que ingreso a SauceDemo
    When inicio sesión con usuario "standard_user" y contraseña "secret_sauce"
    Then debo visualizar la página de productos

  Scenario: Usuario bloqueado

    Given que ingreso a SauceDemo
    When inicio sesión con usuario "locked_out_user" y contraseña "secret_sauce"
    Then debe mostrarse el mensaje de usuario bloqueado