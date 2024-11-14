# EasyStore 📦 - Backend

Este repositório contém o backend de um sistema de estoque, desenvolvido para gerenciar produtos, categorias, usuários e movimentações de estoque. A API fornece endpoints RESTful para comunicação com o frontend, permitindo operações CRUD em produtos, categorias e usuários, além de autenticação de usuários.

## Funcionalidades

- **Gerenciamento de Produtos**: Endpoints para criar, atualizar, visualizar e deletar produtos.
- **Categorias**: Endpoints para criação e exclusão de categorias.
- **Usuários**: Endpoints para criação, edição, visualização e exclusão de usuários.
- **Autenticação**: Endpoint para login, gerando tokens de sessão.
- **Segurança**: Criptografia de senhas com bcrypt.

## Tecnologias Utilizadas

- **JavaScript** - Linguagem principal do backend.
- **Express** - Framework para construção da API REST.
- **mssql** - Conector para comunicação com o banco de dados SQL Server.
- **bcrypt** - Biblioteca para criptografar senhas de usuários.
- **CORS** - Middleware para controle de acesso às rotas a partir de domínios externos.

## Endpoints

### 1. **Categorias**
   - **POST** `/categories`: Criação de uma nova categoria.
   - **DELETE** `/categories/:id`: Deleção de uma categoria.

### 2. **Produtos**
   - **POST** `/products`: Criação de um novo produto.
   - **GET** `/products`: Listagem de todos os produtos.
   - **GET** `/products/:id`: Detalhes de um produto específico.
   - **PUT** `/products/:id`: Atualização de um produto.
   - **DELETE** `/products/:id`: Deleção de um produto.

### 3. **Usuários**
   - **POST** `/user`: Criação de um novo usuário.
   - **GET** `/user/:id`: Detalhes de um usuário específico.
   - **PUT** `/user/:id`: Atualização de um usuário.
   - **DELETE** `/user/:id`: Deleção de um usuário.

### 4. **Autenticação**
   - **POST** `/authentication`: Login do usuário.

## Configuração do Projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
## Segurança

- **Senhas Criptografadas**: Senhas dos usuários são protegidas usando o bcrypt.
- **CORS**: Controla o acesso à API para evitar chamadas indesejadas de domínios não autorizados.
