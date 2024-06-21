export const getAllPhotoMemories = () => {
    return fetch(`http://localhost:8088/photo-memories`).then((res) =>
    res.json()
)
}