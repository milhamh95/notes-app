const Note = ({note, deleteNote}) => {

    const getBorderColor = (priority) => {
        switch (priority) {
            case "High":
                return "red";
            case "Medium":
                return "orange";
            default:
                return "green";
        }
    }

    return (
        <div
            className="p-4 bg-white rounded-lg shadow-md border-l-4"
            style={{
                borderLeftColor: getBorderColor(note.priority)
            }}
        >
            <h3 className="text-lg font-bold">{note.title}</h3>
            <p>
                <strong>Category:</strong> {note.category}
            </p>
            <p>
                <strong>Priority:</strong> {note.priority}
            </p>
            <p>
                {note.description}
            </p>

            <button 
                className="text-red-500"
                onClick={() => deleteNote(note.id)}>Delete</button>

        </div>
    )
}

export default Note;