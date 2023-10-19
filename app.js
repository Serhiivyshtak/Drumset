document.addEventListener('keydown', (e) => {
    let keyCodeHited = e.keyCode;
    let audio = document.querySelector(`.sound-${keyCodeHited}`);
    let button = document.querySelector(`.button-${keyCodeHited}`);
    try {
        audio.play();
    } catch (err) {
        return
    }
    button.classList.add('button_active');
    setTimeout(() => {
        button.classList.remove('button_active');
    }, 300);
});

const allButtons = document.querySelectorAll('.button');


for (everyButton of allButtons) {
    everyButton.addEventListener('click', (e) => {
        let buttonHited = e.currentTarget;
        let classOfButtonHited = e.currentTarget.getAttribute('class');
        let codeOfButtonHited = classOfButtonHited.at(-2) + classOfButtonHited.at(-1);
        buttonHited.classList.add('button_active');
        setTimeout(() => {
            buttonHited.classList.remove('button_active');
        }, 300);
        let audio = document.querySelector(`.sound-${codeOfButtonHited}`);
        try {
            audio.play();
        } catch (err) {
            return
        }
    });
}