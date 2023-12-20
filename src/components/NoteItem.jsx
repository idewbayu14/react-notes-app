import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ id, title, body, createdAt, archived, action }) {
    const onDeleteNote = () =>
    action((notes) => notes.filter((note) => note.id !== id));

    const onArchiveNote = () => {
        action((notes) =>
            notes.map((note) =>
                note.id === id ? { ...note, archived: !note.archived } : note
            )
        );
    };

    return (
        <div className="note-item">
            <NoteItemContent
                title={title}
                body={body}
                createdAt={createdAt}
                archived={archived}
                action={action}
            />
            <NoteItemAction
                onDeleteNote={onDeleteNote}
                onArchiveNote={onArchiveNote}
                id={id}
                archived={archived}
            />
        </div>
    );
}

export default NoteItem;
