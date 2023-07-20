type ShortPoem = {
  author: string;
} & (
  | {
      kigo: string;
      type: "haiku";
    }
  | {
      meter: number;
      type: "vellanelle";
    }
);
