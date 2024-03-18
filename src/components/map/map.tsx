import {JSX, PropsWithChildren, useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map.tsx';
import 'leaflet/dist/leaflet.css';
import {OfferType} from '../../types/offer.ts';
import {LocationType} from '../../types/location.ts';
import {Icon, layerGroup, Marker} from 'leaflet';

type TMap = PropsWithChildren<{
  activeOfferId: number;
  cityLocation: LocationType;
  offers: OfferType[];
}>

const defaultCustomIcon = new Icon({
  iconUrl: process.env.REACT_APP_URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: process.env.REACT_APP_URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map({activeOfferId, offers, cityLocation}: TMap): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeOfferId !== 0 && offer.id === activeOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [mapRef, activeOfferId, offers, map]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}
