# Google Sign-in Button

Scalable implementations of the Google sign-in button, as specified in the [Google sign-in branding guidelines](https://developers.google.com/identity/branding-guidelines). Currently does not support style changes based on CSS pseudo-selectors such as `:hover` or `:focus`.

## Usage
1. `bower install google-signin-button`
2. Specify the location of your Google logo for `span.google-icon`
3. Insert the button HTML where you want the button to appear

In order to adjust the dimensions of the button, change the `$height` in `button.sass`. Width is set to 100%, but it can be modified by changing `$width`. **Note:** the dimensions of the button are not dependent on its width, so watch out for text overflow issues.

[Roboto](https://fonts.google.com/specimen/Roboto) is already imported, so you can cut out the `@import` if you're already using Roboto in your project.

### CSS only
If you're using only the CSS, changing the height from the default `40px` will involve some math; reference the SASS file for some hints. However, the same usage steps apply.