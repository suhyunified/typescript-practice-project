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

    iframeElement.src = video.url;
  }
}
