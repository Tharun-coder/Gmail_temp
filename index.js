let url = `https://gmail.googleapis.com/gmail/v1/users/`;
let scope = "https://mail.google.com/";
let client_id =
  "483228225913-7tmuhk2cicdd85nbo4nboaujmn6lr0sk.apps.googleusercontent.com";

let token_url = "https://accounts.google.com/o/oauth2/token";

function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
//         console.log("ID: " + profile.getId()); // Don't send this directly to your server!
//         console.log("Full Name: " + profile.getName());
//         console.log("Given Name: " + profile.getGivenName());
//         console.log("Family Name: " + profile.getFamilyName());
//         console.log("Image URL: " + profile.getImageUrl());
         let userId = profile.getEmail();

        // The ID token you need to pass to your backend:
        var access_token = googleUser.getAuthResponse(true).access_token;
        console.log("Access Token: " + access_token);
      
let messages = [];
async function getData() {
  try{
  let res = await fetch(
    url +
      `${userId}/messages?access_token=${access_token}`
  );
  let data = await res.json();
  console.log(data);
  
  data.messages.forEach((e) => messages.push(e.id))
  console.log(messages);
  } catch(err){
    console.log(err)
  }
}

getData();

async function getMessages(id) {
    try {
      let msg = await fetch(
        url + `${userId}/messages/${id}?access_token=${access_token}`
      );
      let msg_res = await msg.json();
      //   console.log(msg_res)
      return msg_res;
    } catch (err) {
      return err;
    }
  }
}

  
}
