import { useState } from 'react'
import styles from './BookForm.module.css'

const initialForm = {
  titulo: '',
  autor: '',
  ano: '',
  genero: '',
}

function BookForm({ onCadastrar }) {
  const [form, setForm] = useState(initialForm)
  const [enviando, setEnviando] = useState(false)
  const [mensagem, setMensagem] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((dadosAtuais) => ({
      ...dadosAtuais,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setMensagem('')

    if (!form.titulo || !form.autor || !form.ano || !form.genero) {
      setMensagem('Preencha todos os campos.')
      return
    }

    try {
      setEnviando(true)
      await onCadastrar(form)
      setForm(initialForm)
      setMensagem('Livro cadastrado com sucesso!')
    } catch (error) {
      setMensagem(error.message)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Novo livro</h2>

      <label>
        Titulo
        <input
          type="text"
          name="titulo"
          value={form.titulo}
          onChange={handleChange}
          placeholder="Ex: Dom Casmurro"
        />
      </label>

      <label>
        Autor
        <input
          type="text"
          name="autor"
          value={form.autor}
          onChange={handleChange}
          placeholder="Ex: Machado de Assis"
        />
      </label>

      <div className={styles.row}>
        <label>
          Ano
          <input
            type="number"
            name="ano"
            value={form.ano}
            onChange={handleChange}
            placeholder="1899"
          />
        </label>

        <label>
          Genero
          <input
            type="text"
            name="genero"
            value={form.genero}
            onChange={handleChange}
            placeholder="Romance"
          />
        </label>
      </div>

      <button type="submit" disabled={enviando}>
        {enviando ? 'Cadastrando...' : 'Cadastrar livro'}
      </button>

      {mensagem && <p className={styles.message}>{mensagem}</p>}
    </form>
  )
}

export default BookForm
