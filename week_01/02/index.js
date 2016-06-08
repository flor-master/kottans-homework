'use strict'

const PostHTML = require('posthtml')

let fs = require('fs');
let bootstrap = fs.readFileSync('./bootstrap.txt')
                  .toString()
                  .split('.')
                  .map( el => el.replace('\n', '') )

bootstrap = bootstrap.splice(1, bootstrap.length)
let bootstrapSet = new Set(bootstrap)


const html = `
    <myComponent class='news col-xs-12 js-all-news js-only-for-IE'>
      <myTitle class='col-lg-6 news__item btn-default js-bla-bla'>Super Title</myTitle>
      <myText class='col-lg-6'>Awesome Text</myText>
    </myComponent>`
console.log(html)


const plugin = tree => {
  tree.match({ content: true }, node => {

    let classList = node.attrs.class.split(' ')

    classList = classList.filter( el => !bootstrapSet.has(el) )

    let classListNoJs = [];
    classList = classList.filter( (el) => {
      if (el.indexOf('js-') > -1){
        classListNoJs.push(el);
        return false
      } else{
        return true
      }
    })



    if (classListNoJs.length > 0) {
      node.attrs['data-js'] = classListNoJs.join(' ')
    }

    if (classList.length > 0) {
      node.attrs.class = classList.join(' ')
    } else {
      delete node.attrs.class
    }

    return node
  })
}




new PostHTML([ plugin ])
  .process(html)
  .then(result =>
  {
      console.log(result.html)
  })
  .catch(console.error)
