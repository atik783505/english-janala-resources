const loadleson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((data) => getLesson(data.data))
}

const lessonLoad = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => showLesson(data.data))
}

const showLesson = (words) => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = ""
    words.forEach(word => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <div class="card bg-white py-[56px]">
            <h1 class="font-bold text-[32px] mb-6">${word.word}</h1>
            <p class="font-semibold mb-5">Meaning /Pronounciatio</p>
            <h2 class="font-bangla text-[30px] mb-5">"${word.meaning} / ${word.pronunciation}</h2>
            <div class="flex justify-around ">
                <button class="btn"><i class="fa-solid fa-circle-info text-[#374957]"></i></button>
                <button class="btn"><i class="fa-solid fa-volume-high text-[#374957] "></i></button>
            </div>
        </div>
        `
        wordContainer.append(newDiv)
    })
}

const getLesson = (lessons) => {
    const buttnConatiner = document.getElementById('button-container');
    buttnConatiner.innerHTML = "";
    lessons.forEach(lesson => {
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
        <button onclick="lessonLoad(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
        `
        buttnConatiner.appendChild(newDiv)
    })
}

loadleson()