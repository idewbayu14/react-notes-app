import React, { useEffect, useState } from "react";
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import { getInitialData } from '../utils';

function NoteApp() {
    const [query, setQuery] = useState("");
    const [searchNotes, setSearchNotes] = useState([]);
    const [notes, setNotes] = useState(getInitialData());

    const notesAll = (searchNotes || notes).filter((note) => !note.archived);
    const notesArchive = (searchNotes || notes).filter((note) => note.archived);

    useEffect(() => {
        setSearchNotes(
            notes.filter((note) =>
                note.title.toUpperCase().includes(query.toUpperCase())
            )
        );
    }, [query, notes]);

    return (
        <div className="note-app">
            <NoteHeader
                search={query}
                setQuery={setQuery}
            />
            <NoteBody
                notesAll={notesAll}
                notesArchive={notesArchive}
                setNotes={setNotes}
            />
        </div>
    );
}

export default NoteApp;
