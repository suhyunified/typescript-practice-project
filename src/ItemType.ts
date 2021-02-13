type Image = {
  title: string;
  url: string;
};

type Video = {
  title: string;
  url: string;
};

type Note = {
  title: string;
  description: string;
};

type ToDo = {
  title: string;
  list: string[];
};

type Item = Image | Video | Note | ToDo;
