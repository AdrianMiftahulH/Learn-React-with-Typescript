import { useState } from "react"
import Counter from "./components/Counter"
import Counter2 from "./components/Counter2"
import Heading from "./components/Heading"
import Section from "./components/Section"
import List from "./components/List"


function App(){
  const [ count, setCount] = useState<number>(1)

  return (
    <>
      <Heading title={"Hello"}/>  
      <Section title={"Different Title"}>
        this my section
      </Section>
      <Counter/>
      <Counter2 setCount={setCount}>Counter2 is {count}</Counter2>
      <List items={["Hamburger", "Soda", "Milk"]} render={(item: string) => <span className="gold">{item}</span>} />
    </>
  )
}

export default App