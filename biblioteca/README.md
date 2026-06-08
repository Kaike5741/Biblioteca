# Biblioteca Digital - React + Vite + JSON Server

Aplicacao web para cadastro e listagem de livros, desenvolvida com React + Vite consumindo uma API fake com JSON Server.

## Como rodar o projeto

### 1. Instale as dependencias

```bash
npm install
```

### 2. Inicie o JSON Server

Abra um terminal e execute:

```bash
npm run server
```

A API vai rodar em: `http://localhost:3001`

### 3. Inicie o React

Em outro terminal, execute:

```bash
npm run dev
```

A aplicacao vai rodar em: `http://localhost:5173`

Se a porta 5173 ja estiver ocupada, o Vite mostra outra URL no terminal, por exemplo `http://localhost:5174` ou `http://localhost:5175`.

## Requisitos atendidos

| Requisito | Status |
| --- | --- |
| Projeto criado com React + Vite | OK |
| Arquivo `db.json` configurado | OK |
| JSON Server funcionando localmente | OK |
| Listagem de dados com `fetch` | OK |
| Uso de `useState` e `useEffect` | OK |
| Formulario com quatro campos | OK |
| Cadastro via requisicao `POST` | OK |
| Atualizacao da lista apos cadastro | OK |
| Interface organizada e responsiva | OK |

## Endpoints da API

| Metodo | Rota | Descricao |
| --- | --- | --- |
| GET | `/livros` | Lista todos os livros |
| POST | `/livros` | Cadastra novo livro |
| DELETE | `/livros/:id` | Exclui um livro |

## Estrutura principal

```text
biblioteca/
- db.json
- index.html
- package.json
- vite.config.js
- src/
  - main.jsx
  - App.jsx
  - App.module.css
  - index.css
  - components/
    - BookForm.jsx
    - BookForm.module.css
    - BookList.jsx
    - BookList.module.css
```
