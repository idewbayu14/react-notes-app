import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';

function NoteHeader({ search, setQuery }) {
    return (
        <div className="note-app__header">
            <div className="app-icon">
                <FontAwesomeIcon icon={faStickyNote} size="2x" />
            </div>
            <h1>Notes App</h1>
            <div className="note-search">
                <Input
                    value={search}
                    onChange={setQuery}
                    type="search"
                    id="search_note"
                    name="search_note"
                    placeholder="Cari Catatan..."
                />
            </div>
        </div>
    );
}

export default NoteHeader;
