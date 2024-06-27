export const getAllPhotoMemories = () => {
    return fetch(`http://localhost:8088/photo-memories`).then((res) =>
    res.json()
)
}

export const createPhotoMemory = (pMemoryObj) => {
    return fetch(`http://localhost:8088/photo-memories`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(pMemoryObj),
    })
}