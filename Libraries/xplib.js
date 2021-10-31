/*
- XPLib is an Open Source component of Virgo Bot Engine
// this code won't work in your bot, it's been made to be a Virgo library
!! NOT MANTAINED ANYMORE !!
*/
const db = require("quick.db");
exports.GetXP = function(id) {
    if (!id || id == undefined || id == null) return console.log("Error - XPLib - Invalid ID provided");
    let xp = db.get("xp_"+id) || 0;
    if (xp == 0) db.set("xp_"+id, 0);
    return xp;
}
exports.SetXP = function(id, int) {
    if (!id || id == undefined || id == null) return console.log("Error - XPLib - Invalid ID provided");
    if (isNaN(parseInt(int))) return console.log("Error - XPLib - Invalid SetXP provided")
    return db.set("xp_"+id, int);
}
exports.GetLevel = function(id) {
    if (!id || id == undefined || id == null) return console.log("Error - XPLib - Invalid ID provided");
    let lvl = db.get("level_"+id) || 0;
    if (lvl == 0) db.set("level"+id, 0);
    return lvl;
}
exports.AddXP = function(id, xp) {
    if (!id || id == undefined || id == null) return console.log("Error - XPLib - Invalid ID provided");
    return db.add("xp_"+id, xp);
}
exports.Next = function(id) {
    if (!id || id == undefined || id == null) return console.log("Error - XPLib - Invalid ID provided");
    let next = db.get("inttoreach_"+id);
    return next;
}