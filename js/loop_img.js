let time = 7000,
    currentImageIndex = 0,
    images_background = document
                .querySelectorAll("#slider div[type='background_img'] img")
    images_title = document
                .querySelectorAll("#slider div[type='title_img'] img")
    max = images_background.length;

function next_Image() {

    images_background[currentImageIndex]
        .classList.remove("selected")

    images_title[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images_background[currentImageIndex]
        .classList.add("selected")

    images_title[currentImageIndex]
        .classList.add("selected")
}

function return_Image() {

    images_background[currentImageIndex]
        .classList.remove("selected")

    images_title[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex--

    if(currentImageIndex < 0)
        currentImageIndex = max-1

    images_background[currentImageIndex]
        .classList.add("selected")

    images_title[currentImageIndex]
        .classList.add("selected")
}

function Images_Loop(v) {
    if (v == 'auto')
        setInterval(() => {
            next_Image()
        }, time)
    if (v == 'next')
        next_Image()
        clearInterval
    if (v == 'return')
        return_Image()
}

window.addEventListener("load", Images_Loop('auto'))