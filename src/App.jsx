const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Part1 = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.part1} {props.exercises1}</p>
    </div>
  )
}
const Part2 = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.part2} {props.exercises2}</p>
    </div>
  )
}
const Part3 = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}
const Content = (props) => {
  console.log(props)
  return(
    <div>
      <Part1 part1 =  {props.part1} exercises1 = {props.exercises1} />
      <Part2 part2 =  {props.part2} exercises2 = {props.exercises2}/>
      <Part3 part3 =  {props.part3} exercises3 = {props.exercises3}/>
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack Application Development';
  const parts = [
  {
    name: 'Fundamentals of React',
    exercises1: 10
  }, 
  {
    name: 'Using properties to pass data',
    exercises2: 7
  },
  {
    name:'State of components',
    exercises3: 14
  }
]
  const total = parts[0].exercises1 + parts[1].exercises2 + parts[2].exercises3 ;

  return(
    <div>
      <Header course = {course}/>
      <Content
        part1 = {parts[0].name} exercises1 = {parts[0].exercises1}
        part2 = {parts[1].name} exercises2 = {parts[1].exercises2}
        part3 = {parts[2].name} exercises3 = {parts[2].exercises3}
      />
      <Total total = {total}/>
    </div>
  )
}

export default App