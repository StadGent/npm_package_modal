# City of Ghent Modal

This is a fully accessible modal library. 
It includes a body scroll lock, tab trap,
route events and aria-hidden for obscured contents.

It was created to support the [City of Ghent styleguide](https://stijlgids.stad.gent).

## Usage

### CommonJS

```javascript
const Modal = require('@digipolis-gent/modal').default;

const modal = new Modal(element, options);
```

### ES Imports

```javascript
import Modal from '@digipolis-gent/modal';

const modal = new Modal(element, options);
```

### Browser

**HTML**:

```html
<script src="node_modules/@digipolis-gent/modal/dist/modal.js"></script>
```

**JS**:

```js
var modal = new Modal(element, options);
```

## Options

The second parameter in the constructor is an options object.

| property     | type     | default value | description                                                        |
|--------------|----------|---------------|--------------------------------------------------------------------|
| changeHash   | boolean  | true          | Possibility to alter the URL fragment when the modal opens/closes. |
| enableEscape | boolean  | true          | Allow closing the modal using the escape key.                      |
| resizeEvent  | function | undefined     | Add a user defined throttled resizeEvent.                          |

### ResizeEvent

This custom function will be attached to the window resize event.
It receives two functions as parameters to open and close the modal.

Example:

```javascript
  const filter = document.querySelector('#filter');

  new Modal(filter, {
    /**
    * The modal is always visible from tablet and up,
    * this is atypical.
    */
    resizeEvent: (open, close) => {
      if (window.innerWidth > 960) {
        close();
        filter.setAttribute('aria-hidden', 'false');
      }
      else if (!filter.classList.contains('visible')) {
        filter.setAttribute('aria-hidden', 'true');
      }
    }
  });
```

## Development

### Setup

If you'd like to make adjustments to the source code, you can set up this
project locally. 

To clone the repo and install dependencies:

```bash
$ git clone git@github.com:StadGent/npm_package_modal.git
$ cd npm_package_modal
$ npm install
```

### Dev

```shell
$ npm run dev
```

### Build

```shell
$ npm run build
```

## Contributing

Thanks for your interest in contributing! [Get started here](.github/CONTRIBUTING.md).

## Authors

- Bart Delrue - [GitHub](https://github.com/delrueba)
- Helena Standaert - [GitHub](https://github.com/hstandaert)
