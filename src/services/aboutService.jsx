export const getAllAboutEntries = () => {
    return fetch(`http://localhost:8088/about-me`).then((res) =>
    res.json()
)
}

export const createAboutEntry = (aboutMeObj) => {
    return fetch(`http://localhost:8088/about-me`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(aboutMeObj),
    })
}

export const getAboutEntryById = (aboutMeObjId) => {
    return fetch(`http://localhost:8088/about-me/${aboutMeObjId}`)
    .then((res) => res.json())
}

export const updateAboutEntry = (aboutMeObj) => {
    return fetch(`http://localhost:8088/about-me/${aboutMeObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aboutMeObj),
    })
}

export const deleteAboutEntry = (aboutMeObjId) => {
    return fetch(`http://localhost:8088/about-me/${aboutMeObjId}`, {
        method: "DELETE",
    })
}