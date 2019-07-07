const Remarkable = require('remarkable');
const fs = require('fs');
const path = require('path')

//trans file number counter
var count = 0;

function main(input_path, output_path, encoding = 'utf8') {
    transpileDir(input_path, output_path, encoding)
    return count;
}

function transpileDir(dir, transDir, encoding = 'utf8') {
    const dirents = fs.readdirSync(dir, { withFileTypes: true })

    dirents.forEach((e) => {
        if (e.isFile()) {
            transpilePage(dir, transDir, e.name)
            console.log(e.name)
            count++;
        }
        else {
            const subdir = path.join(dir, e.name)
            const subtrans = path.join(transDir, e.name)

            try {
                fs.mkdirSync(subtrans)
            }
            catch (e) {
                e.code !== 'EEXIST' && console.log(e)
            }
            transpileDir(subdir, subtrans, { encoding })
        }
    })
}

function transpilePage(
    pagePath,
    transPath,
    filename,
    { encoding } = { encoding: 'utf8' }) {

    const page = fs.readFileSync(path.join(pagePath, filename), encoding)
    var md = new Remarkable();

    const htmlPage = md.render(page);

    fs.writeFileSync(path.join(transPath, path.parse(filename).name) + ".html", htmlPage, encoding)
}



module.exports = main;

