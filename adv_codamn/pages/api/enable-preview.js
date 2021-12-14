// Preview mode technicly be use to have a development like behavior of getStaticProps

export default (req, res) => {
  res.setPreviewData({}); // set some cookies
  // in apllication cookies:
  // __next_preview_data => JWT token
  // __prerender_bypass => randomID

  res.statusCode = 200;
  res.json({ name: "JohnDoe" });
}