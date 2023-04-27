# curso-de-angular

** O que é Angular? **
Um framework JavaScript desenvolvido pelo Google para criação de aplicações Web SPA baseada em componentes 

** Command Line Interface - CLI **
npm i -g @angular/cli    // Para instalar o pacote CLI do angular
ng new minha-app         // Para criar uma aplicação



** TypeScript **
Linguagem criada pela Microsoft
O código é escrito em TypeScript mas é compilado em JavaScript porque nenhum navegador conhece o TypeScript
Orientada a Objetos & Tipagem forte 
Superset do JavaScript (tudo que tem no js, também tem no ts)



** Inicialização da APP **
main.ts                  // O código é em TypeScript para inicializar a aplicação em angular
AppModule                // Organizada em componentes (modularizada) 
Bootstrap                // Aponta para o componente AppComponent (que vai trazer a arvore de componentes)
AppComponent             // Vai trazer a arvore de componentes



** O que é um Componente **
Possui Comportamento - TS 
Possui Estrutura - HTML 
Possui Estilo - CSS 

Por conta disso, sempre haverão 3 arquivos padrão:
- home.comonent.css 
- home.component.html 
- home.component.ts 

Tag prefixo padrão: <app-home></app-home>
Toda vez que for utilizada essa tag, todo o estilo, comportamento e estrutura realizados no componente, serão atribuídos ao código encapsulada dentro da tag

O angular não organiza a aplicação apenas por componentes, organiza também por módulos, é possível utilizar um único módulo para aplicações pequenas, mas para aplicações maiores, é preferível utilizar mais módulos, eles estão classificados em: 
- AppModule - Componente A
- XModule   - Componentes B, C, D
- YModule   - Componentes E, F, G, H
- ZModule   - Componentes I, J, K, L, M

A árvore fica assim
A -> B -> E
A -> B -> F -> I
A -> B -> F -> J
A -> C
A -> D -> G -> H
A -> D -> G -> K
A -> D -> G -> L
A -> D -> G -> M

Quando você cria um componente dentro de um módulo, você tem a opção de dizer se esse componente pode ser visto de fora do módulo ou se aquele componente vai ficar visível apenas dentro do módulo.
Com exceção do componente H, como esse componente só é apontado pelo componente G e ambos estão no mesmo módulo, então o componente H só pode ser visto e referenciado dentro de seu módulo de origem.



** Anatomia do Módulo **
- Declarations:                     - Exports:
 * Components                        * Components
 * Diretivas                         * Diretivas
 * Pipes                             * Pipes

- Imports:                          - Providers:
 * Module A                          * Service A
 * Module B                          * Service B
 * Module C                          * Service C

                - Boostrap:
                 * App Component


