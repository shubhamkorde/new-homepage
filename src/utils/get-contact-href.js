// @flow strict
const getContactHref = (name: string, contact: string) => {
  let href;

  switch (name) {
    case 'twitter':
      href = `https://twitter.com/ss21_korde`;
      break;
    case 'github':
      href = `https://github.com/shubhamkorde`;
      break;
    case 'vkontakte':
      href = `https://vk.com/${contact}`;
      break;
    case 'telegram':
      href = `https://t.me/${contact}`;
      break;
    case 'email':
      href = `mailto:${contact}`;
      break;
    case 'linkedin':
      href = `https://www.linkedin.com/in/shubham-korde/`;
      break;
    case 'instagram':
      href = `https://www.instagram.com/_skorde_/`;
      break;
    case 'line':
      href = `line://ti/p/${contact}`;
      break;
    case 'facebook':
      href = `https://www.facebook.com/shubham.korde.21`;
      break;
    case 'gitlab':
      href = `https://www.gitlab.com/${contact}`;
      break;
    case 'weibo':
      href = `https://www.weibo.com/${contact}`;
      break;
    case 'codepen':
      href = `https://www.codepen.io/${contact}`;
      break;
    case 'youtube':
      href = `https://www.youtube.com/channel/${contact}`;
      break;
    case 'soundcloud':
      href = `https://soundcloud.com/${contact}`;
      break;
    case 'medium':
      href = `https://medium.com/${contact}`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
