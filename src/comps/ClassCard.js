import React from 'react'
import { Link } from 'react-router-dom'
import List from './List'

function ClassCard({data}) {
  return (
    <>
      <div className='class-card'>
        <div className='card-head'>
          <h2 className='class-title'><Link to={data.link}>{data.title}</Link></h2>
          <span className='class-teacher'>{data.teacher}</span>
        </div>
        <div className='card-body'>
          <List data={data.assignments} />
        </div>
      </div>
    </>
  )
}

export default ClassCard