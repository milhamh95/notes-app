import { useState } from "react"
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInput";

const NoteForm = ({notes, setNotes}) => {
    const [formData, setFormData] = useState({
        title: "",
        category: "Work",
        priority: "Medium",
        description: "",
    });
    const [isNoteFormVisible, setIsNoteFormVisible] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            // eq with -> title: e.target.value
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title || !formData.description) {
            alert("Please fill all fields");
            return;
        }

        const newNote = {id: Date.now(), ...formData}

        setNotes([newNote, ...notes])

        setFormData({
            title: "",
            category: "Work",
            priority: "Medium",
            description: "",
        })
    };

    return (
        <> 
            <button
                className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer"
                onClick={() => setIsNoteFormVisible(!isNoteFormVisible)} 
            >{isNoteFormVisible ? "Hide Form ✖️" : "Add New Note ➕"}</button>
            {isNoteFormVisible && (
                <form onSubmit={handleSubmit}>
                    <TextInput 
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required/>

                    <SelectInput
                        label="Priority" 
                        name="priority"
                        value={formData.priority}
                        options={
                            [
                                {value: "High", label: "🔴 High"},
                                {value: "Medium", label: "🟠 Medium"},
                                {value: "Low", label: "🔴 Low"}
                            ]
                        }
                        onChange={handleInputChange}
                    />

                    <SelectInput
                        label="Category" 
                        name="category"
                        value={formData.category}
                        options={
                            [
                                {value: "Work", label: "📂 Work"},
                                {value: "Personal", label: "🏠 Personal"},
                                {value: "Ideas", label: "💡 Ideas"}
                            ]
                        }
                        onChange={handleInputChange}
                    />

                    <TextAreaInput
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                    />

                    <button className="w-full bg-purple-500 text-white">
                        Add Note
                    </button>

                </form>
            )}
        </>
    )
}

export default NoteForm