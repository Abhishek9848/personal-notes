import React, { useState } from "react";
import { MdDelete, MdContentCopy, MdCheck } from "react-icons/md";

function Note({ id, title, content, onDelete }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(
                `${content}`
            );
            setCopied(true);

            // revert back after 2 seconds
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>

            <div className="note-actions">
                <button
                    onClick={handleCopy}
                    aria-label="Copy note"
                    className={copied ? "copied" : ""}
                    disabled={copied}
                >
                    {copied ? <MdCheck /> : <MdContentCopy />}
                </button>

                <button
                    onClick={() => onDelete(id)}
                    aria-label="Delete note"
                >
                    <MdDelete />
                </button>
            </div>
        </div>
    );
}

export default Note;
