const createElements = (arr) => {
    const newHtml = arr.map((el) => `<span class="btn">${el}</span>`)
    console.log(newHtml.join(" "))
}
createElements([65,65,55])
