import { BaseComponent } from "../../component/base.js";

type Video = {
  title: string;
  url: string;
};

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(video: Video) {
    const innerHTML = `<section class="item video">
        <p class="video__title"></p>
        <div class="video__holder">
            <iframe class="video__thumbnail"></iframe>

        </div>
    </section>`;

    super(innerHTML);

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLParagraphElement;

    titleElement.textContent = video.title;

    const iframeElement = this.element.querySelector(
      ".video__thumbnail"
    )! as HTMLIFrameElement;

    iframeElement.src = this.convertToEmbeddedURL(video.url);
  }

  // 정규표현식 Regex
  private convertToEmbeddedURL(url: string): string {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);

    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }

    return url;
  }
}
