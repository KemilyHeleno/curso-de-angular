# CURSO DE ANGULAR

## O que é Angular?
Um framework JavaScript desenvolvido pelo Google para criação de aplicações Web SPA baseada em componentes 

### Command Line Interface - CLI
`npm i -g @angular/cli`    --> Para instalar o pacote CLI do angular  
`ng new minha-app`         --> Para criar uma aplicação

### TypeScript
Linguagem criada pela Microsoft  
O código é escrito em TypeScript mas é compilado em JavaScript porque nenhum navegador conhece o TypeScript
Orientada a Objetos & Tipagem forte   
Superset do JavaScript (tudo que tem no js, também tem no ts)  
  
### Inicialização da APP
`main.ts`                  --> O código é em TypeScript para inicializar a aplicação em angular  
`AppModule`                --> Organizada em componentes (modularizada)  
`Bootstrap`                --> Aponta para o componente AppComponent (que vai trazer a arvore de componentes)  
`AppComponent`             --> Vai trazer a arvore de componentes  
  
### O que é um Componente
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

### Anatomia do Módulo
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

### Organização Usando Módulo
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

> **Note**: Enquanto o AppModule só faz importação dos componenetes, os outros módulos fazem importação e exportação de componentes

### Conhecendo os arquivos gerados
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
* style.css --> css global da aplicação

### Alguns comandos utilizados no terminal
* `ng add @angular/material` --> para instalar o material que irá padronizar os ícones da aplicação
* `ng generate component components/template/header` --> para criar um novo componente dentro da pasta header que está dentro da pasta template
* `npm start` --> inicia a aplicação na porta escolhida
* `npm server --o` --> inicia a aplicação e já abre o browser para que a aplicação possa ser visualizada
* `ng new frontend --minimal` --> cria um novo módulo chamado frontend com sem arquivos desnecessários (se você tirar o `--minimal` irá gerar muitos arquivos desnecessários)

## Elementos do Angular
* Decorator: 
Padrão de projeto, tem como objetivo evitar heranças e fazer você trabalhar com composição
* Componentes:
Existe um escopo (um mundo) dentro do componente  
> **Note** Exemplo:  
> Quando você aplica um estilo com o CSS em um componente do projeto, o estilo vai ficar apenas naquele componente (mesmo que você programe o CSS para a aplicação inteira, se estiver dentro do componente irá alterar apenas ele).
* Diretivas:
Existe mais que uma, sendo:
 **Attribute Directives**
Alteram a aparência e o comportamento de um elemtento, componente ou de outra diretiva.  
> **Note** Aparência:  
> Quando utilizada em conjunto com o CSS

> **Note** Comportamento:  
> Pode ser utilizada para ativar uma função do backend casando o back e o front  

A diretiva é um Decorator, por tanto ela é chamada dessa forma:  
`@Directive({` </br>
`            `  
`})          `  

 **Structural Directives**
Altera a estrutura (layout) adicionando e removendo elementos da DOM (HTML).  
> **Note** Exemplos de como chamar:
> * `<form *ngIf="product" class="product-form"> </form>`
> * `<ul>                                               `
>   `   <li *ngFor="let product of products">           `
>   `      {{product.name}}                             `
>   `   </li>                                           `
>   `</ul>                                              `

* Property Biding:
Usado para pegar as informações do componente, um meio de comunicação entre o HTML e o TypeScript - usado colocando `[atributo]` substituindo a palavra atributo pelo nome do seu atributo

* Rotas:
Carrega o componente da opção selecionada  
As rotas disponíveis entre telas e entre arquivos do código.
> **Note** Exemplo:
> Na barra de navegação ao apertar os botões você é enviado para páginas diferentes. Quem faz essas rotas para a onde você vai dependendo da opção selecionada é o Router

O código a baixo define que se você clicar na palavra "Produtos", você vai ser enviado para a página de produtos  
**HTML Arquivo de rotas**  
`<a routerLink="/products">`  
`  Produtos                `  
`</a>                      `  

**TypeScript**  
`const routes: Routes = [{           `
`  path: "products",                 `
`  component: ProductCrudComponent   `
`}, {                                `
`  path: "products/create",          `
`  component: ProductCreateComponent `
`}];                                 `  

**HTML principal**  
`<mat-sidenav-content>               `  
`   <router-outlet></router-outlet>  `  
`</mat-sidenav-content>              `  

* Pipes:
É o nome dado ao sinal "|"  
Processamento feito variadamente, faz a intercolação com double mustache (`{{}}`)
> **Note** Esse nome se refere ao fato de duas chaves seguidas parecerem um bigode e traduzido ao literal Mustache = Bigode  

Também pode ser usado para alterar a formatação
> **Note** Por exemplo:  
> Se você tiver um valor numérico mas deseja apresenta-lo como um valor monetário, o pipe pode fazer essa alteração  

**Sem Parâmetros**
`<p>                                `  
`   O vencimento é                  `  
`   {{ produto.vencimento | date }} `  
`</p>                               `  

**Com Parâmetros**
`<td mat-cell *matCellDef="let product">   `  
`    {{ product.price | currency: 'BRL }}  `  
`</td>                                     `  

**É possível fazer mais de um pipe na mesma chamada**
`<p>                                                       `  
`   O vencimento é                                         `  
`   {{ produto.vencimento | date: 'fullDate' | uppercase }}`  
`</p>                                                      `  
* Programação **Reativa**
Toda vez que é feita uma alteração no projeto ele é executado de forma reativa, que não consome tanta memória do computador e executa as alterações para que o desenvolvedor possa vê-las em tempo real  
ReactiveX  
`import { Observable } from "rxjs";`  
* Observables:
Tudo começa a partir do padrão Observer...  
Padrão orientado a Evento, o observer faz a solicitação de que o subject fique "de olho" se houve algum evento, em caso positivo, o observer reage ao evento.  
> **Note** Por Exemplo:
> Quando você faz uma compra online e recebe um e-mail de confirmação da compra e após um tempo recebe um e-mail de aviso que o produto saiu para entrega e outro confirmando que você recebeu o produto.  
> A rota se torna:  
> Confirmação de compra    = Subject --> Compra             = Evento1 --> Disparo e-mail1 = Observer1  
> Verificação de postagem  = Subject --> Postagem Produto   = Evento2 --> Disparo e-mail2 = Observer2  
> Verificação de entrega   = Subject --> Entrega do Produto = Evento3 --> Disparo e-mail3 = Observer3  

Código 1  - front faz uma requisição no tipo post para o back
`criarNoBackend(produto: Produto): Observable<Produto> {  `  
`   return this.http.post<Produto>(this.url, produto);    `  
`}                                                        `  
</br>
Código 2  - back responde a requisição do front

`criarProduto(): void {                                   `  
`   this.criarNoBackend(this.produto).subscribe(() => {   `  
`       this.exibirMensagem("Salvo com sucesso!");        `  
`   });                                                   `
`}                                                        `  

A requisição demora para ser respondida, então o observable solicita para que o subjetive avise quando a requisição for respondida  

* Services:
São classes que têm como principal objetivo organizar e compartilhar métodos e dados entre componentes.