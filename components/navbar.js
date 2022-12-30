class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let lang = this.classList[1];
        let is_en = lang == 'en';
        this.innerHTML = `
            <link rel="stylesheet" href="/css/navbar.css" />
            <nav>
              <img src="/static/images/website/${is_en ? 'logo-black-en.png' : 'logo-black.png'}" />

              <input type="checkbox" id="check" />
              <label for="check">
                <i class="fas fa-bars" id="btn"></i>
                <i class="fas fa-times" id="cancel"></i>
              </label>

              <ul>
                <li>
                    <a href="/home/?lang=${lang}">
                        ${is_en ? 'HOME' : '首頁'}
                    </a>
                </li>
                <li>
                    <a href="/about/?lang=${lang}">
                        ${is_en ? 'ABOUT' : '展覽論述'}
                    </a>
                </li>
                <li>
                    <a href="/artist/?lang=${lang}">
                        ${is_en ? 'ARTIST' : '創作者'}
                    </a>
                </li>
                <li>
                    <a href="/map/?lang=${lang}">
                        ${is_en ? 'MAP' : '會場地圖'}
                    </a>
                </li>
                <li>
                    <a href="/contact/?lang=${lang}">
                        ${is_en ? 'CONTACT' : '聯繫我們'}
                    </a>
                </li>

                ${is_en ? '<li><a href="?lang=zh">中</a></li>' : '<li><a href="?lang=en">En</a></li>'}
              </ul>
            </nav>
        `;
    }
}

window.customElements.define('navbar-component', NavBar);