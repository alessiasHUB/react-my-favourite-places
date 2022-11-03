interface PlaceLayoutProps {
    title: string;
    location: {place:string; country:string};
    link: string;
    imageURL: string;
    body: string;
  }
  
  function PlaceLayout(props: PlaceLayoutProps): JSX.Element {
    const imgWidth = 300
    return (
      <section>
        <p>
            <img src={props.imageURL} width={imgWidth} alt=""/>
        </p>
        <h2>{props.title}</h2>
        <p>
          <i>Location: {props.location.place}, {props.location.country} </i>
          <i>(<a href={props.link}>map-link</a>)</i>
        </p>
        <p>{props.body}</p>
      </section>
    );
  }
  
  export default PlaceLayout;