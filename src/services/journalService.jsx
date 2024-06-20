export const getAllJournals = () => {
    return fetch(`http://localhost:8088/journals`).then((res) =>
    res.json()
)
}