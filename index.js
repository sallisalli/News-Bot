const {
  default: makeWASocket,
  BufferJSON,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  jidNormalizedUser,
  delay
} = require("@adiwajshing/baileys");
const fs = require('fs');
const chalk = require("chalk");
const axios = require('axios');

async function qr() {
  const { version, isLatest } = await fetchLatestBaileysVersion();
  const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys')

  const conn = makeWASocket({
    printQRInTerminal: true,
    browser: ['BOT', 'Web', 'v2'],
    auth: state,
    version
  });


console.log('ℹ️  Connecting to Whatsapp... Please wait.')
  await conn.ev.on('creds.update', saveCreds);

  conn.ev.on('connection.update', async (update) => {

    let _a, _b;
    let connection = update.connection, lastDisconnect = update.lastDisconnect;

    if (connection == 'connecting') {
      console.log(' Connecting...');
    };

    if (connection == 'open') {

      console.log('Successfully connected');
	let express = require('express');
     let router = express.Router();	   
     router.get('/', (req, res) => {
    const jsond = { "status" : "ok"}	     
    res.json(jsond)
})
	     router.get('/api', async (req, res) => {
    
    

      // Initialize the `sentArticles` set.
      const sentArticles = new Set();
      const fuck = process.env['nb_mods'];
      // Read the old news from the JSON file.
      const oldNews = Array.from(JSON.parse(fs.readFileSync('news.json')));

      // Add the old news to the `sentArticles` set.
      for (const article of oldNews) {
        sentArticles.add(article.title);
      }

      // Read the new news from the API.
      const response = await axios.get(fuck);
      const newsData = response.data;

      // Convert the news data to an array.
      const newsArticles = Object.values(newsData);

      // Loop through the new news articles and send them if they have not already been sent.
      for (const article of newsArticles) {

        if (!sentArticles.has(article.title)) {
          // Send the article.
          const imgurl = article.image;
        if (imgurl !== undefined) {
          await conn.sendMessage('120363165330389006@g.us', { image: { url: imgurl }, caption: `*${article.title}*\n${article.description}\n\nꜱᴏᴜʀᴄᴇ-www.adaderana.lk\n\nᴘᴏᴡᴇʀᴅ ʙʏ ɴʙᴍᴏᴅꜱ` });
        } else { await conn.sendMessage('120363165330389006@g.us', { image: { url: 'https://filmhall.eprogrammers.lk/film_hall/image/IMG-20230930-WA0000.jpg' }, caption: `*${article.title}*\n${article.description}\n\\nꜱᴏᴜʀᴄᴇ-www.adaderana.lk\n\nᴘᴏᴡᴇʀᴅ ʙʏ ɴʙᴍᴏᴅꜱ` });
        }

          // Add the article to the set of sent articles.
          sentArticles.add(article.title);
        }
      }

      // Clear the `sentArticles` set after the `for` loop has finished iterating.
      sentArticles.clear();

      // Update the JSON file with the new news.
      fs.writeFileSync('news.json', JSON.stringify(newsArticles));
    
    
  const jsond = { "status" : "ok"}	     
    res.json(jsond)      
    
})
let cors = require('cors')
let secure = require('ssl-express-www')
let PORT = process.env.PORT || 8080 || 5000 || 3000
let app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("assets"))

app.use('/',  router)
app.listen(PORT, () => {
    console.log("Server running on port " + PORT) 
})
   app.use((req, res, next) => {
    setInterval(async() =>{
await axios.get('https://filmhall.sl-technicaltec.repl.co/api?').catch(console.error)
  
}, 300000  )
    
}); 
    }
   
      

    
    if (connection == 'close') {
      if (((_b = (_a = lastDisconnect.error) === null || _a === void 0 ? void 0 : _a.output) === null || _b === void 0 ? void 0 : _b.statusCode) !== DisconnectReason.loggedOut) {
        qr()
      } else {
        console.log("error")
       
        process.exit(0);
      };

    };

  });


};

qr()