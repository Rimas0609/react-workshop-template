

export default function Hero({ data }) {
  return(
    <div className="hero" id="home">
      <div className="avatarWrap">
        
      <img className="photo" src="/rimas.jpg" alt="Rimas profile"/>
      </div>

     <h1 className="heroName">{data.name}</h1>

     <div className="heroRole">{data.role}</div>
     <div className="heroEmail">{data.email}</div>
     <p className="heroSummary">{data.summary}</p>
    </div>
  );
}
