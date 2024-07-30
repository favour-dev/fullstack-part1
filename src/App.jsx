const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Part = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}
const Content = (props) => {
  console.log(props)
  return(
    <div>
      {props.parts.map((part, index)=> (
          <Part key={index} part={part}/>
      ))}
    </div>
  )
}
const App = () => {
  const course = {
    name:'Half Stack Application Development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        }, 
        {
          name: 'Using properties to pass data',
          exercises: 7
        },
        {
          name:'State of components',
          exercises: 14
        }
      ] 
  }
  return(
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts}
        // part1 = {parts[0].name} exercises1 = {parts[0].exercises1}
        // part2 = {parts[1].name} exercises2 = {parts[1].exercises2}
        // part3 = {parts[2].name} exercises3 = {parts[2].exercises3}
      />
    </div>
  )
}

export default App