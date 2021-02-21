# Virgo
Samples/Examples and Informations about Virgo Discord Bot Engine.

## Links

- [Developers Website](https://uncoded.xyz)
- [Virgo Website](https://virgo.uncoded.xyz)
- [Virgo Hosting Panel](https://host.uncoded.xyz)
- [Virgo Discord Server](https://discord.gg/XZwseczDDy)

## Informations

You have **Virgo**, but you **don't know** how to use it?
No problem! Just check out the <a href="https://github.com/Uncoded-xyz/Virgo/blob/main/README.md#official-guide-step-by-step" target="blank" >Official Guide!</a>.

Found a **bug**, or you want to **suggest** a **feature**?
Feel free to write in the **issues** section of this repository.

---

# Official Guide (step by step)
### Getting started
**Step one:**\
 Create a new [Discord application](https://discord.com/developers/applications).\
 <img src="https://cdn.discordapp.com/attachments/732173712400318464/812637588036780032/unknown.png">
 
 **Step two:**\
After creating the application, go to "Bot" section and click "Add Bot" and then click"yes do it!" for the confirmation.\
<img src="https://cdn.discordapp.com/attachments/732173712400318464/812641062585106442/unknown.png">

 **Step three:**\
 **IMPORTANT!** Make sure to have this 2 flags enabled, or your Bot won't work!!
 <img src="https://virgo.uncoded.xyz/docs/assets/please.png" style="width: 50px;">
 
### Virgo configuration
**Step one:**\
Go to the [control panel of virgo](https://host.uncoded.xyz) and login here with your credentials.\
**Step two:**\
Click on the server displayed in the center of the page With a name like this: {yourUsername} | virgo premium, then go to the file manager and open a file called config.json and change the following variables:
* token *(line 5)* -> Your Bot's Token
* permission_level *(line 7)* -> If you have a bot which moderates too, you must set this value to 2 or 3
* prefix *(line 8)* -> Your Bot's prefix
* presence *(line 10)* -> Can be online, idle, dnd, invisible
* cmd_dir *(line 11)* -> The name of the directory where your commands are stored (./Commands is default dir)
* status *(line 12)* -> Your Bot's activity
* logchannelid *(line 14)* -> The ID of the channel where the Bot will send the eventual logs, if there | Adjective field.
* events *(from line 16)* -> Events have their own section
* commands list *(line 99/100)* -> A list (Array) of your Commands. ***You MUST insert your command name here before running the bot or it will be ignored***


How the first part (from token to log-channel) of the config.json should look like:
<img src="https://cdn.discordapp.com/attachments/732173712400318464/812967499662491679/unknown.png">

How the "events" part of the confing.json should look like:\
<img src="https://cdn.discordapp.com/attachments/732173712400318464/812678881369784320/unknown.png">\
(**Remember:** In the "script" field you should to add the script using [virgoscript](https://virgo.uncoded.xyz/docs/#/?id=virgoscript))

**Commands**\
The names of virgo commands must end with .virgo (Ex: ping.virgo).

Go to the command directory (*Usually is ./Command dir but you can change it on the config*), click on "New file",\
<img src="https://cdn.discordapp.com/attachments/732173712400318464/812738002476335134/unknown.png">

Write in the new file the script of the command (Using virgoScript), if you don't know how to make commands look at the [Documentation](https://virgo.uncoded.xyz/docs/#/?id=file-structure).

Save the command as CommandName.virgo and then go to the config, at line 10, to the list (*Array*) of enabled command and add the name of the command (without the .virgo extension).

## Examples

- **Config.json Example**
  - [Source Code](https://github.com/Uncoded-xyz/Virgo/blob/main/config.example.json)


- **Ping**
  - [Source Code](https://github.com/Uncoded-xyz/Virgo/blob/main/Commands/ping.json)

- **Say**
  - [Source Code](https://github.com/Uncoded-xyz/Virgo/blob/main/Commands/say.json)

---

## Powered By


<table>
  <tr>
    <td align="center"><a href="https://github.com/LukeIsHereToDevelop"><img src="https://avatars1.githubusercontent.com/u/43251906?s=460&amp;u=fb5301bcf802af820f5c1274fa870e0cee257366&amp;v=4" width="150px;" alt=""/><br /><sub><b>LukeIsHereToDevelop</b></sub></a><br /><a title="Developer">Developer</a></td>
    <td align="center"><a href="https://github.com"><img src="https://cdn.discordapp.com/avatars/397770061705773059/0abdebcdf44c2bff145783c6fcaad3b9.png" width="150px;" alt=""/><br /><sub><b>NicoDev</b></sub></a><br /><a title="Developer">Developer</a></td>
    <td align="center"><a href="https://github.com"><img src="https://cdn.discordapp.com/avatars/527592495807332352/a7786edc3a7abab3bbda88f23d78cd0d.png" width="150px;" alt=""/><br /><sub><b>Sunrisees</b></sub></a><br /><a title="Developer">Developer</a></td>
    </tr>   
</table>


