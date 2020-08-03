# web-component-avatar

[![npm version](http://img.shields.io/npm/v/avatar-component-smak.svg?style=flat)](https://npmjs.org/package/avatar-component-smak "View this project on npm") [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/avatar-component-smak)

Web Component using plain javascript for avatar with name

```
    <avatar-comp
      src="./avatar.jpeg"
      avatarName="Sachin Tendulkar"
      textPosition="right"
    />
```

All properties are optional.

**Install From NPM**

```
npm i avatar-component-smak
```

**With all properties**

![alt text](https://github.com/ShaileshMak/web-component-avatar/blob/master/readme-assets/righttextavatar.png?raw=true "avatar web component with text position on right")

**With src and name properties, text position default is left**

![alt text](https://github.com/ShaileshMak/web-component-avatar/blob/master/readme-assets/lefttextavatar.png?raw=true "avatar web component with default text position on left")

**With only src property**

![alt text](https://github.com/ShaileshMak/web-component-avatar/blob/master/readme-assets/notextavatar.png?raw=true "avatar web component with no text")

**With no properties**

![alt text](https://github.com/ShaileshMak/web-component-avatar/blob/master/readme-assets/defautlavatar.png?raw=true "avatar web component with no text")

**SAMPLE HTML**
also you can find in elements folder elements/index.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <avatar-comp
      src="./assets/avatar.jpeg"
      avatarName="Sachin Tendulkar"
      textPosition="right"
    />
    <script src="./../dist/AvatarComponent.js"></script>
  </body>
</html>
```
