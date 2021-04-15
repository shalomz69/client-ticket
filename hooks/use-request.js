import axios from 'axios';
import { useState } from 'react';


export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const baseUrl = 'https://www.ticket-app-sz.website'
      const response = await axios[method](baseUrl + url, { withCredentials:true, ...body, ...props });
      
      if (onSuccess) {
        //console.log(response);
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops....</h4>
          <ul className="my-0">
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};
