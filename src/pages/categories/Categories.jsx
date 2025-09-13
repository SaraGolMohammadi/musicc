import React, { useState, useRef, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import data from '../../data'; 
import Playlist from '../Playlist/Playlist';
import './Categories.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

export default function Categories() {
  const [playingId, setPlayingId] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null); 
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRefs = useRef({});

  const togglePlay = (id) => {
    if (playingId === id) {
      audioRefs.current[id].pause();
      setPlayingId(null);
    } else {
      if (playingId && audioRefs.current[playingId]) {
        audioRefs.current[playingId].pause();
      }
      audioRefs.current[id].play();
      setPlayingId(id);
      setCurrentTrack(data.find(item => item.id === id));
    }
  };

  const onEnded = (id) => {
    nextTrack();
  };

  const nextTrack = () => {
    if (!currentTrack) return;
    const currentIndex = data.findIndex(item => item.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % data.length;
    const next = data[nextIndex];
    togglePlay(next.id);
  };

  const prevTrack = () => {
    if (!currentTrack) return;
    const currentIndex = data.findIndex(item => item.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    const prev = data[prevIndex];
    togglePlay(prev.id);
  };

  useEffect(() => {
    let interval;
    if (playingId && audioRefs.current[playingId]) {
      interval = setInterval(() => {
        const audio = audioRefs.current[playingId];
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100 || 0);
      }, 500);
    }
    return () => clearInterval(interval);
  }, [playingId]);

  const formatTime = (time) => {
    if (!time) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div style={{ width: '100%', maxWidth: '1050px'}}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        loop={true}
        spaceBetween={180}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                color: 'white',
                padding: '20px',
                transition: 'transform 0.4s ease',
                height: '270px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                backgroundImage: `url(${item.img.replace('..', '')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.8)',
                width:'200px',
              }}
            >
              <h4 style={{ margin: '0 0 5px', textShadow: '0 0 8px rgba(0,0,0,0.8)' }}>
                {item.title}
              </h4>

              <div onClick={() => togglePlay(item.id)}>
                <span style={{ 
                  fontSize: '20px', 
                  background:'#111',  
                  borderRadius: '12px',
                  padding: '4px 7px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  userSelect: 'none',
                  cursor: 'pointer',
                  marginTop: '10px',
                  width: 'fit-content',
                  marginLeft:'150px',
                  marginBottom:'50px'
                }}>
                  {playingId === item.id ? <StopIcon/> : <PlayArrowIcon/>}
                </span>
              </div>

              <audio
                ref={(el) => (audioRefs.current[item.id] = el)}
                src={item.music.replace('.', '')}
                onEnded={() => onEnded(item.id)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-slide {
          transition: transform 0.3s ease, z-index 0.3s ease;
          z-index: 1;
        }
        .swiper-slide-active {
          z-index: 10 !important;
        }
        .swiper-slide-active > div {
          transform: scale(1.2);
          box-shadow: 0 10px 20px rgba(0,0,0,0.7);
        }
      `}</style>

      {/* پلیر پایین صفحه */}
      {currentTrack && (
        <div style={{
          position: 'fixed',
          bottom: '0',
          left: '0',
          width: '100%',
          background: '#222',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          padding: '10px 20px',
          boxShadow: '0 -4px 10px rgba(0,0,0,0.8)',
          zIndex: 1000
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* عکس و عنوان */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img 
                src={currentTrack.img.replace('..', '')} 
                alt={currentTrack.title} 
                style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }}
              />
              <div>
                <strong>{currentTrack.title}</strong>
              </div>
            </div>

            {/* دکمه‌های قبلی، پخش/توقف، بعدی */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SkipPreviousIcon onClick={prevTrack} style={{ cursor: 'pointer' }} />
              <div onClick={() => togglePlay(currentTrack.id)} style={{ cursor: 'pointer' }}>
                {playingId === currentTrack.id ? <StopIcon /> : <PlayArrowIcon />}
              </div>
              <SkipNextIcon onClick={nextTrack} style={{ cursor: 'pointer' }} />
            </div>
          </div>

          {/* نوار پیشرفت */}
          <div style={{ marginTop: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '12px' }}>{formatTime(currentTime)}</span>
            <div style={{ flex: 1, height: '5px', background: '#555', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: `${progress}%`, height: '100%', background: '#1DB954', transition: 'width 0.2s' }}></div>
            </div>
            <span style={{ fontSize: '12px' }}>
              {currentTrack && audioRefs.current[currentTrack.id] ? formatTime(audioRefs.current[currentTrack.id].duration) : '0:00'}
            </span>
          </div>
        </div>
      )}

      
      <Playlist/>
    </div>
  );
}
