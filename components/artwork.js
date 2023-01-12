class Artwork extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let image_num = this.classList[0];
        this.innerHTML = `
            <link rel="stylesheet" href="/css/artwork.css" />
        `;
    }
}

window.customElements.define('artwork-component', Artwork);