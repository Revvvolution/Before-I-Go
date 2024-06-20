import React from 'react';

export const Journal = ({ title, entry, date }) => {
    return (
        <div className="journal-card">
            <h1 className="journal-title">{title.title}</h1>
            <div className="entry-box">
                <div className="journal-entry">{entry.entry}</div>
            </div>
            <div className="journal-date">{date.date}</div>
        </div>
    );
};

export default Journal;