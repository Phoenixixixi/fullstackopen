// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

function Header({ course }) {
  return <h1>{course}</h1>
}

function Content(props) {
  return (
    <>
      <p>
        {props.part1}
        {props.exercises1}
      </p>
      <p>
        {props.part2}
        {props.exercises2}
      </p>
      <p>
        {props.part3}
        {props.exercises3}
      </p>
    </>
  )
}

function Total({ total_exercise }) {
  return <p>Number of Exercise {total_exercise}</p>
}

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content
        exercises1={exercises1}
        part1={part1}
        exercises2={exercises2}
        part2={part2}
        exercises3={exercises3}
        part3={part3}
      />
      <Total total_exercise={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
