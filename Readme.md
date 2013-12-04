# hbs-json

  Handlebars helper for `JSON.stringify`.

## Installation
  
    $ npm install hbs-json

## Example

```js
var json = require('hbs-json');
var hbs = require('hbs');

hbs.registerHelper('json', json);

app.get('/', function (req, res, next) {
  res.render('index.html', { user: req.context.user });
});
```

```html
 <script>
    window.user = {{ json user }}
  </script>
```

## API

### json
  
  A handlebars helper for `JSON.stringify`.


## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```