import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([])
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

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {error && <ErrorMessage />}
      {feedbackItems.map(item => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </ol>
  )
}
