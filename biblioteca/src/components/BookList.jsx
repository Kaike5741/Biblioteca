import { useState } from 'react'
import styles from './BookList.module.css'

function BookList({ livros, carregando, erro, onExcluir }) {
  const [excluindoId, setExcluindoId] = useState(null)
  const [erroExclusao, setErroExclusao] = useState('')

  async function handleExcluir(livro) {
    const confirmou = window.confirm(`Deseja excluir "${livro.titulo}"?`)

    if (!confirmou) {
      return
    }

    try {
      setErroExclusao('')
      setExcluindoId(livro.id)
      await onExcluir(livro.id)
    } catch (error) {
      setErroExclusao(error.message)
    } finally {
      setExcluindoId(null)
    }
  }

  return (
    <section className={styles.listArea}>
      <div className={styles.titleRow}>
        <h2>Livros cadastrados</h2>
        <span>{livros.length} livro(s)</span>
      </div>

      {carregando && <p className={styles.status}>Carregando livros...</p>}
      {erro && <p className={styles.error}>{erro}</p>}
      {erroExclusao && <p className={styles.error}>{erroExclusao}</p>}

      {!carregando && !erro && livros.length === 0 && (
        <p className={styles.status}>Nenhum livro cadastrado ainda.</p>
      )}

      <div className={styles.grid}>
        {livros.map((livro) => (
          <article className={styles.card} key={livro.id}>
            <h3>{livro.titulo}</h3>
            <p>{livro.autor}</p>
            <div className={styles.meta}>
              <span>{livro.ano}</span>
              <span>{livro.genero}</span>
            </div>
            <button
              className={styles.deleteButton}
              type="button"
              onClick={() => handleExcluir(livro)}
              disabled={excluindoId === livro.id}
            >
              {excluindoId === livro.id ? 'Excluindo...' : 'Excluir'}
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BookList
