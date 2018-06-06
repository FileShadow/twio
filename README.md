# Twio

Twio is a lightweight Javascript project (using ES6) for two way data binding. Twio works with React Components without mixins. Twio is short for Two Way Input Output. Twio performs one and only one task, two way data binding. Twio should be compatible with any system using ES6. In the future we might consider writing a more quirksmode version, however the succintness of ES6 a big plus.

## Getting Started

Twio is easy to use, and provided under the MIT license. Twio has no dependencies. To use Twio you should be somewhat familiar with ES6. Twio tackles the problem of two way data binding. Two way data binding is a concept where you bind a Javascript variable to a DOM attribute or property; whenever you change the Javascript value, the DOM should reflect that change, and vice versa. Twio boxes data in Javascript, and provides an interface to handle the data manipulation.

### Prerequisites

Twio has no dependencies.

```
if (Twio === NO_DEPENDENCIES) {
  return SUCCESS;
}
```

### Installing

Install Twio into your ES6+ project using NPM.

```
npm i twio
```

## Usage

To start using Twio in a component, you can import it using the following:

```
import Twio from 'twio';
// - or -
const Twio = require('twio');
```

Twio is a factory function. The factory function can be run to create a new instance of a Twio object.  You optionally provide the initial value as the first parameter. You can optionally provide an update handler as a second parameter. Twio will assign an empty string to values if none is provided.

```
// no parameters, returns a Twio object instance. 
const username = Twio();

// optional first parameter provides an initial value
const email = Twio('initial@value.com');

// optional second parameter provides an update handler, called when changes occur
const company = Twio('My Company', company => this.setState({company}));
```

After running the code above, username will have a new instance of a Twio object. Email will be a Twio object that is initialized with the value `initial@value.com`. You can explicitly set a value using the set method. Changing a value explicitly using set will call the update handler.

```
username.set('Bob');
```

You can add a callback function that will run when the value changes.

```
username.changes(v => this.setState({ username }));
```

Twio can be used in the render method of your component. An input field can use Twio easily.

```
<input type="text" value={this.state.username} onChange={this.state.username.onChange} />
```

Whenever a change occurs, the changes handler is fired, ensuring that the setState gets called.

## Example

An example of Twio providing a two way data binding.

```
import Twio from "twio";
class SignUp extends Component {
  constructor() {
    this.state = {
      firstName: Twio().changes(firstName => this.setState({firstName})),
      lastName: Twio().changes(lastName => this.setState({lastName})),
      email: Twio().changes(email => this.setState({email})),
      password: Twio().changes(password => this.setState({password})),
    };
  }
  render() {
    return (
      <form>
        <input type="text" value={this.state.firstName} onChange={this.state.firstName.onChange} />
        <input type="text" value={this.state.lastName} onChange={this.state.lastName.onChange} />
        <input type="text" value={this.state.email} onChange={this.state.email.onChange} />
        <input type="text" value={this.state.password} onChange={this.state.password.onChange} />
      </form>
    );
  }
}
```

## Contributing

Contributions are welcome. Please post any feedback to the [Twio project page](https://github.com/gregbramwell/twio).

## Authors

* **Gregory Bramwell** - *Initial work* - [gregbramwell](https://github.com/gregbramwell)

See also the list of [contributors](https://github.com/gregbramwell/twio/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Attributions

- [FileShadow](https://www.fileshadow.com)