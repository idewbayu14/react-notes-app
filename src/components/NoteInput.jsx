import React, { useState } from "react";
import Input from "./Input";

function NoteInput({ setNotes }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onSubmitEventHandler = (event) => {
        event.preventDefault();
        const timestamp = new Date().toISOString();

        setNotes((notes) => [
            ...notes,
            {
                id: timestamp,
                title: title,
                body: body,
                archived: false,
                createdAt: timestamp,
            },
        ]);
    }

    return (
        <div className="note-input">
            <h2>Catatan Baru</h2>
            <form onSubmit={onSubmitEventHandler}>
                <p className="note-input__title__char-limit">
                    Karakter tersisa : {50 - title.length}
                </p>
                <Input
                    value={title}
                    onChange={setTitle}
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Masukkan Judul..."
                    required
                />
                <Input
                    value={body}
                    onChange={setBody}
                    id="body"
                    name="body"
                    type="textarea"
                    placeholder="Tulis Catatan Anda Disini..."
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NoteInput;
