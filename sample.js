const fileNames = Object.keys(req.files);
for await (const fileName of fileNames) {
  const url = `https://api.knack.com/v1/applications/${
    process.env.KNACK_APPLICATION_ID
  }/assets/file/upload`;
  let form = new FormData();
  form.append('file', req.files[fileName].data, fileName);
  console.log('***************');
  console.log(fileName);
  console.log('***************');
  const response = await axios.post(
    url,
    form,
    {
      'X-Knack-Application-Id': process.env.KNACK_APPLICATION_ID,
      'X-Knack-REST-API-Key': process.env.KNACK_API_KEY,
      'Content-Type': 'multipart/form-data'
    }
  );
  console.log(response);
}
