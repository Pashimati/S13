export default class formInput {
    constructor(options) {
        this.fields = options.optionSelectors !== undefined ? document.querySelectorAll(options.optionSelectors) : null;

        this.init()
    }

    init() {
        this.fields.forEach((field) => {

            const input = field.querySelector('input')

            input.addEventListener('focus', () => {
                field.classList.add('on')
            })

            input.addEventListener('focusout', () => {
                field.classList.remove('on')
            })
        })
    }
}