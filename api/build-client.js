import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server
    return axios.create({
      baseURL: 'http://www.ticket-app-sz.website',
      headers: req.headers
      //  {
      //   Host: 'www.ticket-app-sz.website',
      //   //cookie: req.headers.cookie
      //   }
    }
    );
  } else {
    // We must be on the browser
    return axios.create({
      baseURL: 'http://www.ticket-app-sz.website',
    });
  }

};