Principais Tecnologias:
  - library: React
  - framework: Next.js
  - css-in-js: Styled Components
  - components-architecture: Atomic Design
  - superset: TypeScript

</br>

Recursos React: 
- useState
- useEffect
- useCallback
- useMemo
- React Query
- Context API
- useReducer

</br>

Arquitetura de pastas:
- src
  - components
    - atoms
    - molecules
    - organisms
    - templates
  - services
    - hooks
    - api
    - store
  - styles
  - pages
- public

</br>

PRINCIPAIS QUESTIONAMENTOS:

+ Porque React ao invés do vue?
  - O React apresenta uma stack mais consolidada, tendo vários frameworks bem robustos, como o Next.js, 
  enquanto o Vue ainda está evoluído sua stack com frameworks como o Nuxt.js.
  - Os novos projetos da braip serão mais consistentes, sendo aplicativos mobile desenvolvidos com React Native 
  e aplicativos web com React, gerando um ecossistema mais amigável para a futura equipe de front-end. 
  - O React permitirá ter uma equipe de front-end mais completa, que poderá desenvolver tanto mara web 
  quanto para mobile, já que a curva de aprendizado entre react e react native é mínima, com a adoção 
  de Atomic Design e a estrutura aqui apresentada, essa curva de aprendizado se torna praticamente nula.

+ Porque usar o Next.js ?
  - O principal benefício de utilizar o Next é o server-side-render, enquanto no react puro a renderização acontece
  totalmente no lado do cliente, com Next temos o benefício de poder ter paginas estáticas na nossa aplicação, estas 
  carregando de forma extremamente rápida e com menor custo para o back-end. 
  - Além das melhorias de performance, o Next também apresenta melhorias de SEO, tornando a aplicação melhor ranqueada 
  pelos motores de busca. 
  - As páginas serão carregadas mesmo com o javascript desativado no navegador do cliente, já que a renderização acontece 
  no lado do servidor. 

+ Porque usar Styled Components ?
  - Atualmente, Styled Components é a biblioteca de css-in-js mais utilizada no mercado, ela nos permite escrever o css 
  de uma forma mais amigável do que com a sintaxe JSON. 
  - Além de ser mais amigável, traz recursos de pre-processadores, nos permitindo criar estilizações mais dinâmicas e com
  menos verbosidade. 
  - Proporciona mais consistência entre os projetos de front-end web e mobile. Pois, abstrai a mesma sintaxe para os dois 
  cenários.   

+ Porque usar Atomic Design ?
  - O principal benefício do Atomic Design é tornar o projeto mais escalável, organizando os componentes em nível representativo, 
  como átomos, moléculas, organismos e templates.
  - Encontrar um componente para dar manutenção se torna extremamente fácil, podendo simplesmente pensar em seu papel na interface 
  e deduzir em qual categoria de componente ele estaria (atoms, molecules, organisms, templates).
  - Os componentes pensados dentro da arquitetura de Atomic Design tendem a ser mais enxutos e legíveis em termos de códigos. Pois 
  são mais seguimentos dentro da arquitetura de pasta, mantendo cada um com menos responsabilidade.

+ Porque usar os recursos do React é importante ?
  - O principal beneficio da utilização dos hooks listados é a performance. Um componente costuma ser renderizado várias vezes 
  dentro da interface, a utilização dos hooks garantem que só seja renderizado a parte dinâmica dos componentes, sendo as partes estática carregadas apenas na inicialização. 
  - A utilização do React Query reduz a duplicação de requests, compartilhando o resultado do request, realizado em um componente,
  com outros components que realizam internamente o mesmo request.
  - A utilização da Context API permite o compartilhamento de informações entre os componente de uma forma mais escalável do que 
  o uso de callbacks passadas como propriedade de um componente para o outro.

+ Porque usar o TypeScript ?
  - O principal beneficio do TypeScript é a escalabilidade que traz para o projeto, permitindo criar interfaces para os componentes, garantindo que a utilização desses siga um contrato. 
  - Evita a ocorrência de erros comuns em linguagens com tipagem dinâmica, como uma variável que deveria conter um número estar armazenando uma string, comprometendo o funcionamento do códigos. 
  - Ajuda na intellisense do vsCode, proporcionando um desenvolvimento de código muito mais produtivo. 