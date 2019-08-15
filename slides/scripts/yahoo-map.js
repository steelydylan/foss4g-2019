import React from 'react';
import YahooMapLoader from 'yahoo-map-loader';
import YmapCluster from 'yahoo-map-cluster';
YahooMapLoader.appId = 'dj0zaiZpPVVCWFI0N3ZUWEJaYyZzPWNvbnN1bWVyc2VjcmV0Jng9ZGM-';
YahooMapLoader.exportGlobal = true;

const { useRef, useEffect } = React;

export default () => {
  const mapRef = useRef();
  useEffect(() => {
    YahooMapLoader.load((Y) => {
      const ymap = new Y.Map(mapRef.current);
      ymap.drawMap(new Y.LatLng(35.66572, 139.73100), 15, Y.LayerSetId.NORMAL);
      const marker = new Y.Marker(new Y.LatLng(35.66572, 139.73100), { title: 'マーカー1'});
      const marker2 = new Y.Marker(new Y.LatLng(35.66572, 139.73000), { title: 'マーカー2'});
      const marker3 = new Y.Marker(new Y.LatLng(35.665, 139.734), { title: 'マーカー3'});
      const marker4 = new Y.Marker(new Y.LatLng(35.6635, 139.734), { title: 'マーカー4'});
      const marker5 = new Y.Marker(new Y.LatLng(35.665, 139.731), { title: 'マーカー5'});
      const marker6 = new Y.Marker(new Y.LatLng(35.6642, 139.733), { title: 'マーカー6'});
      const marker7 = new Y.Marker(new Y.LatLng(35.6635, 139.7328), { title: 'マーカー7'});
      const marker8 = new Y.Marker(new Y.LatLng(35.665, 139.7343), { title: 'マーカー8'});
      const marker9 = new Y.Marker(new Y.LatLng(35.6638, 139.7333), { title: 'マーカー9'});
      const marker10 = new Y.Marker(new Y.LatLng(35.6628, 139.7333), { title: 'マーカー10'});
      new YmapCluster(ymap, [marker, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9, marker10], {
        imagePath: 'https://appleple.github.io/yahoo-map-cluster/images/cluster/'
      });
      const control = new Y.ZoomControl();
      ymap.addControl(control);
    });
  }, []);
  
  return (<div id="map" ref={mapRef} style={{ width: '600px', height: '400px', margin: '0 auto'}}></div>);
}