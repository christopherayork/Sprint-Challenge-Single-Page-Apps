import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
  let [content, setContent] = useState(null);

  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/location/')
        .then(res => {
          setContent(res.data);
        });
  }, []); // no dependencies needed

  if(!content) return <div>Loading Teleporters...</div>

  return(
      <section className='location-list grid-view'>
        {content.results.map(l => <LocationCard key={l.name} location={l} />)}
      </section>
  );
}
