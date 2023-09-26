import React from 'react';

function About() {
  return (
    <>
      <div className="w-full h-full relative min-h-screen bg-cover" style={{ backgroundImage: 'url(./images/6.webp)' }}>
        <div className="absolute top-0 left-0 w-full h-full z-30 bg-gradient-to-b
        from-woodsmoke/20 via-woodsmoke/60 to-woodsmoke"
        />
      </div>
      <div className="w-full h-full min-h-screen" />
    </>
  );
}

export default About;
