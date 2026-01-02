'use client';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapPin, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const DefaultIcon = new L.Icon({
  iconUrl: '/custom-marker.svg',
  shadowUrl: iconShadow.src,
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

if (typeof window !== 'undefined') {
  L.Marker.prototype.options.icon = DefaultIcon;
}


interface TimelineEntry {
  id: number;
  title: string;
  date: string;
  description: string;
  location: [number, number];
  locationName: string;
  popupTitle: string;
  popupDescription: string;
  imageUrl: string;
}

const timelineData: TimelineEntry[] = [
  {
    id: 1,
    title: 'SDE Intern @InnCircles',
    date: 'Aug-2025 - Present',
    description:
      'Developing web and mobile applications using Angular and React Native, with robust backend systems.',
    location: [17.445, 78.3915],
    locationName: 'Hyderabad, India',
    popupTitle: 'InnCircles',
    popupDescription:
      'Worked on scalable web, mobile, and backend solutions using Angular, React Native, and modern server technologies.',
    imageUrl: '/inncircles.png',
  },
  {
    id: 2,
    title: 'Web Developer Intern @SwaranSoft',
    date: 'June - Aug-2025',
    description: 'Building interactive UI using React and Tailwind CSS.',
    location: [28.415281, 77.041833],
    locationName: 'Gurugram, India',
    popupTitle: 'SwaranSoft',
    popupDescription: 'Worked on scalable frontend solutions using modern tech stack.',
    imageUrl: '/swaranSoft.png',
  },
  {
    id: 3,
    title: 'Student @ Manav Rachna University',
    date: '2022 - Present',
    description: 'Pursued B.Tech in Computer Science in Specilization with AIML.',
    location: [28.45, 77.2856],
    locationName: 'Haryana, India',
    popupTitle: 'Manav Rachna University',
    popupDescription: 'Academic foundation in programming and systems design.',
    imageUrl: '/MR.png',
  },
];

const FlyToLocation: React.FC<{ position: [number, number] }> = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(position, 15, { duration: 1.5 });
  }, [position, map]);
  return null;
};

const TimelineItem: React.FC<{
  entry: TimelineEntry;
  isActive: boolean;
  onClick: () => void;
}> = ({ entry, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={cn(
      'cursor-pointer p-4 border-l-4 transition-colors flex flex-col items-start gap-2',
      isActive
        ? 'bg-yellow-100 dark:bg-gray-700 border-black'
        : 'hover:bg-gray-100 dark:hover:bg-gray-600 border-transparent',
    )}
  >
    <Image
      src={entry.imageUrl}
      alt={entry.title}
      width={300}
      height={300}
      className="w-12 h-12 rounded-full border-2 border-black dark:border-white shadow-lg"
    />
    <h3 className="font-bold text-lg">{entry.title}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-300">{entry.date}</p>
    <p className="text-sm text-gray-800 dark:text-gray-200">{entry.description}</p>
    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
      <MapPin size={16} /> {entry.locationName}
    </p>
  </div>
);

const TimelineContainer: React.FC<{
  entries: TimelineEntry[];
  activeIndex: number;
  onSelect: (index: number) => void;
}> = ({ entries, activeIndex, onSelect }) => (
  <div className="overflow-y-auto p-4 md:w-[420px] w-full h-full border-r-4 border-black dark:border-darkBorder bg-white dark:bg-darkBg">
    {entries.map((entry, index) => (
      <TimelineItem
        key={entry.id}
        entry={entry}
        isActive={index === activeIndex}
        onClick={() => onSelect(index)}
      />
    ))}
  </div>
);

const MapComponent: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const selectedLocation = selectedIndex >= 0 ? timelineData[selectedIndex].location : null;
  const [isTimelineOpen, setIsTimelineOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTimeline = () => setIsTimelineOpen((prev) => !prev);

  return (
    <div className="relative p-4 sm:p-6 md:p-8 bg-white dark:bg-black py-16">
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:20px_20px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <div className="max-w-full mx-auto px-5 relative z-10">
        <div className="w-full bg-bg border-4 border-black dark:bg-darkBg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 p-6 mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-darkText text-center">
            My Journey Through Time & Space 🗺️
          </h1>
        </div>

        <div className="relative border-4 border-black dark:border-darkBorder bg-white dark:bg-darkBg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-[550px] md:h-[700px] xl:h-[750px] overflow-hidden rounded-md flex flex-col md:flex-row">
          {isTimelineOpen && (
            <TimelineContainer
              entries={timelineData}
              activeIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}
            />
          )}

          <div className="w-full h-full">
            <MapContainer
            key="leaflet-map"
              center={[17.445, 78.3915]} // Inncircles, Hyderabad (Gachibowli area)
              zoom={5}
              scrollWheelZoom={true}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {timelineData.map((entry) => (
                <Marker key={entry.id} position={entry.location}>
                  <Popup>
                    <strong>{entry.popupTitle}</strong>
                    <br />
                    {entry.popupDescription}
                  </Popup>
                </Marker>
              ))}
              {selectedLocation && <FlyToLocation position={selectedLocation} />}
            </MapContainer>
          </div>

          {isMobile && !isTimelineOpen && (
            <button
              onClick={toggleTimeline}
              aria-label="Open timeline"
              className="absolute top-4 left-4 z-30 p-3 bg-bg dark:bg-darkBg text-black dark:text-darkText border-4 border-black dark:border-white rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
            >
              <Menu size={24} />
            </button>
          )}

          <div className="absolute top-4 right-4 md:right-20 lg:right-24 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm p-2 px-3 rounded-md border-2 border-black dark:border-darkBorder shadow-md text-xs sm:text-sm text-black dark:text-white font-medium max-w-[200px] sm:max-w-xs">
            Click markers or timeline items to explore!
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
