export const getJournalByViewcode = (viewcode) => {
    return fetch(`http://localhost:8088/journals?viewcode=${viewcode}`)
    .then((res) => res.json())
}

export const getPhotoMemoryByViewcode = (viewcode) => {
    return fetch(`http://localhost:8088/photo-memories?viewcode=${viewcode}`)
    .then((res) => res.json())
}

export const getAboutEntryByViewcode = (viewcode) => {
    return fetch(`http://localhost:8088/about-me?viewcode=${viewcode}`)
    .then((res) => res.json())
}

