



let video_box = document.querySelector('.video_box')
let video = document.querySelector('.video')
let frame = document.querySelector('.frame')
let scrl = document.querySelectorAll('.scrl')

window.onscroll = () => {
    let y = window.scrollY
    console.log(y);
    if (y >= 0 && y < 166.39999389648438) {
        video.style.transform = 'scale(1)'
        video.style.marginTop = '0px'
        frame.style.display = 'block'
        video.style.backgroundImage = 'none'

    } else if (y >= 166.39999389648438 && y < 333.6000061035156) {
        video.style.transform = 'scale(0.85)'
        frame.style.display = 'block'
        video.style.marginTop = '12%'
        video.style.backgroundImage = 'none'
    } else if (y >= 333.6000061035156 && y < 500) {
        video.style.transform = 'scale(0.6)'

        video.style.marginTop = '20%'
        video.style.backgroundImage = 'url(https://photos5.appleinsider.com/gallery/49950-98167-Apple-TV-3-xl.jpg)'
        frame.style.display = 'none'
    } else if (y >= 500) {
        video.style.transform = 'scale(0.5)'
        video.style.marginTop = '30%'
        video.style.backgroundImage = 'url(https://photos5.appleinsider.com/gallery/49950-98167-Apple-TV-3-xl.jpg)'
    }



    if (y >= 1137.5999755859375 && y <= 2629.60009765625) {
        console.log('a');
        scrl[0].style.marginLeft = `${(-50) + (y * 0.3)}` + 'px'
        scrl[1].style.marginLeft = `${(1000) - (y * 0.4)}` + 'px'
        scrl[2].style.marginLeft = `${(30) + (y * 0.3)}` + 'px'
    }

}