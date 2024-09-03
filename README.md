# Teste Front End Liven

Foi solicitado para desenvolver um loja simples em React utilizando Typescript, com um catálogo de produtos e um carrinho de compras. O usuário deve poder adicionar/remover produtos do catálogo no carrinho de compras.

# Tecnologias utilizadas:
- Next.js. (Pela simplicidade e agilidade que o framework proporciona)
- Typescript. (Requisito do projeto e pela robustes do código)
- TailwindCSS. (Pela simplicidade, agilidade e já vem configurado no Next.js)
- Jest. (Requisito do projeto)
- Tanstack/React Query. (diversos motivos de performance e cache de código)
- Axios. (diversos motivos de performance e cache de código)

# Simplificando as análises de códigos:

- Todas as requisições foram abstraidas em custom hooks, para melhorar o sistema de cacheamento, evitando requisições desnecessárias, um exemplo:
  - Utilizando esse hook, temos a mesma queryKey, então o cacheamento do React Query vai funcionar, e depois podemos chamar em qualquer parte do código sem re-renderizações desnecessárias.
![image](https://github.com/user-attachments/assets/0f6d0ca1-a13e-4b61-b86d-cc9827268594)

- Camada de serviços abstraída da requisição do custom hook, ambas podem ser facilmente modificadas sem dependerem uma da outra:
  - Se por acaso não quisermos mais utilizar o ReactQuery, podemos alterar e utilizar o serviço getAllProducts.
  - ou se o Axios for problema futuramente, podemos alterar o service sem comprometer o ReactQuery.

![image](https://github.com/user-attachments/assets/a13f9676-8ca4-4634-8606-c1e51b2ee1b7)


# Testes

- Componentes:
  - Somente em componentes com algum tipo de ação.
  
