import React, { useState, useRef, useEffect } from 'react';

const CustomAudioPlayer = () => {
  // Use state to manage the play/pause status and update the button icon
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Use a ref to store the audio element and persist it across renders
  // The 'src' URL is a direct link to your MP3 file
  const audioRef = useRef(new Audio("https://s320.djpunjab.is/data/48/53392/301589/Salute%20-%20Arjan%20Dhillon.mp3"));

  // This function toggles the play/pause state when the button is clicked
  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      // Browsers require user interaction to start playing audio
      audio.play().catch(error => {
        console.error("Audio playback failed:", error);
        alert("The browser prevented audio from playing automatically.");
      });
    }
    // Flip the state to trigger a re-render and update the button icon
    setIsPlaying(!isPlaying);
  };

  // Optional: Add effect to reset the UI state when the audio finishes playing
  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', handleEnded);

    // Cleanup function to remove the event listener
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []); // Empty dependency array means this runs once on mount/unmount

  // Determine the CSS class name for the icon based on the state
  // Assumes you are using an icon library like Font Awesome (fa-play, fa-pause)
  const iconClassName = isPlaying ? "fa fa-pause" : "fa fa-play";

  return (
    <>
      {/* Attach the onClick handler to your button */}
      <button 
        onClick={togglePlayPause} 
        className="btn-playpause text-primary m-r-sm"
        aria-label={isPlaying ? "Pause Audio" : "Play Audio"}
      >
        <i className={iconClassName}></i>
      </button>
      {" "}
    </>
  );
};

export default CustomAudioPlayer;
