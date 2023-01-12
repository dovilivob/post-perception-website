import { information } from '/js/get_info.js';
class Artwork extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let artwork_id = parseInt(this.classList[1]);
        const team_info = information.art_teams[artwork_id];
        let members = '';
        let title = team_info.title;
        let description = team_info.description;
        let media = team_info.media;
        for (let member of team_info.artists) {
            members += `
            <div>
                <head-photo-component class="${member.img_id}"></head-photo-component> 
                <div class='name-info-container'">
                    <h3>${member.name}</h3>
                    <h4>${member.title}</h4>
                </div>
            </div>
            `;
        }
        this.innerHTML = `
            <h1 id="big-title">${title}</h1>
            <hr class="sep-line"></hr>
            <div class="members-container">
                ${members}
            </div>
            <link rel="stylesheet" href="/css/artwork.css" />
        `
    }
}

window.customElements.define('artwork-component', Artwork);