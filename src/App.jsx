import { useState } from 'react'
import Card from './ui/Card'
import article from'./data/article.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='page'>
      <Card 
        title={article.title}
        image={article.image}
        content={article.content}
        published={article.published}
        author={article.author}
      />
    </section>
  )
}

export default App
