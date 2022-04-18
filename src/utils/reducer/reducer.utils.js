export class ActionTypes {
  action(payload) {
    return { type: this, payload: payload };
  }

  constructor(name) {
    this.name = name;
  }

  toString() {
    return `[Action ${this.name}]`;
  }
}
