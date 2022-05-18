import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAlunoStore } from '../dataflow/alunoSlice'
import '../style.css'

export default function AlunoInfo() {
  const aluno = useSelector(state => state.aluno.aluno)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => dispatch(setAlunoStore(null))
  })

  return (
    <div className="container">
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
