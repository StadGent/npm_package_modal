/**
 * Generates a tabTrap object
 *
 * @param {object} container DOM-element
 * @constructor
 */
function TabTrap (container) {
  let focusables = getFocusables(container);

  /**
   * Returns all focusable elements within a given container.
   *
   * @param {object} container hamburger DOM-element
   * @return {array} focusable elements
   */
  function getFocusables (container) {
    let focusables = container.querySelectorAll(
      'a[href], ' +
      'area[href], ' +
      'input:not([disabled]):not([hidden]), ' +
      'select:not([disabled]), ' +
      'textarea:not([disabled]), ' +
      'button:not([disabled]), ' +
      '[tabindex="0"]'
    );
    return Array.prototype.slice.call(focusables).filter(isVisible);
  }

  /**
   * Checks if a DOM element is visible.
   * Hidden elements cannot receive focus.
   *
   * @param elem
   * @return {boolean}
   */
  function isVisible(elem) {return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0; }

  this.setFocusables = function () {
    focusables = getFocusables(container);
  };

  this.next = function (e) {
    this.setFocusables();
    let active = document.activeElement;
    if (active && active === focusables[focusables.length - 1]) {
      focusables[0].focus();
      e.preventDefault();
    }
  };

  this.back = function (e) {
    this.setFocusables();
    let active = document.activeElement;
    if (active && active === focusables[0]) {
      focusables[focusables.length - 1].focus();
      e.preventDefault();
    }
  };

  this.home = function () {
    this.setFocusables();
    focusables[0].focus();
  };

  this.end = function () {
    this.setFocusables();
    focusables[focusables.length - 1].focus();
  };

  this.hasFocusables = focusables && focusables.length > 0;
}

export default TabTrap;
