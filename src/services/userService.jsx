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
    return fetch(`http://localhost:8088/users?id=${userId}`)
    .then((res) => res.json())
}

export const createUser = (user) => {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json())
}

export const getCreatorByViewcode = (viewcode) => {
  return fetch(`http://localhost:8088/users?viewcode=${viewcode}`)
  .then((res) => res.json())
}