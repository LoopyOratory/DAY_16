
const AnimeCard = ({anime}) => {
  return (
    <>
      <img src={anime.images?.jpg?.image_url} />
      {/* <p>{anime.title}</p> */}
    </>
  );
}

export default AnimeCard