import { BaseComponent } from "../component/base.js";

export class PageComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<ul class="page">This is Page Component</ul>`);
  }
}
