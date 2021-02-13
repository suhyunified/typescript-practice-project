class PageComponent {
  constructor(private name: string) {
    console.log(this.name);
  }

  public static makeCompomponent(name: string) {
    return new PageComponent(name);
  }
}
