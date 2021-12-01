import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const [youtubeUrl, setYoutuveUrl] = useState("");
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setYoutuveUrl(`https://www.youtube.com/embed/${json.data.movie.yt_trailer_code}?autoplay=1&origin=http://example.com`);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <iframe id="ytplayer" type="text/html" width="640" height="360"
  src={youtubeUrl}
  frameborder="0"></iframe>
  );
}

export default Detail;
