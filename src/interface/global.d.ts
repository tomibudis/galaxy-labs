declare module '*.module.scss' {
  interface ClassName {
    [className: string]: string;
  }
  const classNames: ClassName;
  export = classNames;
}
