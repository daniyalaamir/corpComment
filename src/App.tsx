import { useState, useEffect } from "react"
import Container from "./components/Container"
import Footer from "./components/Footer"
import HashtagList from "./components/HashtagList"
import { TFeedbackItem } from "./lib/types"

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch('https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks')
        if(!res.ok) {
          throw new Error()
        }
        const data = await res.json()
        setFeedbackItems(data.feedbacks)
      } catch(error) {
        setError('Something went wrong. Please try again later.')
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const handleAddToList = async (text: string) => {
    const companyName = text.split(' ').find(word => word.includes('#'))!.substring(1)
    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase()
    }
    
    setFeedbackItems([...feedbackItems, newItem])

    await fetch('https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks', {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <div className="app">
      <Footer />
      <Container 
        feedbackItems={feedbackItems} 
        isLoading={isLoading}
        error={error}
        handleAddToList={handleAddToList}
      />
      <HashtagList />
    </div>
  )
}

export default App
