import ClassForm from '@/components/form/ClassForm'
import React from 'react'

const ClassFormPage = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        <h1 className='mb-5 text-xl'>Enter Class Name</h1>
        <ClassForm/>
    </div>
  )
}

export default ClassFormPage