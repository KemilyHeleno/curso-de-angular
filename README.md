# CURSO DE ANGULAR

## O que é Angular?
Um framework JavaScript desenvolvido pelo Google para criação de aplicações Web SPA baseada em componentes 

## Command Line Interface - CLI
`npm i -g @angular/cli`    --> Para instalar o pacote CLI do angular  
`ng new minha-app`         --> Para criar uma aplicação

## TypeScript
Linguagem criada pela Microsoft  
O código é escrito em TypeScript mas é compilado em JavaScript porque nenhum navegador conhece o TypeScript
Orientada a Objetos & Tipagem forte   
Superset do JavaScript (tudo que tem no js, também tem no ts)  
  
## Inicialização da APP
`main.ts`                  --> O código é em TypeScript para inicializar a aplicação em angular  
`AppModule`                --> Organizada em componentes (modularizada)  
`Bootstrap`                --> Aponta para o componente AppComponent (que vai trazer a arvore de componentes)  
`AppComponent`             --> Vai trazer a arvore de componentes  
  
## O que é um Componente
Possui Comportamento - TS  
Possui Estrutura - HTML  
Possui Estilo - CSS  
<br/>
Por conta disso, sempre haverão 3 arquivos padrão:  
-- home.comonent.css  
-- home.component.html   
-- home.component.ts  
<br/>

Tag prefixo padrão: `<app-home></app-home>`
Toda vez que for utilizada essa tag, todo o estilo, comportamento e estrutura realizados no componente, serão atribuídos ao código encapsulada dentro da tag  
O angular não organiza a aplicação apenas por componentes, organiza também por módulos, é possível utilizar um único módulo para aplicações pequenas, mas para aplicações maiores, é preferível utilizar mais módulos, eles estão classificados em:   
-- AppModule     - Componente A  
-- XModule       - Componentes B, C, D  
-- YModule       - Componentes E, F, G, H  
-- ZModule       - Componentes I, J, K, L, M  
<br/>
A árvore fica assim:  
A   ->    B  ->   E  
A   ->    B  ->   F ->  I  
A   ->    B  ->   F ->  J  
A   ->    C  
A   ->    D  ->   G ->  H  
A   ->    D  ->   G ->  K  
A   ->    D  ->   G ->  L  
A   ->    D  ->   G ->  M  
<br/>
Quando você cria um componente dentro de um módulo, você tem a opção de dizer se esse componente pode ser visto de fora do módulo ou se aquele componente vai ficar visível apenas dentro do módulo.
Com exceção do componente H, como esse componente só é apontado pelo componente G e ambos estão no mesmo módulo, então o componente H só pode ser visto e referenciado dentro de seu módulo de origem.

## Anatomia do Módulo
-- Declarations:
 * Components
 * Diretivas
 * Pipes
<br/>

-- Exports:
 * Components
 * Diretivas
 * Pipes
<br/>

-- Imports:                          
 * Module A
 * Module B
 * Module C
<br/>

 -- Providers:
 * Service A
 * Service B
 * Service C
<br/>

-- Boostrap:
 * App Component  

## Organização Usando Módulo
 -- AppModule    -> bootstrap        -> declarations  
 -- AppModule    -> bootstrap        -> imports  
 -- XModule      -> declarations  
 -- XModule      -> imports  
 -- XModule      -> exports  
 -- XModule      -> providers  
 -- YModule      -> declarations  
 -- YModule      -> imports  
 -- YModule      -> exports  
 -- YModule      -> providers  
 -- ZModule      -> declarations  
 -- ZModule      -> imports  
 -- ZModule      -> exports  
 -- ZModule      -> providers  
<br/>
Enquanto o AppModule só faz importação dos componenetes, os outros módulos fazem importação e exportação de componentes

## Conhecendo os arquivos gerados
* tsconfig.json --> arquivo que configura a compilação do código em TypeScript
* angular.json -- > arquivo de configuração de como serão gerados os arquivos do projeto angular
* pasta src --> onde é armazenado o código fonte
* main.ts --> importa e carrega o módulo principal (AppModule)
* pasta app --> pasta com o modulo criado
* app-routing.module.ts --> Cria as rotas
* app.components.ts --> componente - Estilo da página principal
* app.module.ts --> modulo - dentro dele está o BoosTrap, que aponta o componente que iniciará a aplicação
* pasta assets --> pasta para colocar as imagens
* environments.ts --> cria, armazena e da valor as variáveis
* environments.prod.ts --> cria, armazena e da valor as variáveis em produção
* index.html --> aponta para o componente raiz

## Alguns comandos utilizados no terminal
* `ng add @angular/material` --> para instalar o material que irá padronizar os ícones da aplicação
* `ng generate component components/template/header` --> para criar um novo componente dentro da pasta header que está dentro da pasta template
* `npm start` --> inicia a aplicação na porta escolhida
* `npm server --o` --> inicia a aplicação e já abre o browser para que a aplicação possa ser visualizada
* `ng new frontend --minimal` --> cria um novo módulo chamado frontend com sem arquivos desnecessários (se você tirar o `--minimal` irá gerar muitos arquivos desnecessários)