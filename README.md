# My technical blog

My technical blog hosted through Github.

## Technical notes

It's a small and *oldschool* Angularjs app using [Marked](https://github.com/markedjs/marked) to fetch markdown files from the server and transform them into HTML.

**Don't try this at work** - this isn't internet banking code!

```cmd
npm start
```

Each blog are within it's own folder with all resources.  E.g. html, md, images etc.  The div with html id markdown will be replaced with the md file with same name as html:

```html
<div id="markdown"></div>
```

Routing setup hooks up the markdown controller:

```js
.when('/just-start', { templateUrl: 'ideas/just-start/just-start.html', controller: 'MarkdownController' })
```

This controller fetches md file with same name as template (html):

```js
.controller('MarkdownController', function ($route) {
  $.get($route.current.$$route.templateUrl + '.md', function (data) {
    document.getElementById('markdown').innerHTML = marked(data);
  });
});
```

* Gulp simply concats some js & css.  Did I mention *oldschool*?
* For some reason I've manually included Marked, I can't remember why :-)
