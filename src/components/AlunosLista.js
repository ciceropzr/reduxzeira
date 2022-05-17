import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style.css'

function AlunosLista() {
  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    axios.get('http://hp-api.herokuapp.com/api/characters/students').then(response => setAlunos(response.data))
  }, [])

  return (
    <div className="container">
      <div className='content'>
        <h1 className='title'>Alunos</h1>
        <section className='alunos'>
          {alunos.map((aluno, index) => (
            <Link to={`aluno/${aluno.name.replaceAll(' ', '').toLowerCase()}`} key={index}>
              <div className='alunoCard'>
                <figure>
                  <img src={aluno.image} />
                </figure>
                <h3>{aluno.name}</h3>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}

export default AlunosLista;
