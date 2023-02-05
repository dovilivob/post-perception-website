import { information } from '/js/get_info.js';
class Artwork extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Get artwork ID from HTML element's class
        const artwork_id = parseInt(this.classList[1]);
        // Get team information
        const team_info = information.art_teams[artwork_id];
        // Get school IDs list
        const school_ids = information.school_ids;
        // Get artwork title
        const title = team_info.title;
        // Get artwork description
        const description = team_info.description;
        // Get artwork media list
        const media_list = team_info.media;
        // Get artwork record videos/images
        const record = team_info.record;
        // Declare member as void string for pushing content in next step
        let members = ``;

        // Put every member's { photo, name, title } in $members
        for (let member of team_info.members) {
            members += `
            <div>
                <head-photo-component class="${school_ids[member.name]}"></head-photo-component> 
                <div class='white-font name-title-container'">
                    <h3>${member.name}</h3>
                    <h4>${member.title}</h4>
                </div>
            </div>
            `;
        }

        // Write HTML
        this.innerHTML = `
            <div id="main-container">
                <h1 class="white-font" id="big-title">${title}</h1>
                <div id="members-container">
                    ${members}
                </div>
                <div class="" id="main-image-container">
                    <img id="main-image" src="/static/images/exhibition/artwork_photos/${record.images[0]}.jpg"/> 
                </div>
                <div class="white-font" id="description-container">
                    <article id="description">${description}</article> 
                </div>
                <link rel="stylesheet" href="/css/artwork.css" />
            </div>
        `
    }
}

window.customElements.define('artwork-component', Artwork);