export default function Entry(props) {
  return (
    //     <article className="journal-entry">
    //       <div className="main-image-container">
    //         <img className="main-image" src="../japan.jpeg" alt="japan image" />
    //       </div>
    //       <div>
    //         <img src="../marker.png" alt="marker icon" />
    //         <span>Japan</span>
    //         <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Map</a>
    //         <h2>Mount Fuji</h2>
    //         <p>12 Jan, 2021 - 24 Jan, 2021</p>
    //         <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
    //       </div>
    //     </article>
    //   );
    // }
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="info-container">
        <img className="marker" src="../src/marker.png" alt="map marker icon" />
        <span className="country">{props.country}</span>
        <a href={props.googleMapsLink} target="_blank">
          View on Google Maps
        </a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="trip-dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
}
