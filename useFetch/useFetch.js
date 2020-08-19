import { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {

  const isMounted = useRef(true);
  const [state, setState] = useState({ data: null, loading: true, errors: null })

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, []);

  useEffect(() => {

    setState({ data: null, loading: true, errors: null });

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
          if( isMounted.current ){

            setState({
              data,
              loading: false,
              errors: null
            });
          }
      })
      .catch( () => {
        setState({
          data: null,
          loading: false,
          errors: 'Error loading data.'
        })
      });
  }, [url]);

  return state;
}
