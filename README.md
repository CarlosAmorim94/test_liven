# Teste Front End Liven

Foi solicitado para desenvolver um loja simples em React utilizando Typescript, com um catálogo de produtos e um carrinho de compras. O usuário deve poder adicionar/remover produtos do catálogo no carrinho de compras.

Deploy: https://test-liven.vercel.app/

Obs: Foco em funcionalidade e testes, o design está feio, porém responsivo (Não tinha figma :-) )

# Tecnologias utilizadas:
- Next.js. (Pela simplicidade e agilidade que o framework proporciona)
- Typescript. (Requisito do projeto e pela robustes do código)
- TailwindCSS. (Pela simplicidade, agilidade e já vem configurado no Next.js)
- Jest. (Requisito do projeto)
- Tanstack/React Query. (diversos motivos de performance e cache de código)
- Axios. (diversos motivos de performance e cache de código)

# Testes
- Pages:
  - Testados diversos itens como:
    - Carrega itens na home.
    - Carrega itens no carrinho.
    - se aparecem erros quando devem aparecer.
    e outros mais...

![image](https://github.com/user-attachments/assets/2480d99f-05f1-42a9-9a49-53a2e07de9a8)


- Componentes:
  - teste somente em componentes com algum tipo de ação.
    
  ![image](https://github.com/user-attachments/assets/8d37aa4c-5a65-4793-8dc2-c4958fb25a79)

# Simplificando as análises de códigos:

- Todas as requisições foram abstraidas em custom hooks, para melhorar o sistema de cacheamento, evitando requisições desnecessárias, um exemplo:
  - Utilizando esse hook, temos a mesma queryKey, então o cacheamento do React Query vai funcionar, e depois podemos chamar em qualquer parte do código sem re-renderizações desnecessárias.
![image](https://github.com/user-attachments/assets/0f6d0ca1-a13e-4b61-b86d-cc9827268594)

- Camada de serviços abstraída da requisição do custom hook, ambas podem ser facilmente modificadas sem dependerem uma da outra:
  - Se por acaso não quisermos mais utilizar o ReactQuery, podemos alterar e utilizar o serviço getAllProducts.
  - ou se o Axios for problema futuramente, podemos alterar o service sem comprometer o ReactQuery.

![image](https://github.com/user-attachments/assets/a13f9676-8ca4-4634-8606-c1e51b2ee1b7)

- Renderizaçoes "importantes" com substitutos para evitar quebrar aplicação:
  
  ![image](https://github.com/user-attachments/assets/68a60899-6ce0-4547-80c4-f93e372a3f39)

 - Somente componentizações "necessárias" onde o código irá se repetir:

   ![image](https://github.com/user-attachments/assets/9741be36-f941-4042-beef-c079a9c27c7e)


# Obs: Pensei em adicionar melhorias, tanto de funcionalidades quanto de estética, porém preferi entregar o que foi solicitado com a maior qualidade possível no menor tempo possível.
