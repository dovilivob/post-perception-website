/* 作品相簿功能 */
class PhotoSlider extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const URL_search = new URLSearchParams(window.location.search);
        let lang = URL_search.get('lang') ?? 'zh';
        let is_en = lang == 'en';
        this.innerHTML = `
            <link rel="stylesheet" href="/src/css/components/photo-slider.css" />

            <div class="slideshow-container">
                <div class="mySlides fade">
                    <div class="numbertext">1 / 3</div>
                    <img src="/src/static/images/exhibition/artwork_photos/01.jpg" style="width: 100%" />
                    <div class="text"><i>作品圖片備註 - 01</i></div>
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">2 / 3</div>
                    <img src="/src/static/images/exhibition/artwork_photos/02.jpg" style="width: 100%" />
                    <div class="text"><i>作品圖片備註 - 02</i></div>
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">3 / 3</div>
                    <img src="/src/static/images/exhibition/artwork_photos/03.jpg" style="width: 100%" />
                    <div class="text"><i>作品圖片備註 - 03</i></div>
                </div>

                <a class="prev" onclick="plusSlides(-1)">❮</a>
                <a class="next" onclick="plusSlides(1)">❯</a>
            </div>
        `;
    }
}

window.customElements.define('photo-slider-component', PhotoSlider);