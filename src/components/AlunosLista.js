import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../style.css'
import { setAlunoStore } from '../dataflow/alunoSlice';

function AlunosLista() {
  const [alunos, setAlunos] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('http://hp-api.herokuapp.com/api/characters/students').then(response => setAlunos(response.data))
  }, [])

  return (
    <div className="container">
      <div className='content'>
        <h1 className='title'>Alunos</h1>
        <section className='alunos'>
          {alunos.map((aluno, index) => (
            <Link
              key={index}
              onClick={() => dispatch(setAlunoStore(aluno))}
              to={`aluno/${aluno.name.replaceAll(' ', '').toLowerCase()}`}
            >
              <div className='alunoCard'>
                <figure>
                  <img src={aluno.image} alt={aluno.name}/>
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
