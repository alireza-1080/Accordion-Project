import './App.css'
import React, { useState } from 'react'
import Accordion from './components/Accordion/Accordion'

function App() {

  const [datas] = useState([
    {title: "Accordion 1",color: "#ffcdd2", borderColor: "#c62828",details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?"},
    {title: "Accordion 2",color: "#e1bee7", borderColor: "#6a1b9a",details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?"},
    {title: "Accordion 3",color: "#d1c4e9", borderColor: "#4527a0",details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?"},
    {title: "Accordion 4",color: '#c8e6c9', borderColor: "#1b5e20",details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?"},
  ])

  return (
    <div className='body'>
      <div className="app-container">
        {datas.map(data => {
          return <Accordion key={data.title} {...data}/>
        })}
      </div>
    </div>
  )
}

export default App