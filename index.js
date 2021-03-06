class TwioClass {
  constructor(value, changes = null) {
    this.onChange = this.onChange.bind(this);
    this.state = {
      value,
      updater: changes || (() => null),
    };
  }

  changes(updater) {
    this.state.updater = updater;
    return this;
  }

  onChange(event) {
    this.state.value = event.target.value;
    return this.state.updater(this);
  }

  set(value) {
    this.state.value = value;
    this.state.updater(this);
    return this;
  }

  get value() {
    return this.state.value;
  }

  set value(value) {
    this.set(value);
  }

  toString() {
    return this.state.value;
  }
}

function Twio(initial = '', changes = null) {
  if (typeof initial === "function" && changes === null) {
    changes = initial;
    initial = '';
  }
  return new TwioClass(initial, changes);
}

module.exports = Twio;