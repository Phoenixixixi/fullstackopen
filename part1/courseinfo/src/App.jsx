// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

function Header({ course }) {
  return <h1>{course}</h1>
}

function Content({ courses }) {
  return (
    <>
      {courses.map((course) => (
        <Part part={course.name} exercises={course.exercises} />
      ))}
    </>
  )
}

function Part({ part, exercises }) {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

function Total({ total_exercise }) {
  const total = total_exercise.reduce(
    (acc, exercise) => acc + exercise.exercises,
    0
  )
  return <p>Number of Exercise {total}</p>
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course.name} />
      <Content courses={course.parts} />
      <Total total_exercise={course.parts} />
    </div>
  )
}

export default App
