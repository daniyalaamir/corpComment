import { TriangleUpIcon } from '@radix-ui/react-icons'

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>A</p>
        </div>
        <div>
          <p>Amazon</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur totam quisquam odio, ullam asperiores enim.</p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  )
}
