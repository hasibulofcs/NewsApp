export const getDataFromUrlNewsInDetail = new URLSearchParams(
  new URL("newsindetail", "/Home").search
).get("title");
