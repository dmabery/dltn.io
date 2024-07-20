```dataview
table without id
	file.link as Book,
	notes,
	posted
where
	contains(category,this.file.link) and
	!contains(file.name, "Template")
sort rating desc, date asc
```

## To read
```dataview
LIST
FROM #toread 
```
- Brothers Karamozov