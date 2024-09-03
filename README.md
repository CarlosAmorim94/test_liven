# Teste Front End Liven

Este projeto consiste no desenvolvimento de uma loja simples em React utilizando TypeScript. A aplicação inclui um catálogo de produtos e um carrinho de compras, permitindo ao usuário adicionar e remover produtos do carrinho.

**Deploy:** [https://test-liven.vercel.app/](https://test-liven.vercel.app/)

**Observação:** O foco principal foi nas funcionalidades e nos testes. O design é básico, mas responsivo (Não utilizei Figma).

## Tecnologias Utilizadas
- **Next.js:** Escolhido pela simplicidade e agilidade na construção de aplicações web modernas.
- **TypeScript:** Utilizado como requisito do projeto e para garantir a robustez e tipagem do código.
- **TailwindCSS:** Para estilização rápida e eficiente, com a facilidade de já vir configurado no Next.js.
- **Jest:** Ferramenta de testes, utilizada para garantir a qualidade e a confiabilidade do código.
- **Tanstack/React Query:** Adotado por suas vantagens de performance e caching eficiente.
- **Axios:** Utilizado para requisições HTTP, aproveitando-se de benefícios de performance e caching.

## Como Rodar o Projeto
Para clonar e executar o projeto localmente, siga os passos abaixo:

```bash
# Clone o repositório
$ git clone https://github.com/CarlosAmorim94/test_liven

# Entre na pasta do repositório clonado
$ cd test_liven

# Instale as dependências
$ npm install

# Execute o projeto
$ npm run dev

# Para rodar os testes
$ npm test
```

## Testes
### Páginas:
Foram realizados testes em diversos aspectos das páginas, incluindo:
- Carregamento correto de itens na home.
- Funcionamento do carrinho de compras.
- Validação da exibição de erros nos cenários esperados.
  
![image](https://github.com/user-attachments/assets/2480d99f-05f1-42a9-9a49-53a2e07de9a8)

### Componentes:
Os testes focaram em componentes com interações específicas, garantindo que comportamentos esperados sejam mantidos.
    
  ![image](https://github.com/user-attachments/assets/8d37aa4c-5a65-4793-8dc2-c4958fb25a79)

## Simplificação e Abstração de Código
- **Requisições e Caching:** Todas as requisições foram abstraídas em custom hooks para melhorar o sistema de caching, evitando requisições desnecessárias e re-renderizações. Utilizando o mesmo `queryKey` com React Query, o caching é eficiente e o hook pode ser usado em qualquer parte do código sem complicações.
  
![image](https://github.com/user-attachments/assets/0f6d0ca1-a13e-4b61-b86d-cc9827268594)

- **Camada de Serviços Desacoplada:** As requisições foram separadas dos custom hooks, permitindo que mudanças na lógica de fetch ou na biblioteca de requisições sejam feitas sem impactar diretamente outras partes do código. Por exemplo, é possível substituir o React Query por outra abordagem sem grandes refatorações, ou trocar o Axios sem afetar a lógica dos hooks.
  
![image](https://github.com/user-attachments/assets/a13f9676-8ca4-4634-8606-c1e51b2ee1b7)

- **Fallbacks em Renderizações:** Foram implementados fallbacks para renderizações críticas, garantindo que a aplicação não quebre em cenários de falha.
  
 ![image](https://github.com/user-attachments/assets/68a60899-6ce0-4547-80c4-f93e372a3f39)
 
- **Componentização Necessária:** Componentes foram criados apenas onde havia real necessidade, como para evitar repetição de código.
  
![image](https://github.com/user-attachments/assets/9741be36-f941-4042-beef-c079a9c27c7e)


## Nota Final
Pensei em adicionar melhorias, tanto de funcionalidades quanto de estética, porém preferi entregar o que foi solicitado com a maior qualidade possível no menor tempo possível.
