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

export const getJournalById = (journalObjId) => {
    return fetch(`http://localhost:8088/journals/${journalObjId}`)
    .then((res) => res.json())
}

export const updateJournalEntry = (journalObj) => {
    return fetch(`http://localhost:8088/journals/${journalObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journalObj),
    })
}

export const deleteJournalEntry = (journalObjId) => {
    return fetch(`http://localhost:8088/journals/${journalObjId}`, {
        method: "DELETE",
    })
}