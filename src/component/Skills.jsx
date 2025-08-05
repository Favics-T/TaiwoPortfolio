import React from 'react'

const Skills = () => {
    const skills = ['HTML5','CSS',"Javascript","Reactjs","NextJS","TypeScript"]
  return (
    <div>
      <div className='flex flex-col gap-8 justify-center items-center'>
        <h1 className='text-6xl'>My Skills</h1>

        <ul className='flex flex-col gap-2'>
            {
                skills.map((skill,idx)=>(
                    <li 
                    className='text-xl text-center border-b border-t rounded border-pink-300'
                    key={idx}>{skill}</li>
                ))
            }
        </ul>
      </div>


    </div>
  )
}

export default Skills
