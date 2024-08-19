import { useState } from 'react';
import '../styles/Experience.css';

function Experience() {
    const [isEditing, setIsEditing] = useState(true);
    const [experience, setExperience] = useState({
        company: '',
        position: '',
        responsibilities: '',
        dateFrom: '',
        dateUntil: ''
    });

    const handleChange = (e) => {
        setExperience({
            ...experience,
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
        <div className="experience">
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={experience.company}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="position"
                        placeholder="Position Title"
                        value={experience.position}
                        onChange={handleChange}
                    />
                    <textarea
                        name="responsibilities"
                        placeholder="Main Responsibilities"
                        value={experience.responsibilities}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="dateFrom"
                        placeholder="Date From"
                        value={experience.dateFrom}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="dateUntil"
                        placeholder="Date Until"
                        value={experience.dateUntil}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <p>Company: {experience.company}</p>
                    <p>Position: {experience.position}</p>
                    <p>Responsibilities: {experience.responsibilities}</p>
                    <p>Date From: {experience.dateFrom}</p>
                    <p>Date Until: {experience.dateUntil}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}

export default Experience;
