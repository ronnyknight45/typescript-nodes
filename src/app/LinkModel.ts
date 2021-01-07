export class LinkModel {
  source: any;
  target: any;
  left: boolean;
  right: boolean;

  constructor(source: any, target: any, left: boolean, right: boolean) {
    this.source = source;
    this.target = target;
    this.left = left;
    this.right = right;
  }
}