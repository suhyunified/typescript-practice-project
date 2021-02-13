import { ImageComponent } from "./components/page/item/image.js";
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
  }
}

new App(document.querySelector(".board")! as HTMLElement);
