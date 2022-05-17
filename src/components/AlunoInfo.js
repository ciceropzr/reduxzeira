import React from 'react'
import '../style.css'

export default function AlunoInfo() {
  return (
    <div className="container">
      <div className='content'>
        <figure>
          {/* <img src={aluno.image} /> */}
          img do aluno
        </figure>
        <span>
          <h1 className='title'>
            {/* {aluno.name} */}
            nome do aluno
          </h1>
          <p>
            mais infos do aluno
          </p>
        </span>
      </div>
    </div>
  )
}
