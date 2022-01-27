const fields = [
    {'.btn-login': '.login'},
    {'.btn-search': '.search'},
];

function initListener() {
    fields.forEach((object) => {
        const button = Object.keys(object)[0];
        const window = Object.values(object)[0];

        document.querySelector(button).addEventListener('click', () => {
            document.querySelector(window).classList.toggle('show')
        })
    })
}

initListener();
