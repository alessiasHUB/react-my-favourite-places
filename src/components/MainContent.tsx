import React from "react";

function MainContent(): JSX.Element {
  return (
    <main>
      <PlaceList />
    </main>
  );
}

// making reusable place elements
const imgWidth = 400;

interface Place {
  id: number;
  title: string;
  location: { place: string; country: string };
  link: string;
  imageURL: string;
  body: string;
}

const places: Place[] = [
  {
    id: 1,
    imageURL:
      "//images.unsplash.com/photo-1655779282295-a573301955cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    title: "The most stunning sunsets",
    location: { place: "Canggu", country: "Bali" },
    link: "https://www.google.com/maps/place/Canggu,+Kuta+Utara,+Badung+Regency,+Bali,+Indonesia/@-8.648011,115.1266973,12.27z/data=!4m5!3m4!1s0x2dd23861f4589665:0x5030bfbca82fd30!8m2!3d-8.6478175!4d115.1385192",
    body: "Gorgeous place to surf and live the ultimate beach life in Asia",
  },
  {
    id: 2,
    imageURL:
      "https://images.unsplash.com/photo-1666535904243-7d4b4d21d893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
    title: "Island paradise in Europe",
    location: { place: "Corsica", country: "France" },
    link: "https://www.google.com/maps/place/Corsica/@42.1824145,7.9305824,8z/data=!3m1!4b1!4m5!3m4!1s0x12da00d304e8c551:0xd96e92ea01e96103!8m2!3d42.0396042!4d9.0128926",
    body: "Amazing place to go climbing, eat french food an enjoy gorgeous beaches",
  },
  {
    id: 3,
    imageURL:
      "https://images.unsplash.com/photo-1609350643153-63541d01aec9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    title: "Like traveling in time",
    location: { place: "Cusco", country: "Peru" },
    link: "https://www.google.com/maps/place/Cusco,+Peru/@-13.5300096,-72.0092896,12z/data=!3m1!4b1!4m5!3m4!1s0x916dd5d826598431:0x2aa996cc2318315d!8m2!3d-13.53195!4d-71.9674626",
    body: "Like stepping into a different time in the middle of the mountains",
  },
  {
    id: 4,
    imageURL:
      "https://images.unsplash.com/photo-1623849778382-40d4497db516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    title: "Cliffs by the ocean",
    location: { place: "Cornwall", country: "England" },
    link: "https://www.google.com/maps/place/Cornwall,+UK/@50.4419964,-5.5164344,9z/data=!3m1!4b1!4m5!3m4!1s0x486ab7f0bf270ec9:0x6e423c85d94b4571!8m2!3d50.2660471!4d-5.0527125",
    body: "Beautiful place to truly be away from it all and wander by the ocean",
  },
];

interface PlaceMapItemProps {
  place: Place;
}

const PlaceMapItem = (props: PlaceMapItemProps) => {
  return (
    <section>
      <p>
        <img src={props.place.imageURL} width={imgWidth} alt="" />
      </p>
      <h2>{props.place.title}</h2>
      <p>
        <i>
          Location: {props.place.location.place}, {props.place.location.country}{" "}
          {}
        </i>
        <i>
          (<a href={props.place.link}>map-link</a>)
        </i>
      </p>
      <p>{props.place.body}</p>
    </section>
  );
};

const PlaceList = () => {
  return (
    <ul>
      {places.map((place) => {
        return <PlaceMapItem place={place} key={place.id} />;
      })}
    </ul>
  );
};

export default MainContent;
