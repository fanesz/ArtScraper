# ArtScraper
Code for discordjs to find an art from scraping ([wall.alphacoders.com](https://wall.alphacoders.com/))

**Command**
- `-art (art name)`

**Feature**

![image](https://user-images.githubusercontent.com/91197642/182112318-1cbc3121-d2aa-4cde-b3f6-83e0acd95208.png)

- Scraping every art result with max 30 images
- ◀️, ▶️, 🔀 reaction to display other result

![image](https://user-images.githubusercontent.com/91197642/182110985-526c0400-6d56-4713-bb6a-454012967699.png)

- Command cooldown to avoid spam

![image](https://user-images.githubusercontent.com/91197642/182111093-9bfc70e8-5a89-4ed0-971b-0426e010a1fe.png)

- Costomize your own thing
    - `token` for your bot token (how to get it? go youtube)
    - `prefix` default is `-`, you can like `!` so the command will be `!art`
    - `reactTime` time in second until reaction stop working (to avoid overload bot)
    - `CommandCooldown` time in second, to avoid spammer
    - `cooldownMessage` messages to send when the command still in cooldown
    - `EmbedColor` color of embed ([click here to color generator code](https://www.rapidtables.com/web/color/RGB_Color.html))

**How to host :**
1. Install nodejs from (https://nodejs.org/en/download/)
2. Create a folder
3. Open CMD and cd to your folder (ex. : cd C:\Users\Vanez\Desktop\mybot
4. Type :
      - npm init -y
      - npm i discord.js@13.6.0 axios cheerio
      - git clone https://github.com/Vanezkun/ArtScraper
5. At config.json, change token into your bot token
6. Run the bot by open (startbot.bat) file
