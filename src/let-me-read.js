const elementsToRemove = [
  "script",
  "style",
  "area",
  "audio",
  "img",
  "map",
  "track",
  "video",
  "embed",
  "iframe",
  "object",
  "param",
  "picture",
  "source",
  "canvas",
  "noscript",
  "button",
  "datalist",
  "fieldset",
  "form",
  "input",
  "label",
  "legend",
  "meter",
  "optgroup",
  "option",
  "output",
  "progress",
  "select",
  "textarea",
  "menu",
  "applet",
  "bgsound",
  "image",
];
const goodElements = [
  "address",
  "article",
  "aside",
  "footer",
  "header",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hgroup",
  "main",
  "nav",
  "section",
  "blockquote",
  "dd",
  "div",
  "dl",
  "dt",
  "figcaption",
  "figure",
  "hr",
  "li",
  "ol",
  "p",
  "pre",
  "ul",
  "a",
  "abbr",
  "b",
  "bdi",
  "bdo",
  "br",
  "cite",
  "code",
  "data",
  "dfn",
  "em",
  "i",
  "kbd",
  "mark",
  "q",
  "s",
  "samp",
  "small",
  "span",
  "strong",
  "sub",
  "sup",
  "time",
  "u",
  "var",
  "wbr",
  "del",
  "ins",
  "caption",
  "col",
  "colgroup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "tr",
  "details",
  "dialog",
  "summary",
  "slot",
  "template",
];

if (document.body.id !== "let-me-read") {
  elementsToRemove.forEach((tag) => {
    Array.from(document.body.getElementsByTagName(tag)).forEach((e) => {
      e.remove();
    });
  });
  Array.from(document.body.getElementsByTagName("*")).forEach((e) => {
    e.removeAttribute("style");
    const tagName = e.tagName.toLowerCase();
    if (!goodElements.includes(tagName) && !tagName.startsWith("app-")) {
      e.remove();
    }
  });
  Array.from(document.body.getElementsByTagName("a")).forEach((e) => {
    if (!e.href.startsWith("#")) {
      e.setAttribute("target", "_blank");
      e.setAttribute("rel", "noreferrer");
    }
  });
  const content = document.getElementById("content");
  let newHtml = content || document.body;
  const articles = document.body.getElementsByTagName("article");
  if (articles.length === 1) {
    newHtml = articles[0];
  }
  document.head.innerHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <title>${document.title}</title>
  `;
  document.body.id = "let-me-read";
  document.body.innerHTML = `<main id="reader">${newHtml.innerHTML}</main>`;
}
