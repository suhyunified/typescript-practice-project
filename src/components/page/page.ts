import { BaseComponent, Component } from "../component/base.js";
import { Composable, PageItemComponent } from "./pageItem.js";

export class PageComponent
  extends BaseComponent<HTMLElement>
  implements Composable {
  constructor() {
    super(`<ul class="page"></ul>`);
  }

  addChild(section: Component) {
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
