import { createContext } from "react";
import {INote} from "../types/entity";

export interface INoteContext {
  notes: INote[]
  setNotes: React.Dispatch<React.SetStateAction<INote[]>>
}

// Passing data note
export const NoteContext = createContext<INoteContext | null>(null)
