class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const URL_search = new URLSearchParams(window.location.search);
        let lang = URL_search.get('lang') ?? 'zh';
        let is_en = lang == 'en';
        this.innerHTML = `
            <link rel="stylesheet" href="/src/css/components/navbar.css" />
            <div id="fading-bg"></div>
            <nav>
              <a href="/home/?lang=${lang}" id="header-title">${is_en ? 'Post-Perception' : '後知後覺後'}</a>

              <input type="checkbox" id="check" />
              <label for="check">
                <i class="fas fa-bars" id="btn"></i>
                <i class="fas fa-times" id="cancel"></i>
              </label>

              <ul>
                <li>
                    <a href="/home/?lang=${lang}">
                        ${is_en ? 'home' : '首頁'}
                    </a>
                </li>
                <li>
                    <a href="/about/?lang=${lang}">
                        ${is_en ? 'about' : '展覽資訊'}
                    </a>
                </li>
                <li>
                    <a href="/members/?lang=${lang}">
                        ${is_en ? 'members' : '參展人員'}
                    </a>
                </li>
                <li>
                    <a href="/artworks/?lang=${lang}">
                        ${is_en ? 'artworks' : '作品'}
                    </a>
                </li>
                <li>
                    <a href="/record/?lang=${lang}">
                        ${is_en ? 'record' : '展覽紀錄'}
                    </a>
                </li>

                ${is_en ? '<li><a href="?lang=zh">中</a></li>' : '<li><a href="?lang=en">En</a></li>'}
              </ul>
            </nav>
        `;
    }
}

window.customElements.define('navbar-component', NavBar);