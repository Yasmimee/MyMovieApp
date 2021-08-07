import MovieCard from "./MovieCard";

function List({ Movies, search, rating }) {
  return (
    <div className="background">
      <div className="cards">
        {Movies.filter(
          (el) =>
            el.name.toUpperCase().includes(search.toUpperCase()) &&
            el.rate >= rating
        ).map((el) => (
          <MovieCard el={el} />
        ))}
      </div>
    </div>
  );
}
export default List;