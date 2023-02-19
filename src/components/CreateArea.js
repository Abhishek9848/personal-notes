import React, { useState } from "react";

function CreateArea(props) {
    const [hide, setHide] = useState(true);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
        setHide(true);
    }

    return (
        <>
            <div
                className="createAreaContainer"
                style={{ display: hide ? "none" : "" }}
            >
                <form>
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                    />
                    <textarea
                        name="content"
                        onChange={handleChange}
                        value={note.content}
                        placeholder="Take a note..."
                        rows="3"
                    />
                    <button
                        disabled={note.title === "" ? true : false}
                        onClick={submitNote}
                    >
                        Add
                    </button>
                </form>
            </div>
            <button className="ShowCreateAreaButton" onClick={() => setHide(false)}>
                +
            </button>
        </>
    );
}

export default CreateArea;
