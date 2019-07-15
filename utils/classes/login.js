this.module.exports = class Login{
  constructor({
    id,
    fullName,
    mail,
    birthday,
    history,
    interest,
    perfilImg,
    frontPageImg,
    frontPageQuote,
    wallet,
    posts,
    friends,
    friendReq,
    gifts,
    comments,
  }){
    this.id = id;
    this.fullName = fullName;
    this.mail = mail;
    this.birthday = birthday;
    this.history = history;
    this.interest = interest;
    this.perfilImg = perfilImg;
    this.frontPageImg = frontPageImg;
    this.frontPageQuote = frontPageQuote;
    this.wallet = wallet;
    this.posts = posts;
    this.friends = friends;
    this.friendReq = friendReq;
    this.gifts = gifts;
    this.comments = comments;
  }
};