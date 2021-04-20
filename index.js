let userId = "tharunece95@gmail.com";
let url = `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages`;
let scope = "https://mail.google.com/";
let client_id =
  "483228225913-7tmuhk2cicdd85nbo4nboaujmn6lr0sk.apps.googleusercontent.com";

let token_url = "https://accounts.google.com/o/oauth2/token";

function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log("Full Name: " + profile.getName());
        console.log("Given Name: " + profile.getGivenName());
        console.log("Family Name: " + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var access_token = googleUser.getAuthResponse(true).access_token;
        console.log("Access Token: " + access_token);
      }

async function getToken() {
  let res = await fetch(`https://accounts.google.com/o/oauth2/v2/auth?
    scope=${scope}&
    include_granted_scopes=true&
    response_type=token&
    state=state_parameter_passthrough_value&
    redirect_uri=https://tharun-coder.github.io/Gmail_temp/&
    client_id=${client_id}`,{
       method:"POST",
       headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}});
  let data = res.json();
  console.log(res);
}

// getToken();

async function getData() {
  try{
  let res = await fetch(
    url +
      `/178e9d13d2acc926?access_token=ya29.a0AfH6SMBI0KZ8g0RDaSsSOuut4hjPdukwaJb7TuIlMhq6GZ1iH--tgBwfmdnCpGaQYpQ06rjqe00iLqofajwcXBOX83FduY813JsdD8whIojCpNdh1l4q7SYoLRWpNQhKchyZM4EXshs3BqoZebnEANH8xegDig`
  );
  let data = await res.json();
  console.log(data);
  let messages = [];
//   data.messages.forEach((e) => messages.push(getMessages(e.id)));
//   console.log(messages);
  } catch(err){
    console.log(err)
  }
}

getData();

async function getMessages() {
  try{
  let msg = await fetch(
    url +
      `/178e9d13d2acc926?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc3NDU3MzIxOGM2ZjZhMmZlNTBlMjlhY2JjNjg2NDMyODYzZmM5YzMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNDgzMjI4MjI1OTEzLTd0bXVoazJjaWNkZDg1bmJvNG5ib2F1am1uNmxyMHNrLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNDgzMjI4MjI1OTEzLTd0bXVoazJjaWNkZDg1bmJvNG5ib2F1am1uNmxyMHNrLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAxMTM5MzQwNzM4MDc5NDAwNzk4IiwiZW1haWwiOiJ0aGFydW5lY2U5NUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IlhwV29FSTkyR2JvZ0hpaFBwck5xTHciLCJuYW1lIjoiVGhhcnVuIEt1bWFyIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdnY1RxZnBnendrd2UwRW5PMGFZZXFTd0pFZzBOUVk3QW1yUGp5UC1BPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlRoYXJ1biIsImZhbWlseV9uYW1lIjoiS3VtYXIiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTYxODg5NTMyMywiZXhwIjoxNjE4ODk4OTIzLCJqdGkiOiJhNjQ3MjAzODUwNjA5MjBmNmRjMTA1ZTNiMjk0N2NhMTA0NTZiOGYzIn0.W7hVIDeBBLuJYz6DXkqUx7JgJ3AJ45muaryZlHScFzN-4jqNf9TWU2G6v_4Cg0lSRILBFQdxHjA4SnCIqr52GAZorQ7HruJu9-si9ih6z5gZh-3ixGq-nOV2hweXGN0_TsUsEP74jtsUQNDRzJFpqepojxOzYi0hlZSD0PWFbQdquYm0V0glb2_3HiEubf-w6h95-I26J_Vi_1nMwEF1WpSOqvgqK2ZtEHXWMwtJnbU3i8oKJS7E-IDKfLwI-8ODOuO-HrAQed_6jaEtPv-x2T6JIp-ZJtIrFT8TV_OdspBDFJG0wTFTXQ-4pyybBZpV1iFOCEQjimohApfDKLtTTw`
  );
  let msg_data = await msg.json();
    console.log(msg_data)
  return msg_data;
  } catch(err){
   console.log(err)
  }
}

// getMessages()

//https://tharun-coder.github.io/Gmail_temp/#state=try_sample_request&
//access_token=ya29.a0AfH6SMBfrIKm3EQy0tK7y8HIeErf-uzDI2s3mDC-ADK04Gb99iFsvGB--WcY6iMaDQkV2KKZeKABTSSPFg-YYGqmXlBmZrW2ipo-HeeXgfDhZ_TWDeibkgG99KodQl-spq0go9yKrhJ5DIT0ZZcRufrCZTcg&
//token_type=Bearer&expires_in=3598&scope=email%20profile%20https://www.googleapis.com/auth/drive.metadata.readonly%20openid%20https://www.googleapis.com/auth/gmail.readonly%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email%20https://mail.google.com/&authuser=0&prompt=none
