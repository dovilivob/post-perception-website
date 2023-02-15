class FacePic extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Get image's ID from HTML element's class
        let image_id = this.classList[0];

        // Write HTML
        this.innerHTML = `
            <div id="image-${image_id}-container"></div>

            <style>
                #image-${image_id}-container {
                    width: 100%;
                    height: 40vh;
                    background-image: url('/src/static/images/exhibition/head_photos/jpg/${image_id}.jpg');
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }
            </style>
        `;
    }
}

window.customElements.define('face-pic-component', FacePic);