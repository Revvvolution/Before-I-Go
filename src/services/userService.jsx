export const getCreatorByEmail = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
)
}

export const getAllUsers = () => {
    return fetch(`http://localhost:8088/users`).then((res) =>
    res.json()
)
}

export const getCreatorById = (userId) => {
    return fetch(`http://localhost:8088/users?userId=${userId}`)
    .then((res) => res.json())
}