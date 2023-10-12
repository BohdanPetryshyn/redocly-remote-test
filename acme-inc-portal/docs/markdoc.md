# Markdoc
# Example of `h1` heading

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet erat sit amet magna rhoncus, at volutpat est facilisis. Aenean pulvinar nisl ut sapien maximus euismod. Maecenas eu malesuada leo, nec elementum libero. Sed quis dictum tortor. Ut ut lorem at quam convallis pretium nec id ligula. Morbi ut nisi sed est facilisis elementum a ac nulla. Ut mauris nisl, placerat varius enim eget, vulputate porttitor nisi. Integer vehicula turpis vitae enim ultrices pulvinar. Vivamus dolor justo, cursus at congue id, consequat non orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas sagittis mollis tellus, a vestibulum dolor mollis sed. Duis id velit sed nulla posuere iaculis id ac lorem.


- [x] Check markdoc repo
- [x] Use `markdoc-support` branch
- [ ] Implement react component for h1-6 tags

## Content reuse

You can reuse content using the [embed tag](https://redoc.ly/docs/developer-portal/guides/reusing-content/).

#### Link to it from other pages

You can create a link to it.

To do that, you can edit this `markdown.md` file and remove the back ticks around this example.

```markdown
[My first plain markdown page!](plain.md)
```

(And save your file.)

You'll notice the terminal will output a message stating that the file changed.
Also, you can watch your page in the browser and notice it will update automatically.

![markdown file changed](./images/markdown-file-changed.png)

#### Link to internal page

[Mermaid Diagrams](mermaid.md)

[Admonitions](admonitions.md)


## Raw HTML blocks

Inserts a video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/NcEHOlnAY6A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div class="np">SomeText</div>

## Colored text

Lorem ipsum {% text color="red" %}dolor sit amet{% /text %}