let userId = "tharunece95@gmail.com";
let url = `https://mail.google.com/https://gmail.googleapis.com/gmail/v1/users/${userId}/messages`;

async function getData() {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
}

getData();
