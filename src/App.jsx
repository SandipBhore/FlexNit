import "./App.css";
import Row from "./Row";
import request from "./request";

function App() {
  return (
    <div>
      <p>netflix clone</p>
      <Row
        title="NetFlix Originals"
        fetchUrl={request.fetchNetFlixOriginals}
      ></Row>
      <Row title="Trending" fetchUrl={request.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
