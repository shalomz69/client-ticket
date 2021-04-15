import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server
    return axios.create({
      baseURL: 'https://www.ticket-app-sz.website',
      headers: req.headers
    });
  } else {
    // if (window.location.protocol.indexOf('https') == 0){
    //   var el = document.createElement('meta')
    //   el.setAttribute('http-equiv', 'Content-Security-Policy')
    //   el.setAttribute('content', 'upgrade-insecure-requests')
    //   document.head.append(el)
    // }
    // We must be on the browser
    return axios.create({
      baseURL: 'https://www.ticket-app-sz.website',
      //headers: 
    });
  }

};