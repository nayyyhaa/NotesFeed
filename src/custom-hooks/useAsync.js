import { useEffect } from "react";
import axios from "axios";

export const useAsync = ({ url, actionType, dispatch, payloadType }) => {
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios(url);
        dispatch({ type: actionType, payload: data[payloadType] });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
};
