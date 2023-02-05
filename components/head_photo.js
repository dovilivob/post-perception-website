class HeadPhoto extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Get image's ID from HTML element's class
        let image_id = this.classList[0];

        // Write HTML
        this.innerHTML = `
            <link rel="stylesheet" href="/css/head_photo.css" />
            <div id="image-${image_id}-container">
                <!--<img class="head-image" src="/static/images/exhibition/head_photos/jpg/${image_id}.jpg" />-->
            </div>
            <style>
                #image-${image_id}-container {
                    width: 300px;
                    height: 300px;
                    background-image: url('/static/images/exhibition/head_photos/jpg/${image_id}.jpg');
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }
            </style>
        `;
    }
}

window.customElements.define('head-photo-component', HeadPhoto);