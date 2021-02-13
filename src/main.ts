import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";

class App {
  private readonly page: PageComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent({
      title: "Sample Image",
      url: "https://picsum.photos/800/300",
    });

    image.attachTo(appRoot, "beforeend");

    const video = new VideoComponent({
      title: "Sample Video",
      url: "https://www.youtube.com/embed/rbDeJksz-eo",
    });
    video.attachTo(appRoot, "beforeend");

    const note = new NoteComponent({
      title: "Sample Note",
      contents: "I'm studying TypeScript",
    });
    note.attachTo(appRoot, "beforeend");

    const todo = new TodoComponent({
      title: "Sample Todo",
      items: ["study hard", "Maple Story"],
    });
    todo.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".board")! as HTMLElement);
