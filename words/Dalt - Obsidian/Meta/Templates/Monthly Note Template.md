---
aliases: 
previous: 
next: 
tags:
  - monthly
category:
  - "[[Monthly]]"
---
```dataview
list 
where
	contains(file.name,this.file.name) or
	contains(file.outlinks.file.name,this.file.name) or
	contains(string(file.frontmatter),this.file.name)
where !contains(file.tags, "daily")
where !contains(file.tags, "monthly")
sort file.name asc
```
