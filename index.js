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
      
let messages = []
async function getData() {
  try{
  let res = await fetch(
    url +
      `${userId}/messages?access_token=${access_token}`
  );
  let data = await res.json();
  console.log(data);
  
  data.messages.forEach((e) => getMessages(e.id))
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
      messages.push(msg_res)
    } catch (err) {
      return err;
    }
  }
  
 console.log(messages);
  
 function displayDataDrafts() {
  info_body.innerHTML = "";
  messages.filter((e)=> e.labelIds[0]==="DRAFT").forEach((data) => {
    let msg_row = createTag("div", "row msg_row");
    let msg_ckbx = createTag("div", "col-lg-2 col-sm-4 msg_ckbx");
    msg_ckbx.innerHTML = `<input type="checkbox" id=${data.id}>&nbsp&nbsp
    <i class="fa fa-star-o" aria-hidden="true"></i>`;
    msg_row.setAttribute("style", "border-bottom: 1px solid gray");
    let msg_from = createTag("div", "col-lg-2 col-sm-4 msg_from");
    msg_from.innerText = data.payload.headers[4].value;
    let msg_body = createTag("div", "col-lg-6 col-sm-12 msg_body");
    msg_body.innerHTML = `<b>${data.payload.headers[3].value}</b> - ${truncate(data.snippet)}`;
    let msg_date = createTag("div", "col-lg-2 col-sm-3 date");
    msg_date.innerText = data.payload.headers[1].value;

    msg_row.append(msg_ckbx, msg_from, msg_body, msg_date);
    info_body.append(msg_row);
  });
  if (info_body.innerHTML !== "") {
    let send_draft = createTag("div", "col-4 mt-2");
    send_draft.innerHTML = `<button class="btn btn-primary btn-sm" onclick="sendDraft()">Send Draft</button>`;
    info_body.append(send_draft);
  }
}

  
  
}



let inbox = [
  {
    id: 1,
    from: {
      name: "Vibhin U",
      mail: "vibhin.u@gmail.com",
    },
    to: {
      name: "Tharun Kumar V",
      mail: "tharunece95@gmail.com",
    },
    subject: "Openings",
    date: "9:11 AM",
    message:
      "Dear Tharun kumar, Immediate Job Opening with Cognizant in Coimbatore Location for Automation Testing on 10-04-21(Saturday)",
  },
  {
    id: 2,
    from: {
      name: "Kala U",
      mail: "kala.u@gmail.com",
    },
    to: {
      name: "Tharun Kumar V",
      mail: "tharunece95@gmail.com",
    },
    subject: "Wishes",
    date: "Apr 13",
    message: `Dear Zen Students Happy Tamil Newyear, Team!`,
  },
  {
    id: 3,
    from: {
      name: "GUVI",
      mail: "zen@guvi.in",
    },
    to: {
      name: "Tharun Kumar V",
      mail: "tharunece95@gmail.com",
    },
    subject: "Batch Timings",
    date: "Apr 12",
    message: `Hi Tharun Kumar, Thank you for registering for "B22 WD Session 1st April 2021".`,
  },
  {
    id: 4,
    from: {
      name: "Mukesh Kumar",
      mail: "gkmukesh.kumar@tcs.com",
    },
    to: {
      name: "Tharun Kumar V",
      mail: "tharunece95@gmail.com",
    },
    subject: "Vancancy in TCS",
    date: "Apr 11",
    message: `Dear Tharun Kumar Vijayakymar, Greetings from TATA Consultancy Services!!
    Thank you for expressing your interest in exploring a career possibility with the TCS Family.
    We are conducting an exclusive Drive for Nagpur Candidate’s (Kindly apply if you are interested for Nagpur)`,
  },
];

let send = [
  {
    id: 1,
    to: {
      name: "Meiyazhagan",
      mail: "kmeiyazhagan14@gmail.com",
    },
    subject: "CodeKata Clarification",
    from: {
      name: "Tharun Kumar V",
      mail: "tharunece95@gmail.com",
    },
    date: "7:22 AM",
    message: `Hi, As discussed, Please find the code in below link. In below fuction i couldn't read value of country.
      Link - https://github.com/Tharun-coder/Covid_Tracker_API/`,
  },
  {
    id: 2,
    to: {
      name: "Kala U",
      mail: "kala.u@gmail.com",
    },
    subject: "Wishes",
    from: {
      name: "Tharun Kumar V",
      mail: "tharunece95@gmail.com",
    },
    date: "Apr 13",
    message: `Wishing you a Happy Tamil Puthandu`,
  },
  {
    id: 3,
    to: {
      name: "GUVI",
      mail: "zen@guvi.in",
    },
    subject: "Announcements",
    from: {
      name: "Tharun Kumar V",
      mail: "tharunece95@gmail.com",
    },
    date: "Apr 12",
    message: `Thanks, I will be there. `,
  },
  {
    id: 4,
    to: {
      name: "Mukesh Kumar",
      mail: "gkmukesh.kumar@tcs.com",
    },
    subject: "Requirements",
    from: {
      name: "Tharun Kumar V",
      mail: "tharunece95@gmail.com",
    },
    date: "Apr 11",
    message: `Hi, Thanks for your mail. I will prepare and send the document ASAP`,
  },
];

let drafts = [];

let info_body = document.querySelector(".body-info");

function displayDataInbox() {
  info_body.innerHTML = "";
  inbox.forEach((data) => {
    let msg_row = createTag("div", "row msg_row");
    let msg_ckbx = createTag("div", "col-lg-2 col-sm-4 msg_ckbx");
    msg_ckbx.innerHTML = `<input type="checkbox" id=${data.id}>&nbsp&nbsp
    <i class="fa fa-star-o" aria-hidden="true"></i>`;
    msg_row.setAttribute("style", "border-bottom: 1px solid gray");
    let msg_from = createTag("div", "col-lg-2 col-sm-4 msg_from");
    msg_from.innerText = data.from.name;
    let msg_body = createTag("div", "col-lg-7 col-sm-12 msg_body");
    msg_body.innerHTML = `<b>${data.subject}</b> - ${truncate(data.message)}`;
    let msg_date = createTag("div", "col-lg-1 col-sm-3 date");
    msg_date.innerText = data.date;

    msg_row.append(msg_ckbx, msg_from, msg_body, msg_date);
    info_body.append(msg_row);
  });
}

function displayDataSend() {
  info_body.innerHTML = "";
  send.forEach((data) => {
    let msg_row = createTag("div", "row msg_row");
    let msg_ckbx = createTag("div", "col-lg-1 col-sm-4 msg_ckbx");
    msg_ckbx.innerHTML = `<input type="checkbox" id=${data.id}>&nbsp&nbsp
    <i class="fa fa-star-o" aria-hidden="true"></i>`;
    msg_row.setAttribute("style", "border-bottom: 1px solid gray");
    let msg_from = createTag("div", "col-lg-2 col-sm-4 msg_from");
    msg_from.innerText = data.from.name;
    let msg_body = createTag("div", "col-lg-7 col-sm-12 msg_body");
    msg_body.innerHTML = `<b>${data.subject}</b> - ${truncate(data.message)}`;
    let msg_date = createTag("div", "col-lg-2 col-sm-3 date");
    msg_date.innerText = data.date;

    msg_row.append(msg_ckbx, msg_from, msg_body, msg_date);
    info_body.append(msg_row);
  });
}

// function displayDataDrafts() {
//   info_body.innerHTML = "";
//   drafts.forEach((data) => {
//     let msg_row = createTag("div", "row msg_row");
//     let msg_ckbx = createTag("div", "col-lg-2 col-sm-4 msg_ckbx");
//     msg_ckbx.innerHTML = `<input type="checkbox" id=${data.id}>&nbsp&nbsp
//     <i class="fa fa-star-o" aria-hidden="true"></i>`;
//     msg_row.setAttribute("style", "border-bottom: 1px solid gray");
//     let msg_from = createTag("div", "col-lg-2 col-sm-4 msg_from");
//     msg_from.innerText = data.from.name;
//     let msg_body = createTag("div", "col-lg-6 col-sm-12 msg_body");
//     msg_body.innerHTML = `<b>${data.subject}</b> - ${truncate(data.message)}`;
//     let msg_date = createTag("div", "col-lg-2 col-sm-3 date");
//     msg_date.innerText = data.date;

//     msg_row.append(msg_ckbx, msg_from, msg_body, msg_date);
//     info_body.append(msg_row);
//   });
//   if (info_body.innerHTML !== "") {
//     let send_draft = createTag("div", "col-4 mt-2");
//     send_draft.innerHTML = `<button class="btn btn-primary btn-sm" onclick="sendDraft()">Send Draft</button>`;
//     info_body.append(send_draft);
//   }
// }

function sendDraft() {
  send.push(...drafts);
  drafts.length === 0;
  info_body.innerHTML = "";
  alert("Message Send. Plese check in send items");
}

function displayCompose() {
  info_body.innerHTML = "";
  let msg_compose = createTag("div", "row msg_compose");
  let msg_header = createTag("div", "col-lg-12 col-sm-12 msg_header ");
  msg_header.innerText = "New Message";
  let msg_to = createTag("div", "col-lg-12 col-sm-12 mt-2");
  msg_to.innerHTML = `<input type="email" id="recipient" placeholder="Recipient" class="form-control"/>`;
  let msg_subject = createTag("div", "col-lg-12 col-sm-12 mt-2");
  msg_subject.innerHTML = `<input type="text" id="subject" placeholder="Subject" class="form-control"/>`;
  let msg_body = createTag("div", "col-lg-12 col-sm-12 mt-2");
  msg_body.innerHTML = `<textarea id="msg_body" cols="30" rows="10" class="form-control"></textarea>`;
  let btns = createTag("div", "col-lg-12 col-sm-12 mt-2");
  btns.innerHTML = `<button class="btn btn-primary btn-sm" id="send" onclick="composeSend()">Send</button>
  <button class="btn btn-secondary btn-sm" id="draft" onclick="composeDraft()">Save as Draft</button>`;

  msg_compose.append(msg_header, msg_to, msg_subject, msg_body, btns);
  info_body.append(msg_compose);
}

function composeSend() {
  let recipient = document.querySelector("#recipient").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#msg_body").value;
  let date = new Date();
  let date_time = `${
    date.getHours() + 1 > 12 ? date.getHours() + 1 - 12 : date.getHours()
  }:${date.getMinutes()} ${date.getHours() + 1 > 12 ? "PM" : "AM"}`;
  if (recipient === "") {
    alert("Please enter Recipient to send");
  } else {
    send.push({
      id: 5,
      to: {
        name: "david",
        mail: recipient,
      },
      subject: subject,
      from: {
        name: "Tharun Kumar V",
        mail: "tharunece95@gmail.com",
      },
      date: date_time,
      message,
    });
    alert("Message Send. Please check in Send items");
    recipient = "";
    subject = "";
    message = "";
  }
}

function composeDraft() {
  let recipient = document.querySelector("#recipient").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#msg_body").value;
  let date = new Date();
  let date_time = `${
    date.getHours() + 1 > 12 ? date.getHours() + 1 - 12 : date.getHours()
  }:${date.getMinutes()} ${date.getHours() + 1 > 12 ? "PM" : "AM"}`;
  if (recipient === "") {
    alert("Please enter Recipient to save draft");
  } else {
    drafts.push({
      id: 5,
      to: {
        name: "david",
        mail: recipient,
      },
      subject: subject,
      from: {
        name: "Tharun Kumar V",
        mail: "tharunece95@gmail.com",
      },
      date: date_time,
      message,
    });
    alert("Message saved as draft. Please check in Drafts");
    recipient = "";
    subject = "";
    message = "";
  }
}

function createTag(ele, ele_class) {
  let element = document.createElement(ele);
  element.setAttribute("class", ele_class);
  return element;
}

function truncate(str) {
  if (str.length > 60) return str.substr(0, 60) + "...";
  else return str;
}
