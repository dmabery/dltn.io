```dataview
table without id
	file.link as name,
	occupation,
	born,
	died
WHERE contains(category,[[People]]) and
	!contains(file.name,"Template")
	sort born asc
```
