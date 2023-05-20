import md5 from "md5";

const gravatar = email =>{
    const urlBase = 'https://www.gravatar.com/avatar/';
    const formatteEmail = email.trim().toLowerCase();
    const hash = md5(formatteEmail,{ encoding: "binary"});
    return `${urlBase}${hash}`;

}

export default gravatar;