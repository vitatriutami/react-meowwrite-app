import { NoteCard } from "./Card";
import { INoteContext, NoteContext } from "../context/note.context";
import { useContext } from "react";

export const NotePreview = () => {
  const context = useContext(NoteContext);
  const { notes } = context as INoteContext;

  return (
    <div className="space-y-2">
      {notes.map((item) => {
        return <NoteCard key={item.id} {...item} />;
      })}
    </div>
  );
};
