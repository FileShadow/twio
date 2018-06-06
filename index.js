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

  toString() {
    return this.state.value;
  }
}

function Twio(initial = '', changes = null) {
  return new TwioClass(initial, changes);
}

module.exports = Twio;