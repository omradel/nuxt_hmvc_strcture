// this fuction to convert the html from api to text to enable slicing on it and other
// text methods
export function stripHtmlTags(html: any) {
  return html.replace(/<[^>]*>?/gm, "");
}
