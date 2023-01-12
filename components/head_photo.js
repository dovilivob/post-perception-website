class HeadPhoto extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let image_id = this.classList[0];
        this.innerHTML = `
            <link rel="stylesheet" href="/css/head_photo.css" />
            <div class="image-container">
                <img class="head-image" src="/static/images/exhibition/head_photos/${image_id}.jpg" />
            </div>
        `;
    }
}

window.customElements.define('head-photo-component', HeadPhoto);