import { Event } from "../../../interfaces/context/events/event";

function PostCard({ post }: { post: Event }) {
  return (
    <div className="mb-2 bg-primary p-4 rounded-xl">
      <div className="flex gap-3 items-center mb-2"></div>
    </div>
  );
}

export default PostCard;
