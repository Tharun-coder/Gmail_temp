let userId = "tharunece95@gmail.com";
let url = `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages`;
let scope = "https://mail.google.com/";

async function getData() {
  let res = await fetch(url, {
    headers: {},
  });
  let data = await res.json();
  console.log(data);
}

getData();
