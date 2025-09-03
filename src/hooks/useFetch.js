import { useEffect, useState } from "react";

export default function useFetch({url}) {
  const [data,setData] = useState([]);

 useEffect(() => {
    async function fetchMovie() {
    const res = await fetch(url);
    const json = await res.json();
    setData(json.Search);
  }
    fetchMovie();
  }, [url]);

return {data};



}
