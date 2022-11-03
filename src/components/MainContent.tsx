import PlaceLayout from "./PlaceLayout";

function MainContent(): JSX.Element {
  return (
    <main>
      <PlaceLayout
        imageURL={""}
        title={"The most stunning sunsets"}
        location={{place:"Canguu Beach", country:"Bali"}}
        link={"#"}
        body={"body"}
      />
      <PlaceLayout
        imageURL={""}
        title={"Italian quiet beach-living"}
        location={{place:"Francavilla al Mare", country:"Italy"}}
        link={"#"}
        body={"body"}
      />
      <PlaceLayout
        imageURL={""}
        title={"Like traveling in time"}
        location={{place:"Cusco", country:"Peru"}}
        link={"#"}
        body={"body"}
      />
      <PlaceLayout
        imageURL={""}
        title={"Cliffs by the ocean"}
        location={{place:"Cornwall", country:"England"}}
        link={"#"}
        body={"body"}
      />
      </main>
  );
}

export default MainContent;