import { BaseComponent, Component } from "../component/base.js";
import { Composable, SectionContainer } from "./pageItem.js";

type SectionContainerConstructor = {
  new (): SectionContainer;
};

export class PageComponent
  extends BaseComponent<HTMLElement>
  implements Composable {
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super(`<ul class="page"></ul>`);
  }

  addChild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
