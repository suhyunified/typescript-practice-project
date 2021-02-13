import { BaseComponent } from "../../component/base.js";

type Image = {
  title: string;
  url: string;
};

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(image: Image) {
    const innerHTML = `<section class="item image">
        <p class="image__title"></p>
        <div class="image__holder"><img class="image__thumbnail"></div>
      </section>`;
    super(innerHTML);

    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;

    imageElement.src = image.url;
    imageElement.alt = image.title;
    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;

    titleElement.textContent = image.title;
  }
}
