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

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
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

  useEffect(() => {
    if (mapRef.current && map) {
      map.setZoom(cityLocation.zoom);
      map.panTo([cityLocation.latitude, cityLocation.longitude], {
        animate: true,
        duration: 2
      });
    }
  }, [cityLocation]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}
