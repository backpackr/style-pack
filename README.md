![logo](https://image.idus.com/static/backpackr.png)

![npm](https://img.shields.io/npm/v/@backpackr/style-pack?color=%23e6524b)
![license](https://img.shields.io/github/license/backpackr/style-pack)

# !NOTICE!

This project is still not done yet! We will make this library by half of this year and release v1.0.0 soon. Please wait until that time!

# style-pack

🐺Basic CSS library pack

## 💾 Install

### NPM

1. Install `style-pack` with `npm`

```
npm install --save @backpackr/style-pack
```

2. Import at your project root JS file

```javascript
// for ES6
import "@backpackr/style-pack";
// for common JS
require("@backpackr/style-pack");
```

### Script

Using [jsDelivr](https://www.jsdelivr.com/) for CDN

```html
<script src="https://cdn.jsdelivr.net/gh/backpackr/style-pack/app.js"></script>
```

If you want specific version, choose one in [here](https://github.com/backpackr/style-pack/releases)

## 🧰 Usage

In this part, i will use `React.js` for example.

### By class selector

You can use `class selector` to set styles like this.

```javascript
import "@backpackr/style-pack";

export const Button = () => {
    return <button className="button__red">This is red button!</button>;
};
```

This must be just simplest way to use it.

### By CSS module

You can use `css module` to set styles like this.

```javascript
import styles from "@backpackr/style-pack/modules/styles.module.css";

export const Button = () => {
    return <button className={styles.button__red}>This is red button!</button>;
};
```

If you use `css module`, it will be easy to see what kind of styles you can use. Just `console.log()` it.

```javascript
import styles from "@backpackr/style-pack/modules/styles.module.css";

console.log(styles);
```

## 🌏 Local environment

You can set and test this library in the local environment

1. Clone `style-pack`

```
git clone https://github.com/backpackr/style-pack.git
```

2. Build it

```
cd style-pack
npm run build
```

3. Move it to your project and `npm` install by path

```
cd your/project
npm install ../style-pack
```

4. Import at your project root JS file

```javascript
// for ES6
import "@backpackr/style-pack";
// for common JS
require("@backpackr/style-pack");
```

5. If your project has `hot-reloading`, there're two choice by usage.

> Class selector

```
cd style-pack
npm run webpack:class
```

> CSS module

```
cd style-pack
npm run webpack:module
```

It will make your project to show you changes immediately

## 🔨 Feature

[DEMO page](https://backpackr.github.io/style-pack.html)

-   container
-   color
-   align
-   grid
-   flex_grid
-   radius

## 📜 License

[MIT](https://github.com/backpackr/style-pack/blob/master/LICENSE)
