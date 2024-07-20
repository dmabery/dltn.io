## Working on
```dataview
LIST
FROM #blog-draft or #posts
WHERE status = "Drafting"
```
---
## Ideas
```dataview
LIST
FROM #blog-draft or #posts or [[Posts]]
WHERE status != "Published"
SORT date asc
```
---
## Published
```dataview
LIST
FROM #blog-draft or #posts
WHERE status = "Published"
```