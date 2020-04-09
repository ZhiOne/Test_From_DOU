import React from "react";
import "./styles.css";

const data = {
  title:"Zhu film",
  rate: 8.8,
  img: "https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/37865107-1142009.jpg",
  overwiev:"Good film"
}

const Image = ({img , alt}) => {
  return (
     <img src={img} alt={alt}/> 
  )
}

const MovieItem = ({data}) => {
  const { title , rate , img , overwiev} = data;
  return (
    <div>
       <Image img={img} alt={overwiev}/>
      <p>{title}</p>
      <p>{rate}</p>
    </div>
  )
}


const App = () => {
  return (
    <div className="App">
      <MovieItem data={data} />
    </div>
  );
}

export default App;
