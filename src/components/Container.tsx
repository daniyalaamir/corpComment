import { TFeedbackItem } from "../lib/types";
import FeedbackList from "./FeedbackList";
import Header from "./Header";

type ContainerProps = {
  isLoading: boolean
  feedbackItems: TFeedbackItem[]
  error: string
  handleAddToList: (text: string) => void
}

export default function Container({ feedbackItems, isLoading, error, handleAddToList }: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList 
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        error={error} 
      />
    </main>
  )
}
