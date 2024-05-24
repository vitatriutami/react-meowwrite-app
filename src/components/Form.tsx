import { useContext, useState } from "react";
import { INoteContext, NoteContext } from "../context/note.context";
import { UserContext } from "../context/user.context";
import { INote } from "../types/entity";
import { createId } from "@paralleldrive/cuid2";

export const NoteForm = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context as INoteContext;
  const username = useContext(UserContext);
  const [note, setNote] = useState("");

  function handleDeriveNote(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setNote(e.target.value);
  }

  // Add Note
  function handleAddNote() {
    if (note === "") {
      alert("Please type your note!");
      return;
    }
    const newNote: INote = {
      id: createId(),
      content: note,
      createdAt: new Date(),
      username,
    };
    setNotes([...notes, newNote]);
  }

  // Update

  // Delete

  return (
    <div className="flex gap-4">
      <textarea onChange={handleDeriveNote} className="p-3"></textarea>
      <button onClick={handleAddNote} className="bg-red-200 p-2 rounded-xl">
        Add todo
      </button>
    </div>
  );
};
