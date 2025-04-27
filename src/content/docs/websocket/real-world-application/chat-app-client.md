---
title: ရိုးရှင်းသော Chat Application - Client
description: ရိုးရှင်းသော Chat Application (Socket.IO Client)
---

**Client နှင့် Server နှစ်ခုလုံးအတွက် Socket.IO Library ကို အသုံးပြုပါမည်။**

### Socket.IO ဆိုတာ ဘာလဲ?

Socket.IO ဟာ Real-time, Bidirectional Communication အတွက် JavaScript Library တစ်ခု ဖြစ်ပါတယ်။ သူဟာ WebSockets ကို အဓိက သုံးပါတယ်။ ဒါပေမယ့် WebSocket Connection မရတဲ့အခါ Long Polling လို တခြား Transport တွေနဲ့ အလိုအလျောက် ပြန်ချိတ်ဆက်ပေးတဲ့ (Fallback) Feature ပါဝင်ပါတယ်။ ဒါ့အပြင် Client အများကြီးဆီ Message တစ်ပြိုင်တည်းပို့တဲ့ Broadcasting, အချို့ Clients အုပ်စုဆီပဲပို့တဲ့ Rooms, Connection ပြတ်သွားရင် အလိုအလျောက် ပြန်ချိတ်ပေးတဲ့ Auto-reconnection စတဲ့ Feature တွေလည်း ပါဝင်ပါတယ်။

### ရည်ရွယ်ချက် - ရိုးရှင်းသော Chat App

Client နဲ့ Server ဘက်ခြမ်း ဘယ်လိုအလုပ်လုပ်လဲဆိုတာ ပိုမြင်သာအောင် ရိုးရှင်းတဲ့ Chat Application တစ်ခု တည်ဆောက်ကြည့်ရအောင်။ ဒီ Chat App မှာ အသုံးပြုသူတွေ Username နဲ့ Message တွေ ရိုက်ထည့်ပြီး ပို့နိုင်ပါတယ်။ Server က Message တွေကို လက်ခံရရှိပြီး ချိတ်ဆက်ထားတဲ့ တခြား Client တွေဆီ ပြန်ပို့ပေးပါမယ်။

ဤသင်ခန်းစာတွင် Socket.IO Client Library ကို Public CDN (Content Delivery Network) မှ တိုက်ရိုက်ရယူပြီး Socket.IO Server နှင့် မည်သို့ ချိတ်ဆက်ရမည်ကို လေ့လာပါမည်။ Client File ကို Server နှင့် သီးခြားစီထားရှိပါမည်။

ပုံ စိတ်ကူး (အသစ်) ၄: Client (Browser Icon) မှ HTML File နှင့် JavaScript Code ကို Local သို့မဟုတ် တခြား Web Server မှ ရယူပုံ၊ Socket.IO Client Library ကို CDN မှ ရယူပုံ၊ ထို့နောက် Socket.IO Server နှင့် ချိတ်ဆက်ပုံ Diagram။

### Client Setup

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Socket.IO Chat App (CDN Client)</title>
    <style>
      #chatbox {
        border: 1px solid #ccc;
        height: 300px;
        overflow-y: scroll;
        padding: 10px;
        margin-bottom: 10px;
      }
      #messageInput {
        width: 70%;
        margin-right: 5px;
      }
      #usernameInput {
        margin-right: 5px;
      }
    </style>
  </head>
  <body>
    <h1>Socket.IO Chat App (CDN Client)</h1>
    <div id="chatbox"></div>
    <input type="text" id="usernameInput" placeholder="Your name" />
    <input type="text" id="messageInput" placeholder="Your message" />
    <button onclick="sendMessage()">Send</button>

    <script src="https://cdn.socket.io/4.7.5/socket.io.min.js"></script>

    <script>
      //  http://localhost:3000 တွင် Run နေသည်ဟု ယူဆထားသည်။
      const socket = io("http://localhost:3000"); // Socket.IO Client Object ကို ရယူခြင်း

      const chatbox = document.getElementById("chatbox");
      const usernameInput = document.getElementById("usernameInput");
      const messageInput = document.getElementById("messageInput");

      // Server နှင့် ချိတ်ဆက်ပြီးသောအခါ
      socket.on("connect", () => {
        console.log("Connected to Socket.IO Server! ID:", socket.id);
        const statusElement = document.createElement("p");
        statusElement.textContent = "Connected to Socket.IO Server";
        chatbox.appendChild(statusElement);
        chatbox.scrollTop = chatbox.scrollHeight;
      });

      // Server မှ 'chat message' event ဖြင့် မက်ဆေ့ချ် ရရှိသောအခါ
      socket.on("chat message", (msg) => {
        console.log("Received message from Server", msg);
        const messageElement = document.createElement("p");
        messageElement.textContent = msg; // ရရှိသော data (msg) သည် formatted message string ဖြစ်သည်
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight; // အောက်ဆုံးသို့ Scroll ချရန်
      });

      // Connection Error ဖြစ်ပေါ်သောအခါ
      socket.on("connect_error", (err) => {
        console.error("Socket.IO Connection Error:", err);
        const statusElement = document.createElement("p");
        statusElement.textContent = `--- Connection Error: ${err.message} ---`;
        statusElement.style.color = "red";
        chatbox.appendChild(statusElement);
        chatbox.scrollTop = chatbox.scrollHeight;
      });

      // Connection ပြတ်တောက်သွားသောအခါ
      socket.on("disconnect", (reason) => {
        console.log("Socket.IO Connection disconnected", reason);
        const statusElement = document.createElement("p");
        statusElement.textContent = `--- Connection disconnected: ${reason} ---`;
        statusElement.style.color = "orange";
        chatbox.appendChild(statusElement);
        chatbox.scrollTop = chatbox.scrollHeight;
      });

      // မက်ဆေ့ချ် ပို့ရန် Function (Button Click လုပ်လျှင် အလုပ်လုပ်မည်)
      function sendMessage() {
        // socket connection အခြေအနေကို စစ်ဆေးရန် (Optional ဒါပေမယ့် ကောင်းမွန်သော အလေ့အကျင့်)
        if (!socket.connected) {
          console.warn("Socket.IO connection is closed.");
          const statusElement = document.createElement("p");
          statusElement.textContent =
            "--- Can't send message!, not connected with Server---";
          statusElement.style.color = "red";
          chatbox.appendChild(statusElement);
          chatbox.scrollTop = chatbox.scrollHeight;
          return;
        }

        const username = usernameInput.value || "Mg Mg";
        const messageText = messageInput.value;
        if (messageText.trim() === "") return;

        const message = {
          username: username,
          text: messageText,
        };

        // Socket.IO Server သို့ 'chat message' event အမည်ဖြင့် Message Object ကို ပို့ခြင်း
        socket.emit("chat message", message);

        messageInput.value = "";
      }

      // Enter Key နှိပ်လျှင် Message ပို့ရန် (Optional)
      messageInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          sendMessage();
        }
      });
    </script>
  </body>
</html>
```

### Code ရှင်းလင်းချက် (Client):

#### Socket.IO Client Library ကို CDN မှ ရယူခြင်း:

```
<script src="https://cdn.socket.io/4.7.5/socket.io.min.js"></script>
```

ဒီ Line ကနေ Browser ဟာ https://cdn.socket.io/4.7.5/socket.io.min.js ဆိုတဲ့ URL ကနေ Socket.IO Client Library ရဲ့ Compressed JavaScript File ကို Download လုပ်ပြီး Run ပါလိမ့်မယ်။ ဒီ URL ဟာ Public CDN တစ်ခုပေါ်က File ဖြစ်တာကြောင့် Internet ချိတ်ဆက်မှု ရှိတာနဲ့ File ကို ရယူနိုင်ပါတယ်။

#### Server နှင့် ချိတ်ဆက်ခြင်း:

Socket.IO Client Library ကို ဘယ်နေရာကနေပဲ Load လုပ်သည်ဖြစ်စေ၊ Server ဘယ် Address နဲ့ Port မှာ Run နေတယ်ဆိုတာကို io() Function ကို ပြောပြဖို့ လိုအပ်ပါတယ်။
