import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { TFeedbackItem } from "../lib/types";

type FeedbackListProps = {
  isLoading: boolean
  feedbackItems: TFeedbackItem[]
  error: string
}

export default function FeedbackList({ feedbackItems, isLoading, error }: FeedbackListProps) {
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
