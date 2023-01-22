# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.4] - 2022-01-20

- Skip one animationFrame before placing the focus on the modal.
- Add support for node 18.
- Fix security issues.

## [1.0.3] - 2020-08-17

- Fixed broken same page links.  
  Using a same page link inside the modal placed the focus back on the trigger,  
  as is to be expected when using the fragment to open and close the modal.  
  But in case there is a new fragment in the URL, we want same page navigation.

## [1.0.2] - 2020-03-19

- Updated tabtrap.js to exclude hidden elements from the focusables list.

## [1.0.1] - 2020-03-19

- Added 'enableEscape' option with default value `true`.

## [1.0.0] - 2020-03-12

- Initial version
