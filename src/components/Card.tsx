import { useContext } from "react";
import { UserContext } from "../context/user.context";
import moment from "moment";

interface NoteCardProps {
  content: string;
  createdAt: Date;
}

// RESPONSIBILITY: untuk menampilkan dan beri tau form untuk edit/delete
export const NoteCard = ({ content, createdAt }: NoteCardProps) => {
  const username = useContext(UserContext);

  // Inform to form that I wanna edit/remove:
  // Edit
  //  Remove

  return (
    <div>
      <div className="p-3 border rounded-lg bg-slate-400">
        <div>{content}</div>
        <div>{moment(createdAt).fromNow()}</div>
        <p>{username}</p>
      </div>
    </div>
  );
};
