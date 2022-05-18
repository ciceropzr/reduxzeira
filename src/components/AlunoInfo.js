import React from 'react'
import { connect } from 'react-redux'
import '../style.css'

function AlunoInfo({aluno}) {
  return (
    <div className="container">
      {console.log(aluno)}
      <div className='content'>
        <figure>
          <img src={aluno.image} />
        </figure>
        <span>
          <h1 className='title'>
            {aluno.name}
          </h1>
          <p>
            mais infos do aluno
          </p>
        </span>
      </div>
    </div>
  )
}

export default connect((state) => ({ aluno: state.aluno }))(AlunoInfo)
