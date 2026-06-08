# 📚 Biblioteca Digital — React + Vite + JSON Server

Aplicação web para cadastro e listagem de livros, desenvolvida com React + Vite consumindo uma API fake com JSON Server.

## 🚀 Como rodar o projeto

### 1. Instale as dependências
```bash
npm install
```

### 2. Inicie o JSON Server (API fake)
Abra **um terminal** e execute:
```bash
npm run server
```
O servidor vai rodar em: **http://localhost:3001**

### 3. Inicie o React (em outro terminal)
```bash
npm run dev
```
A aplicação vai rodar em: **http://localhost:5173**

---

## 📁 Estrutura do projeto

```
biblioteca/
├── db.json                   # Banco de dados fake (JSON Server)
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx               # Componente principal (useState + useEffect + fetch)
    ├── App.module.css
    ├── index.css
    └── components/
        ├── BookForm.jsx      # Formulário de cadastro (POST)
        ├── BookForm.module.css
        ├── BookList.jsx      # Listagem de livros (GET)
        └── BookList.module.css
```

---

## ✅ Requisitos atendidos

| Requisito | Status |
|-----------|--------|
| Projeto criado com React + Vite | ✅ |
| Arquivo `db.json` configurado | ✅ |
| JSON Server funcionando localmente | ✅ |
| Listagem de dados com `fetch` | ✅ |
| Uso de `useState` e `useEffect` | ✅ |
| Formulário com 4 campos (título, autor, ano, gênero) | ✅ |
| Cadastro via requisição `POST` | ✅ |
| Atualização da lista após cadastro | ✅ |
| Interface organizada e responsiva | ✅ |

---

## 🛠 Tecnologias

- **React 18** — biblioteca de UI
- **Vite** — bundler e servidor de desenvolvimento
- **JSON Server** — API REST fake para desenvolvimento
- **CSS Modules** — estilos encapsulados por componente

---

## 📝 Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/livros` | Lista todos os livros |
| POST | `/livros` | Cadastra novo livro |
| PUT | `/livros/:id` | Atualiza livro |
| DELETE | `/livros/:id` | Remove livro |
