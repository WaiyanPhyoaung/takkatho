---
title: ရိုးရှင်းသော Chat Application - Server (Code Example)
description: ရိုးရှင်းသော Chat Application (Code Example)
---

## Node.js + Socket.IO

အရင် သင်ခန်းစာမှာ Client ဘက်က Browser Built-in WebSocket API ကို သုံးပြီး Server ဘက်ကတော့ သင့်စိတ်ကြိုက် Language နဲ့ Library သုံးနိုင်တယ်ဆိုတာ သိခဲ့ရပါပြီ။ အခု Server ဘက်အတွက် လူကြိုက်များတဲ့ Node.js မှာ Socket.IO Library ကို သုံးပြီး ဘယ်လို တည်ဆောက်မလဲ ကြည့်ရအောင်။

Socket.IO ဆိုတာ ဘာလဲ?

Socket.IO ဟာ Real-time, Bidirectional Communication အတွက် JavaScript Library တစ်ခု ဖြစ်ပါတယ်။ သူဟာ WebSockets ကို အဓိက သုံးပါတယ်။ ဒါပေမယ့် WebSocket Connection မရတဲ့အခါ Long Polling လို တခြား Transport တွေနဲ့ အလိုအလျောက် ပြန်ချိတ်ဆက်ပေးတဲ့ (Fallback) Feature ပါဝင်ပါတယ်။ ဒါ့အပြင် Client အများကြီးဆီ Message တစ်ပြိုင်တည်းပို့တဲ့ Broadcasting, အချို့ Clients အုပ်စုဆီပဲပို့တဲ့ Rooms, Connection ပြတ်သွားရင် အလိုအလျောက် ပြန်ချိတ်ပေးတဲ့ Auto-reconnection စတဲ့ Feature တွေလည်း ပါဝင်ပါတယ်။

ပုံ စိတ်ကူး (အသစ်) ၃: Socket.IO က WebSocket, Long Polling စတဲ့ မတူညီတဲ့ Transport တွေကို အပေါ်ကနေ ဖုံးအုပ်ထားပြီး Client နဲ့ Server အတွက် တူညီတဲ့ API တစ်ခု ပေးထားပုံ Diagram (Abstraction Layer ကို ပြသရန်)။
Node.js Project စတင်ခြင်းနှင့် Socket.IO ထည့်သွင်းခြင်း

Socket.IO Server တည်ဆောက်ဖို့အတွက် Node.js ကို သင့်ကွန်ပျူတာမှာ install လုပ်ထားဖို့ လိုပါတယ်။

သင့် Project အတွက် Folder တစ်ခု ဖန်တီးပါ။ (ဥပမာ - node_chat_app)
Terminal သို့မဟုတ် Command Prompt ကို အသုံးပြုပြီး အဲဒီ Folder ထဲ ဝင်ပါ။
အောက်ပါ Command ကို ရိုက်ပြီး Node.js Project ကို စတင်ပါ။ (Default Setting တွေအတွက် Enter နှိပ်သွားနိုင်ပါတယ်)

```
npm init -y
```

Socket.IO Library ကို install လုပ်ပါ။

```
npm install socket.io
```

Server Code (index.js):

သင့် Project Folder ထဲမှာ index.js လို့ File တစ်ခု ဖန်တီးပြီး အောက်ပါ Code များကို ထည့်သွင်းပါ။

```
// လိုအပ်သော Module များ ထည့်သွင်းခြင်း
const http = require('http'); // Socket.IO က HTTP Server လိုအပ်သည်
const socketIo = require('socket.io');

// HTTP Server ကို ဖန်တီးခြင်း (Express မပါတော့ပါ)
const server = http.createServer();

// Socket.IO ကို HTTP Server နှင့် ချိတ်ဆက်ခြင်း
const io = socketIo(server, {
  // Socket.IO Client Library ကို တခြား Origin မှ လာသော Request များအတွက် ခွင့်ပြုရန်
  // Client File ကို Local ဒါမှမဟုတ် တခြား Domain ကနေ ဖွင့်ရင် လိုအပ်နိုင်သည်
  cors: {
    origin: "*", // မည်သည့် Origin မှ လာသည်ဖြစ်စေ ခွင့်ပြုရန် (Development အတွက်)
    methods: ["GET", "POST"]
  }
});

// Socket.IO Connection အသစ်တစ်ခု ရရှိသောအခါ လုပ်ဆောင်ရန်
io.on('connection', (socket) => {
  console.log('အသုံးပြုသူအသစ် ချိတ်ဆက်လာပါပြီ!');

  // Client မှ 'chat message' event ပို့လာသောအခါ
  socket.on('chat message', (msg) => {
    console.log('မက်ဆေ့ချ် လက်ခံရရှိ:', msg);
    // ရရှိသော မက်ဆေ့ချ်ကို ချိတ်ဆက်ထားသော Client အားလုံးထံ ပြန်လည်ပို့ခြင်း (Broadcast)
    io.emit('chat message', msg); // 'chat message' event အမည်ဖြင့် data (msg) ကို ပို့သည်
  });

  // Client ချိတ်ဆက်မှု ပြတ်တောက်သွားသောအခါ
  socket.on('disconnect', () => {
    console.log('အသုံးပြုသူ ချိတ်ဆက်မှု ပြတ်တောက်သွားပါပြီ။');
  });
});

// Server ကို သတ်မှတ်ထားသော Port တွင် စတင်နားထောင်ခြင်း
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Socket.IO Chat Server ကို http://localhost:${PORT} တွင် နားထောင်နေပါပြီ။`);
});
```

Code ရှင်းလင်းချက်
const http = require('http'); const server = http.createServer(); - HTML File Serve လုပ်ဖို့ Express ကို မသုံးတော့ဘဲ ရိုးရှင်းတဲ့ Node.js HTTP Server တစ်ခုပဲ သုံးပါတယ်။ Socket.IO ဟာ HTTP Server တစ်ခု လိုအပ်ပါတယ်။
cors: { origin: "\*", ... } - Client File ကို Server Domain နဲ့ Port က မတူတဲ့နေရာ (ဥပမာ - Local File file:///... ဒါမှမဟုတ် တခြား Domain) ကနေ ဖွင့်တဲ့အခါ CORS (Cross-Origin Resource Sharing) ပြဿနာ မရှိအောင် ခွင့်ပြုဖို့ သတ်မှတ်တာပါ။ Development မှာ "\_" လို့ ပေးထားနိုင်ပေမယ့် Production မှာတော့ သင့် Client File တွေ ရှိတဲ့ Origin Address ကိုပဲ သတ်မှတ်သင့်ပါတယ်။

ဒီ Setup ကို Run ဖို့:

Node.js နဲ့ Socket.IO ကို အရင်ဆုံး Install လုပ်ပါ။
အပေါ်က Client Code ကို chat_client.html အဖြစ် သင်ကြိုက်တဲ့ Folder ထဲမှာ Save လုပ်ပါ။
Terminal/Command Prompt ကနေ node index.js လို့ ရိုက်ပြီး Server ကို စတင်ပါ။
Browser တစ်ခုခုကို ဖွင့်ပြီး Save ထားတဲ့ chat_client_socketio.html File ကို File > Open (သို့မဟုတ် File Path ကို Browser မှာ တိုက်ရိုက် ရိုက်ထည့်ခြင်း or Live Server) ဖြင့် ဖွင့်ပါ။
Browser Tabs အများအပြား ဒါမှမဟုတ် တခြား ကွန်ပျူတာတွေကနေလည်း ဒီ File ကို ဖွင့်ပြီး Local Run နေတဲ့ Server နဲ့ ချိတ်ဆက်ပြီး Chat လို့ ရပါတယ်။
