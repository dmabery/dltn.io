Status: #🌱
Tags: #Obsidian [[How to Take Notes]]
***
# How to Use Dataview Plugin

The `FROM` statement determines what pages will initially be collected and passed onto the other commands for further filtering. You can select from any [source](https://blacksmithgu.github.io/obsidian-dataview/query/sources), which currently means by folder, by tag, or by incoming/outgoing links.

-   **Tags**: To select from a tag (and all its subtags), use `FROM #tag`.
-   **Folders**: To select from a folder (and all its subfolders), use `FROM "folder"`.
-   **Links**: You can either select links TO a file, or all links FROM a file.
-   To obtain all pages which link TO `[[note]]`, use `FROM [[note]]`.
-   To obtain all pages which link FROM `[[note]]` (i.e., all the links in that file), use `FROM outgoing([[note]])`.

You can compose these filters in order to get more advanced sources using `and` and `or`.

-   For example, `#tag and "folder"` will return all pages in `folder` and with `#tag`.
-   `[[Food]] or [[Exercise]]` will give any pages which link to `[[Food]]` OR `[[Exercise]]`.

You can also "negate" sources to obtain anything that does NOT match a source using `-`:

-   `-#tag` will exclude files which have the given tag.
-   `#tag and -"folder"` will only include files tagged `#tag` which are NOT in `"folder"`.