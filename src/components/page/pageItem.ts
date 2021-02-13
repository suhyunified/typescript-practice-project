import { BaseComponent, Component } from "../component/base.js";

export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;

export class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements Composable {
  private closeListener?: OnCloseListener;
  constructor() {
    const innerHTML = `<li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
                <button class="close">x</button>
            </div>
        </li>`;
    super(innerHTML);

    const buttonElement = this.element.querySelector(
      ".close"
    )! as HTMLButtonElement;

    buttonElement.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }

  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}
