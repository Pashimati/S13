
export default function renderModal(article) {
    const container = document.querySelector('.section');
    container.insertAdjacentHTML('beforeend', renderTemplateModal(article))
}

function renderTemplateModal(article) {
    const title = article['title'];
    const description = article['description'];
    const src = article['src'];

    let template = `
        <div class="dm-overlay" id="modal">
            <div class="dm-table">
                <div class="dm-cell">
                    <div class="dm-modal">
                        <a class="close"></a>
                        <h3>${title}</h3>
                        <div class="pl-left">
                            <img class="image" src="${src}" alt="${title}">
                        </div>
                        <p>${description}</p>
                    </div>
                </div>
            </div>
        </div>
    `

    return template;
}





























