const loadleson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((data) => getLesson(data.data))
}

const lessonLoad = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const allBtn = document.querySelectorAll('.lessons')
            allBtn.forEach(button => {
                button.classList.remove('active')
            })
            console.log(allBtn)
            const clickBtn = document.getElementById(`lesson-id-${id}`)
            clickBtn.classList.add('active')
            showLesson(data.data)
        })
}

const showLesson = (words) => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = ""
    if (words.length == 0) {
        wordContainer.innerHTML = `
    <div class="col-span-full text-center py-10 space-y-5">
        <img class="mx-auto" src="./assets/alert-error.png" alt="">
        <p class="text-[#79716B] font-medium text-[14px] font-bangla">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h2 class="text-[34px] font-medium leading-10">নেক্সট Lesson এ যান</h2>
    </div>
        `
        return;
    }
    words.forEach(word => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <div class="card bg-white py-[50px] h-[100%]">
            <h1 class="font-bold text-[32px] mb-6">${word.word ? word.word:"Word Not Found"}</h1>
            <p class="font-semibold mb-5">Meaning /Pronounciatio</p>
            <h2 class="font-bangla text-[30px] mb-5">"${word.meaning?word.meaning:"Meaning Not Found"} / ${word.pronunciation?word.pronunciation:"Pronunciation Not found"}</h2>
            <div class="flex justify-between px-2 ">
                <button class="btn rounded-full hover:bg-blue-600 "><i class="fa-solid fa-circle-info text-[#374957]"></i></button>
                <button class="btn rounded-full hover:bg-blue-600"><i class="fa-solid fa-volume-high text-[#374957] "></i></button>
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
        <button id="lesson-id-${lesson.level_no}" onclick="lessonLoad(${lesson.level_no})" class="btn btn-outline lessons btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
        `
        buttnConatiner.appendChild(newDiv)
    })
}

loadleson()