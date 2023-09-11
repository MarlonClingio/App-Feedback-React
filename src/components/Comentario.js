import React from 'react';
import { formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale'

import './Comentario.css';
import imageUsuario from './UserAvatarProfile.png';

const Comentario = props => {

  return <div className='comentario'>
    <img src={imageUsuario} alt={props.nome} className='avatar'></img>
    <div className='conteudo'>
      <h2 className='nome'>{props.nome}</h2>
      <p className='email'>{props.email}</p>
      <p className='message'>{props.children}</p>
      <p className='data'>{formatRelative(props.data, new Date(), { locale: ptBR })}</p>
      <div className='buttons'>
        <button className='button confirm'>&raquo;</button>
        <button onClick={props.onRemove} className='button remove'>&times;</button>
      </div>
    </div>
  </div>
};

export default Comentario;