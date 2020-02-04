![logo](https://image.idus.com/static/backpackr.png)

![license](https://img.shields.io/github/license/backpackr/style-pack)

# style-pack

🐺Basic CSS library pack

## Import

### NPM

1. Install style-pack module with `npm`

```
npm install --save @backpackr/style-pack
```

2. Import at your project root JS file

```javascript
// for ES6
import "style-pack";
// for common JS
require("style-pack");
```

### Script

Using [jsDelivr](https://www.jsdelivr.com/) for CDN

```html
<script src="https://cdn.jsdelivr.net/gh/backpackr/style-pack/style.js"></script>
```

If you want specific version, choose one in [here](https://github.com/backpackr/style-pack/releases)

## Local environment

1. Clone `style-pack`

```
git clone https://github.com/backpackr/style-pack.git
```

2. Build it

```
cd style-pack
npm run build
```

3. Move to your project and install it by path

```
cd your/project
npm install ../style-pack
```

4. Import at your project root JS file

```javascript
// for ES6
import "style-pack";
// for common JS
require("style-pack");
```

5. If your project has `hot-reloading`, let `style-pack` build whenever you edit something

```
cd style-pack
npm run webpack
```

It will make your project to show you changes immediately

## License

[MIT](https://github.com/backpackr/style-pack/blob/master/LICENSE)
