# markdownTohtml
This module can scan your directory and transpile markdown file to html file.

Install package
```shell
npm i markdowntranshtml
```

```js
const markdownTohtml = require('markdowntranshtml')
```
## Parameters
markdownTohtml(input_dir, output_dir,[encoding])
- input_dir(require): your markdown file directory
- output_dir(require): html file output directory 
- encoding(option): default:'utf8'

```js
const files_count = markdownTohtml('pages', 'build/pages')
console.log("Transpile files number:",files_count)
```

Output directory will same as input directory 
