import { useState } from "react";
import { NoteForm } from "../components/Form";
import { NotePreview } from "../components/Preview";
import { NoteContext } from "../context/note.context";
import { UserContext } from "../context/user.context";
import { INote } from "../types/entity";

export const Home = () => {
  const username = "Dora";
  const [notes, setNotes] = useState<INote[]>([]);
  return (
    <UserContext.Provider value={username}>
      <NoteContext.Provider value={{ notes, setNotes }}>
        <div className="m-auto bg-pink-300/65 p-8 rounded-xl space-y-4">
          <NoteForm />
          <NotePreview />
        </div>
      </NoteContext.Provider>
    </UserContext.Provider>
  );
};
