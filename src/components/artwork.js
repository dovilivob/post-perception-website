import {information} from '/src/js/get_info.js';

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
        const artwork_title = team_info.title;
        // Get artwork description
        const description = team_info.description;
        // Get artwork format
        const artwork_format = team_info.format;
        // Get artwork media list
        const artwork_media = team_info.media;
        // Get artwork size
        const artwork_size = team_info.size;
        // Get artwork record videos/images
        const record = team_info.record;
        // Declare member as void string for pushing content in next step
        let members_photo_HTML = ``;
        let members_text = ``;


        // Put every member's { photo, name, title } in $members
        for (let member of team_info.members) {
            members_text += `${member.name} `
            members_photo_HTML += `
            <div class="gallery">
                <a target="_blank" href="/src/static/images/exhibition/head_photos/jpg/${school_ids[member.name]}.jpg">
                    <face-pic-component class="${school_ids[member.name]}"></face-pic-component> 
                </a>
                <div class="overlay" onmouseover="play()">
                    <div class="text-hover">${member.title}</div>
                </div>
                <div class="desc">${member.name}</div>
            </div>
            `;
        }

        // Write HTML
        this.innerHTML = `
            <!-- 右側摘要功能 -->
            <link rel="stylesheet" href="/src/css/components/table-of-contents.css" />
            <!-- 個人照展示 -->
            <link rel="stylesheet" href="/src/css/components/listed-face-pics.css" />
            <!-- SNS分享功能 -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="/src/css/components/SNS.css" />
            <!--YouTube Embed功能-->
            <link rel="stylesheet" href="/src/css/components/youtubeEmbed.css" />
            <!--Vimeo Embed功能-->
            <link rel="stylesheet" href="/src/css/components/vimeoEmbed.css" />

            <div>
                <div class="cursor"></div>
                <!-- 滑鼠游標音效 -->
                <audio id="audio" src="/src/static/sfx/mouseOver05.mp3"></audio>

                <h1>&nbsp;</h1>
                <h1><b>${artwork_title}</b></h1>
                <p style="line-height: 200%">
                    作品形式 / ${artwork_format} <br />
                    年份 / 2023 <br />
                    媒材 / ${artwork_media} <br />
                    尺寸 / ${artwork_size}<br />
                    藝術家 / ${members_text}<br />
                    <br />
                </p>
                <section id="t01">
                    <h3><span style="color: rgb(0, 255, 221)">▏</span>論述</h3>

                    <p style="line-height: 190%">
                        ${description}
                    </p>
                </section>

                <section id="t02">
                    <h3><span style="color: rgb(0, 255, 221)">▏</span>影像紀錄</h3>
                    <photo-slider-component></photo-slider-component>
                    <br /><br />
                    <div class="embed-container"><iframe src="https://www.youtube.com/embed/${record.videos.youtube}" frameborder="0" allowfullscreen></iframe></div>
                    <br /><br />
                    <div class="embed-container"><iframe src="https://player.vimeo.com/video/1200694" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe></div>
                </section>

                <section id="t03">
                    <h3><span style="color: rgb(0, 255, 221)">▏</span>創作者</h3>

                    ${members_photo_HTML}

                    <div class="clearfix">
                        <!-- ::after -->
                    </div>
                    <!-- ::after -->
                </section>

                <section id="t04">
                    <h3><span style="color: rgb(0, 255, 221)">▏</span>展場位置圖</h3>
                    <img src="/src/static/images/exhibition/map/map02.png" style="width: 50%" />
                    <!-- <section id="t04-01">
                        <h4>壹</h4>
                        <p>…</p>
                    </section>
                    <section id="t04-02">
                        <h4>貳</h4>
                        <p>…</p>
                    </section> -->
                </section>
                <section id="t05">
                    <h3><span style="color: rgb(0, 255, 221)">▏</span>超連結</h3>
                    <br />
                    <div>
                        <a href="https://capable-kitsune-75e85f.netlify.app/artworks/?id=0"><span class="text-sns" onmouseover="play()">LINK</span></a>
                    </div>

                    <p></p>
                </section>
                <!-- <section id="t06">
                    <h3>▏展場位置圖</h3>
                    <p>…</p>
                </section>
                <section id="t07">
                    <h3>▏超連結</h3>
                    
                </section>  -->
            </div>
            <nav class="section-nav">
                <ol>
                    <li><a href="#t01" onmouseover="play()">▪ 論述</a></li>
                    <li><a href="#t02" onmouseover="play()">▪ 影像紀錄</a></li>
                    <li><a href="#t03" onmouseover="play()">▪ 創作者</a></li>
                    <li>
                        <a href="#t04" onmouseover="play()">▪ 展場位置圖</a>
                        <!-- <ul>
                            <li class=""><a href="#t04-1">壹</a></li>
                            <li class=""><a href="#t04-2">貳</a></li>
                            <li class=""><a href="#t04-3">參</a></li>
                            <li class=""><a href="#t04-4">肆</a></li>
                            <li class=""><a href="#t04-5">伍</a></li>
                            <li class=""><a href="#t04-6">陸</a></li>
                            <li class=""><a href="#t04-7">柒</a></li>
                            <li class=""><a href="#t04-8">捌</a></li>
                        </ul> -->
                    </li>
                    <li class=""><a href="#t05" onmouseover="play()">▪ 超連結</a></li>
                    <!-- <li class=""><a href="#t06">▪ 展場位置圖</a></li>
                    <li class=""><a href="#t07">▪ 超連結</a></li> -->
                </ol>
                <div class="icon-bar">
                    <a href="#" class="facebook" onmouseover="play()"><i class="fa fa-facebook"></i></a>
                    <a href="#" class="twitter" onmouseover="play()"><i class="fa fa-twitter"></i></a>
                    <a href="#" class="instagram" onmouseover="play()"><i class="fa fa-instagram"></i></a>
                    <!-- <a href="#" class="line"><i class="fa fa-line"></i></a>
                    <a href="#" class="youtube"><i class="fa fa-youtube"></i></a> -->
                </div>
            </nav>

        `
    }
}

window.customElements.define('artwork-component', Artwork);