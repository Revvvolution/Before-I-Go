export const getAllJournals = () => {
    return fetch(`http://localhost:8088/journals`).then((res) =>
    res.json()
)
}

export const createJournalEntry = (journalObj) => {
    return fetch(`http://localhost:8088/journals`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(journalObj),
    })
}