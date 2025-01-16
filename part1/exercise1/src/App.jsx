const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}


const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
  return (
    <div>
      <p> {part1} {exercises1} </p>
      <p> {part2} {exercises2} </p>
      <p> {part3} {exercises3} </p>
    </div>
  );
};

const Total = (props) => {
  return(
    <p>Number of exercises {props.total}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'

  const part1 = 'Fundamentals of React'
  const exercises1 = 10

  const part2 = 'Using props to pass data'
  const exercises2 = 7

  const part3 = 'State of a component'
  const exercises3 = 14

  const contents = [
      {part: part1, exercise: exercises1},
      {part: part2, exercise: exercises2},
      {part: part3, exercise: exercises3}
  ]


  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App