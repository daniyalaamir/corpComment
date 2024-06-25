import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedbackItem = {
  upvoteCount: number
  badgeLetter: string
  companyName: string
  text: string
  daysAgo: number
}

type FeedbackItemProps = {
  item: FeedbackItem
}

export default function FeedbackItem({ item }: FeedbackItemProps) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{item.upvoteCount}</span>
      </button>
      <div>
        <p>{item.badgeLetter}</p>
      </div>
      <div>
        <p>{item.companyName}</p>
        <p>{item.text}</p>
      </div>
      <p>{item.daysAgo}d</p>
    </li>
  )
}
