```dataview
table without id
	file.link as Media,
	rating
where
	contains(category,this.file.link) and
	!contains(file.name, "Template")
sort "date watched" asc
```
