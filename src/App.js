
import React, { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  state = {
    comentarios: [
      {
        nome: 'Hudson',
        email: 'hudson@gmail.com',
        data: new Date(2023, 8, 5, 12, 5, 0),
        message: "O ReactJS é uma biblioteca JavaScript robusta."
      },
      {
        nome: 'Sandy',
        email: 'sandy@gmail.com',
        data: new Date(2023, 8, 5, 19, 35, 0),
        message: "JSX torna fácil codificar e renderizar elementos."
      },
      {
        nome: 'Marlon',
        email: 'marlon@gmail.com',
        data: new Date(2023, 8, 5, 8, 14, 0),
        message: "O Virtual DOM elimina a renderização excessiva."
      }
    ],

    novoComentario: {
      nome: '',
      email: '',
      message: ''
    }
  }

  adicionarComentario = evento => {

    evento.preventDefault()
    const novoComentario = { ...this.state.novoComentario, data: new Date() }

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome: '', email: '', message: '' }
    })
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)
    this.setState({ comentarios: lista })
  }

  digitacao = evento => {
    const { name, value } = evento.target;
    this.setState({
      novoComentario: { ...this.state.novoComentario, [name]: value },
    })
  }

  render() {
    return (
      <div className="App" >
        <h1>Commentary | Feedback</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key={indice}
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.message}
          </Comentario>
        ))}

        <form method='post' onSubmit={this.adicionarComentario} className='NovoComentario'>
          <h2>Adicionar um Feedback</h2>
          <div>
            <input
              type='text'
              name='nome'
              placeholder='Digite seu nome'
              value={this.state.novoComentario.nome}
              onChange={this.digitacao}
              required
            />
          </div>
          <div>
            <input
              type='email'
              name='email'
              placeholder='Digite seu email'
              value={this.state.novoComentario.email}
              onChange={this.digitacao}
              required
            />
          </div>
          <div>
            <textarea
              name='message'
              rows="4"
              placeholder='Digite seu comentário'
              value={this.state.novoComentario.message}
              onChange={this.digitacao}
              required
            >
            </textarea>
          </div>
          <button type='submit'>Adicionar Comentario</button>
        </form>
      </div>
    );
  }
}

export default App;
