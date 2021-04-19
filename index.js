let userId = "tharunece95@gmail.com";
let url = `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages`;
let scope = "https://mail.google.com/";
let client_id =
  "483228225913-7tmuhk2cicdd85nbo4nboaujmn6lr0sk.apps.googleusercontent.com";

let token_url = "https://accounts.google.com/o/oauth2/token";

async function getToken() {
  let res = await fetch(`https://accounts.google.com/o/oauth2/v2/auth?
    scope=https://mail.google.com/&
    include_granted_scopes=true&
    response_type=token&
    state=state_parameter_passthrough_value&
    redirect_uri=https://tharun-coder.github.io/Gmail_temp/&
    client_id=${client_id}`);
  let data = res.json();
  console.log(data);
}

// getToken();

async function getData() {
  try{
  let res = await fetch(
    url +
      `?access_token=ya29.a0AfH6SMBhAotETbv7-9usgzN1bWm6kwXhp4AfLwKpLfXYsg2y-21nkBatN9uxNtnigKi0aGMEb-kaMkMOy_2kPskAaOJCHIP5H3s_JerjDloyDTH923NN7JHfgKliw_gyQAMEXcavpliGdbiHBYutqTHOrZwU`
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
      `/178e9d13d2acc926?access_token=ya2.a90AfH6SMBfrIKm3EQy0tK7y8HIeErf-uzDI2s3mDC-ADK04Gb99iFsvGB--WcY6iMaDQkV2KKZeKABTSSPFg-YYGqmXlBmZrW2ipo-HeeXgfDhZ_TWDeibkgG99KodQl-spq0go9yKrhJ5DIT0ZZcRufrCZTcg`
  );
  let msg_data = await msg.json();
    console.log(msg_data)
  return msg_data;
  } catch(err){
   console.log(err)
  }
}

getMessages()

//https://tharun-coder.github.io/Gmail_temp/#state=try_sample_request&
//access_token=ya29.a0AfH6SMBfrIKm3EQy0tK7y8HIeErf-uzDI2s3mDC-ADK04Gb99iFsvGB--WcY6iMaDQkV2KKZeKABTSSPFg-YYGqmXlBmZrW2ipo-HeeXgfDhZ_TWDeibkgG99KodQl-spq0go9yKrhJ5DIT0ZZcRufrCZTcg&
//token_type=Bearer&expires_in=3598&scope=email%20profile%20https://www.googleapis.com/auth/drive.metadata.readonly%20openid%20https://www.googleapis.com/auth/gmail.readonly%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email%20https://mail.google.com/&authuser=0&prompt=none
