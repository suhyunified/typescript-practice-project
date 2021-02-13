import { BaseComponent } from "../../component/base.js";

type Todo = {
  title: string;
  items: string[];
};

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(todo: Todo) {
    const innerHTML = `
    <section class="todo item">
        <p class="todo__title"></p>
        <ul class="todo__list"></ul>
    </section>`;
    super(innerHTML);

    const titleElement = this.element.querySelector(
      ".todo__title"
    )! as HTMLParagraphElement;

    titleElement.textContent = todo.title;

    const listElement = this.element.querySelector(
      ".todo__list"
    )! as HTMLUListElement;

    let index: number = 0;
    for (const item of todo.items) {
      let itemTemplate = document.createElement("section");
      itemTemplate.innerHTML = `
        <li class="todo__item">
                <input class="todo__item-checkbox" type="checkbox"/>  

                <label class="todo__item-label">
                    <div class="todo__item-check">
                    </div>
                </label>  
        </li>
        `;

      const itemElement = itemTemplate.firstElementChild! as HTMLLIElement;

      const labelElement = itemElement.querySelector(
        ".todo__item-label"
      )! as HTMLLabelElement;
      labelElement.setAttribute("for", "checkbox-" + index);

      labelElement.innerHTML = item;

      const checkboxElement = itemElement.querySelector(
        ".todo__item-checkbox"
      )! as HTMLInputElement;
      checkboxElement.type = "checkbox";
      checkboxElement.id = "checkbox-" + index;

      index += 1;

      listElement.appendChild(itemElement);

      //   itemElement = document.createElement("li");
      //   itemElement.textContent = item;
      //   listElement.appendChild(itemElement);
    }
  }
}
