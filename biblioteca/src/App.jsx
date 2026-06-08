import { useEffect, useState } from 'react'
import BookForm from './components/BookForm.jsx'
import BookList from './components/BookList.jsx'
import styles from './App.module.css'

const API_URL = 'http://localhost:3001/livros'

function App() {
  const [livros, setLivros] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  async function buscarLivros() {
    try {
      setCarregando(true)
      setErro('')

      const resposta = await fetch(API_URL)

      if (!resposta.ok) {
        throw new Error('Nao foi possivel carregar os livros.')
      }

      const dados = await resposta.json()
      setLivros(dados)
    } catch (error) {
      setErro(error.message)
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    buscarLivros()
  }, [])

  async function cadastrarLivro(novoLivro) {
    const resposta = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoLivro),
    })

    if (!resposta.ok) {
      throw new Error('Nao foi possivel cadastrar o livro.')
    }

    await buscarLivros()
  }

  async function excluirLivro(id) {
    const resposta = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })

    if (!resposta.ok) {
      throw new Error('Nao foi possivel excluir o livro.')
    }

    await buscarLivros()
  }

  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <p className={styles.eyebrow}>Biblioteca Digital</p>
        <h1>Cadastro de livros</h1>
        <p>
          Gerencie os livros da biblioteca usando React, Vite, fetch e uma API
          fake com JSON Server.
        </p>
      </section>

      <section className={styles.content}>
        <BookForm onCadastrar={cadastrarLivro} />
        <BookList
          livros={livros}
          carregando={carregando}
          erro={erro}
          onExcluir={excluirLivro}
        />
      </section>
    </main>
  )
}

export default App
