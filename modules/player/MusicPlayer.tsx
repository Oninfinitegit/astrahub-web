"use client";
import { useAudioPlayer } from "react-use-audio-player";

interface MusicPlayerProps {
  src: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ src }) => {
  const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
    src,
    format: "mp3",
    autoplay: false,
  });

  return (
    <div className="flex items-center">
      <button className="p-6 bg-blue-600" onClick={togglePlayPause}>
        {loading ? "Loading..." : playing ? "Pause" : "Play"}
        {ready && (
          <audio src={src} controls={false} style={{ marginLeft: "20px" }} />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
