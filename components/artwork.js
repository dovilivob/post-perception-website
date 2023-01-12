import { information } from '/js/get_info.js';
class Artwork extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let artwork_id = parseInt(this.classList[1]);
        const team_info = information.art_teams[artwork_id];
        let members = ``;
        let title = team_info.title;
        let description = team_info.description;
        let media = team_info.media;
        let record = team_info.record;
        for (let member of team_info.artists) {
            members += `
            <div>
                <head-photo-component class="${member.img_id}"></head-photo-component> 
                <div class='white-font name-info-container'">
                    <h3>${member.name}</h3>
                    <h4>${member.title}</h4>
                </div>
            </div>
            `;
        }
        this.innerHTML = `
            <div id="main-container">
                <h1 class="white-font" id="big-title">${title}</h1>
                <div class="" id="main-image-container">
                    <img id="main-image" src="/static/images/exhibition/artwork_photos/${record.images[0]}.jpg"/> 
                </div>
                <h2 class="white-font sub-title">團隊成員</h2> 
                <div id="members-container">
                    ${members}
                </div>
                <h2 class="white-font sub-title">作品論述</h2> 
                <div class="white-font" id="description-container">
                    <article id="description">${description}</article> 
                </div>
                <link rel="stylesheet" href="/css/artwork.css" />
            </div>
        `
    }
}

window.customElements.define('artwork-component', Artwork);