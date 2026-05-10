import { useState, useRef, useEffect, useCallback } from 'react';
import { VolumeX, Volume2, Play, Pause } from 'lucide-react';
// import vslVideo from '../assets/Start Gamedev-final.mp4';

const VSL_VIDEO_URL = 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-laptop-34444-large.mp4'; // Placeholder URL

export default function VSLPlayer() {
  const videoRef = useRef(null);
  const hideTimerRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [showUnmuteHint, setShowUnmuteHint] = useState(true);

  // Show controls then auto-hide after 2.5s of inactivity
  const revealControls = useCallback(() => {
    setShowControls(true);
    clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setShowControls(false), 2500);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().then(() => setPlaying(true)).catch(() => {});

    const hintTimer = setTimeout(() => setShowUnmuteHint(false), 3500);

    const prevent = (e) => e.preventDefault();
    video.addEventListener('contextmenu', prevent);
    const onEnded = () => setPlaying(false);
    video.addEventListener('ended', onEnded);

    return () => {
      video.removeEventListener('contextmenu', prevent);
      video.removeEventListener('ended', onEnded);
      clearTimeout(hintTimer);
      clearTimeout(hideTimerRef.current);
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
    setShowUnmuteHint(false);
    if (!playing) {
      video.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setPlaying(false);
    }
    revealControls();
  };

  const handleVideoClick = () => {
    revealControls();
    toggleMute();
  };

  return (
    <div
      className="relative w-full aspect-video rounded-2xl overflow-hidden video-glow border border-neon/30 bg-void-3 select-none cursor-pointer"
      onClick={handleVideoClick}
      onMouseMove={revealControls}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={VSL_VIDEO_URL}
        className="w-full h-full object-cover pointer-events-none"
        playsInline
        autoPlay
        muted
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
      />

      {/* Mute overlay */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-500 ${
          muted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative flex items-center justify-center mb-4">
          <span className="absolute inline-flex w-20 h-20 rounded-full bg-neon/20 animate-ping" />
          <div className="relative w-16 h-16 rounded-full bg-void/80 backdrop-blur-md border border-neon/50 flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.5)]">
            <VolumeX size={26} className="text-neon" />
          </div>
        </div>
        <div className={`transition-all duration-700 ${showUnmuteHint ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <span className="text-white font-semibold text-sm md:text-base tracking-wide bg-void/70 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            🔇 Clique para ativar o som
          </span>
        </div>
      </div>

      {/* Bottom control bar — fades in/out based on activity */}
      <div
        className={`absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-void/70 backdrop-blur-sm border border-white/15 text-white hover:bg-neon/30 hover:border-neon/50 transition-colors duration-200"
          aria-label={playing ? 'Pausar' : 'Reproduzir'}
        >
          {playing ? <Pause size={18} fill="white" /> : <Play size={18} fill="white" className="ml-0.5" />}
        </button>

        {/* Mute toggle */}
        <button
          onClick={(e) => { e.stopPropagation(); toggleMute(); revealControls(); }}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-void/70 backdrop-blur-sm border border-white/15 text-white text-xs font-medium hover:bg-neon/30 hover:border-neon/50 transition-colors duration-200"
          aria-label={muted ? 'Ativar som' : 'Mutar'}
        >
          {muted ? (
            <><VolumeX size={15} className="text-neon" /><span className="text-neon">Ativar som</span></>
          ) : (
            <><Volume2 size={15} className="text-green-400" /><span className="text-green-400">Som ativo</span></>
          )}
        </button>
      </div>
    </div>
  );
}
