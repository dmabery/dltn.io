```javascript

const sortedPosts = filteredPosts.sort((a,b) => {

if (a.frontMatter.title < b.frontMatter.title) { return -1; }

if (a.frontMatter.title > b.frontMatter.title) { return 1; }

return 0;

})```
Obviously, the properties are going to change based on your array data.

#programming
#javascript
