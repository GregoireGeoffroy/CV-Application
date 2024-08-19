import { useState } from 'react';
import '../styles/Education.css';

function Education() {
    const [isEditing, setIsEditing] = useState(true);
    const [education, setEducation] = useState({
        school: '',
        title: '',
        date: ''
    });

    const handleChange = (e) => {
        setEducation({
            ...education,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <div className="education">
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="school"
                        placeholder="School Name"
                        value={education.school}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="title"
                        placeholder="Title of Study"
                        value={education.title}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="date"
                        placeholder="Date of Study"
                        value={education.date}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <p>School: {education.school}</p>
                    <p>Title: {education.title}</p>
                    <p>Date: {education.date}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}

export default Education;
