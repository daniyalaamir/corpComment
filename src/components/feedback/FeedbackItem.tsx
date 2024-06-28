import { useState } from "react";
import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";

type FeedbackItemProps = {
  item: TFeedbackItem
}

export default function FeedbackItem({ item }: FeedbackItemProps) {
  const [open, setOpen] = useState(false)
  const [upvoteCount, setUpvoteCount] = useState(item.upvoteCount)

  const handleUpvote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUpvoteCount(prev => ++prev)
    e.currentTarget.disabled = true
    e.stopPropagation()
  }

  return (
    <li 
      className={`feedback ${open ? 'feedback--expand' : ''}`}
      onClick={() => setOpen(prev => !prev)}
    >
      <button onClick={handleUpvote}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{item.badgeLetter}</p>
      </div>
      <div>
        <p>{item.company}</p>
        <p>{item.text}</p>
      </div>
      <p>{item.daysAgo === 0 ? 'NEW' : `${item.daysAgo}d`}</p>
    </li>
  )
}
