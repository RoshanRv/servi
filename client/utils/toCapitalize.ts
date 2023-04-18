const toCapitalize = (str: string | undefined) => {
    if (str) {
        const firstLetter = str.split("")[0].toUpperCase()
        const remWord = str.slice(1)
        return [firstLetter, ...remWord].join("")
    }
    return ""
}

export default toCapitalize
