import { BaseComponent } from "../../component/base.js";

type Note = {
  title: string;
  contents: string;
};

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(note: Note) {
    const innerHTML = `<section class="item note">
        <p class="note__title"></p>
        <p class="note__contents"></p>
    </section>`;
    super(innerHTML);

    const titleElement = this.element.querySelector(
      ".note__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = note.title;

    const contentsElement = this.element.querySelector(
      ".note__contents"
    )! as HTMLParagraphElement;

    contentsElement.textContent = note.contents;
  }
}
