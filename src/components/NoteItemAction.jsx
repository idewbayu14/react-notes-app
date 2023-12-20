import React from "react";

function NoteItemAction({ onDeleteNote, onArchiveNote, id, archived }) {
    return (
        <div className="note-item__action">
            <button
                className="note-item__delete-button"
                onClick={onDeleteNote}
                aria-label="Delete Button"
            >
                Delete
            </button>
            <button
                className="note-item__archive-button"
                onClick={onArchiveNote}
                aria-label={archived ? "Unarchive Button" : "Archive Button"}
            >
                {archived ? "Unarchive" : "Archive"}
            </button>
        </div>
    );
}

export default NoteItemAction;
