let userId = "tharunece95@gmail.com";
let url = `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages`;
let scope = "https://mail.google.com/";
let client_id =
  "483228225913-7tmuhk2cicdd85nbo4nboaujmn6lr0sk.apps.googleusercontent.com";

let token_url = "https://accounts.google.com/o/oauth2/token";

async function getToken() {
  let res = await fetch(`https://accounts.google.com/o/oauth2/v2/auth?
    scope=https//www.googleapis.com/&
    include_granted_scopes=true&
    response_type=token&
    state=state_parameter_passthrough_value&
    redirect_uri=https://tharun-coder.github.io/Gmail_temp/&
    client_id=${client_id}`);
//   let data = res.json();
  console.log(res);
}

getToken();

async function getData() {
  let res = await fetch(
    url +
      `?access_token=ya29.a0AfH6SMAahj-HXMdv-NmCEbKAem5mS8swb6hkuUydmG4yiv1Kn9wCQ9CeFw3jNj-gsh-oLx6INE6VrOXw1PjJvaMPaFV3lU2qobbwYy2gy9cO-oUMOtusMWjQmjWiZwr0v4M-fUYpSloUU8CvWsEdqfEg84Iq`
  );
  let data = await res.json();
  //   console.log(data);
}

// getToken();

//https://tharun-coder.github.io/Gmail_temp/#state=try_sample_request&
//access_token=ya29.a0AfH6SMAahj-HXMdv-NmCEbKAem5mS8swb6hkuUydmG4yiv1Kn9wCQ9CeFw3jNj-gsh-oLx6INE6VrOXw1PjJvaMPaFV3lU2qobbwYy2gy9cO-oUMOtusMWjQmjWiZwr0v4M-fUYpSloUU8CvWsEdqfEg84Iq&
//token_type=Bearer&expires_in=3599&scope=email%20profile%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/gmail.readonly%20https://www.googleapis.com/auth/drive.metadata.readonly%20openid&authuser=0&prompt=consent
