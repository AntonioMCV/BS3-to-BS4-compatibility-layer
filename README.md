# Bootstrap 3 to Bootstrap 4 compatibility layer

This project tries to offer a layer of compatibility for Bootstrap 3 markup using new Bootstrap 4. For all those projects for some reason cannot be updated as easy as we would like

This layer can be configurated through configuration.scss where you can activate/deactivate bootstrap components you need to be covered by the layer, in order to generate a lighter CSS it is better if you can drop all elements you are not using from BS3.

## Quick start

Several quick start options are available:

- Clone the repo: `git clone https://github.com/marcoscv-work/BS3-to-BS4-compatibility-layer`
- `npm i`
- `gulp watch`
- open `index.html
- Change something and refresh

## What's included

```
bootstrap/
├── main.scss   // File which load bootstrap 4 and then Compatibility layer (_layer.scss)
├── _layer.scss
├── css/
│   ├── main.css   // Compiled CSS
└── scss/
    ├── *.*
```

## Bugs and feature requests

https://github.com/marcoscv-work/BS3-to-BS4-compatibility-layer/issues