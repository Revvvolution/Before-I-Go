export const getAllPhotoMemories = () => {
    return fetch(`http://localhost:8088/photo-memories`).then((res) =>
    res.json()
)
}

export const getPhotoMemoryByUserId = (userId) => {
    return fetch(`http://localhost:8088/photo-memories?userId=${userId}`).then((res) =>
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

export const getPhotoMemoryById = (pMemoryObjId) => {
    return fetch(`http://localhost:8088/photo-memories/${pMemoryObjId}`)
    .then((res) => res.json())
}

export const updatePhotoMemory = (pMemoryObj) => {
    return fetch(`http://localhost:8088/photo-memories/${pMemoryObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pMemoryObj),
    })
}

export const deletePhotoMemory = (pMemoryObjId) => {
    return fetch(`http://localhost:8088/photo-memories/${pMemoryObjId}`, {
        method: "DELETE",
    })
}