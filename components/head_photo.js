class HeadPhoto extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let image_num = this.classList[0];
        this.innerHTML = `
            <link rel="stylesheet" href="/css/head_photo.css" />
        `;
    }
}

window.customElements.define('head-photo-component', HeadPhoto);