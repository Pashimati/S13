import articles from "../db/articles";
import renderModal from "./modal";

const ARTICLES_CONTAINER_SELECTORS = {
    withoutImg: '.section__home',
    withImg: '.card'
};

const ARTICLE_LINK_SELECTOR = '.show-article';

function renderArticles(container) {
    articles.forEach((article) => {
        if (article['src']) {
            renderArticle(article, container['withImg'])
        } else {
            renderArticle(article, container['withoutImg'])
        }
    })
}

/**
 * @param {object} article
 * @param {string} containerSelector
 */
function renderArticle(article, containerSelector) {
    const container = document.querySelector(containerSelector);

    container.insertAdjacentHTML('beforeend', _getArticleTemplate(article))
}

/**
 *
 * @param {object} article
 * @returns {string}
 * @private
 */
function _getArticleTemplate(article) {
    const id = article['id'];
    const title = article['title'];
    const description = article['description'];
    const src = article['src'];
    const counter = localStorage.getItem(id) ? localStorage.getItem(id) : (article['counter'] ? article['counter'] : 0);

    let template = ` <li class="card__news-list">
            <a class="card__link show-article" href="article/${id}" data-id="${id}">
                <span class="card__index">${counter}</span>
    `

    if (src && title) {
        template += `<span class="card__img">
                        <img class="image" src="${src}" alt="${title}">
                    </span>
        `
    }

    template += `
                <span class="card__title">${title}</span>
                </a>
                <p class="card__full-text">${description}</p>
                </li>
    `

    return template;
}

function _initEventListener() {
    const articleLinks = document.querySelectorAll(ARTICLE_LINK_SELECTOR);
    articleLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.dataset.id;
            const counter = link.querySelector('.card__index');
            let counterValue = parseInt(counter.innerText);
            counterValue++;

            localStorage.setItem(id, (counterValue).toString())
            counter.innerText = counterValue;

            const article = getCurrentArticle(id)
            renderModal(article)
            close()

        })
    })

}

function close() {
    const modal = document.getElementById('modal')
    document.querySelector('.close').addEventListener('click', () => {
        console.log('click')
        modal.remove()
    })
}

function getCurrentArticle(id) {
    console.log(id)
    let res = null
    articles.forEach((article) => {
        if (article['id'] == id) {
            res = article;
        }
    })

    return res
}



renderArticles(ARTICLES_CONTAINER_SELECTORS)
_initEventListener()
