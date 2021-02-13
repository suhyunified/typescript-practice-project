import { Component } from "./components/component/base.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";
import { Composable, PageItemComponent } from "./components/page/pageItem.js";

class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent({
      title: "Sample Image",
      url: "https://picsum.photos/800/300",
    });
    this.page.addChild(image);

    const video = new VideoComponent({
      title: "Sample Video",
      url: "https://www.youtube.com/embed/rbDeJksz-eo",
    });
    this.page.addChild(video);

    const note = new NoteComponent({
      title: "Sample Note",
      contents: "I'm studying TypeScript",
    });
    this.page.addChild(note);

    const todo = new TodoComponent({
      title: "Sample Todo",
      items: ["study hard", "Maple Story"],
    });
    this.page.addChild(todo);
  }
}

new App(document.querySelector(".board")! as HTMLElement);
