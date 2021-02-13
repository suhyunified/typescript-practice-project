import { BaseComponent } from "../component/base.js";

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super(`<ul class="page">This is Page Component</ul>`);
  }
}
