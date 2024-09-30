# TesteJoseUi

Projeto Criado em Angular version 18.2.1.

## Tecnologias Usadas
1° Angular foi minha primeira decisão para o desenvolvimento do front-end pela facilidade, e a estrutura do código
2° Material Design components foi escolhido  pela gama de compoenentes e o angular se adapta muito bem.
3° Para o Css escolhi  o LESS pois o mesmo ajuda muito na organização do código

## Rodar Projeto front end
-- no Terminal do Visual Studio Code Rode `ng serve -- open` para abir o navegador automaticamente.


## Decisão do Design tela Login
o DEsgin foi deito dessa maneira pensando na simpicidade e  essencial   a tela responsiva onde mobiles tem o logo em cima e o form abaixo se adaptando a tela

## Códgio Css
foi usado media querie para identificar o tamanho da tela, e para fazer a responsividade usei a ferrament display grid e display flex;

o projeto consiste em 2 tela de Login onde tem um formulario com dois input-text e um botão 
inputs de email e senha e um botão de logar


## Tela Login
na tela de login  o usúario pode preencher o campo de email e senha e clicar em logar caso o usuário ou senha inválido aparece uma mensagem avisando.

Caso o usuário seja logado é criado um cookie contendo um token

e o usuário é redirecionado para Home page

## Tela Home Page
A tela Home Page é bem simples é contem o nome do usuário que é derivado do cookie e um botão para logout

- Por questão de padronização,  o frontend e o back foram separados assim o o projeto fica mais legivél 
