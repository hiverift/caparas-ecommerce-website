import React from "react";

const videos = [
  {
    poster:
      "https://www.earthstore.in/cdn/shop/files/preview_images/7e45cc8765bf4c34add3ae6974ff4eb1.thumbnail.0000000000.jpg?v=1746172322&width=2800",
    src:
      "https://www.earthstore.in/cdn/shop/videos/c/vp/7e45cc8765bf4c34add3ae6974ff4eb1/7e45cc8765bf4c34add3ae6974ff4eb1.HD-1080p-2.5Mbps-46896169.mp4?v=0",
  },
  {
    poster:
      "https://www.earthstore.in/cdn/shop/files/preview_images/fee0ab1275ad4ebd9e49042ae45a84c9.thumbnail.0000000000.jpg?v=1746171890&width=2800",
    src:
      "https://www.earthstore.in/cdn/shop/videos/c/vp/fee0ab1275ad4ebd9e49042ae45a84c9/fee0ab1275ad4ebd9e49042ae45a84c9.HD-1080p-7.2Mbps-46895830.mp4?v=0",
  },
  {
    poster:
      "https://www.earthstore.in/cdn/shop/files/preview_images/d5f2051bff19455897f7eb6c2778187b.thumbnail.0000000000.jpg?v=1747029594&width=2800",
    src:
      "https://www.earthstore.in/cdn/shop/videos/c/vp/d5f2051bff19455897f7eb6c2778187b/d5f2051bff19455897f7eb6c2778187b.HD-1080p-7.2Mbps-47417269.mp4?v=0",
  },
  {
    poster:
      "https://www.earthstore.in/cdn/shop/files/preview_images/99cdacfe0ed245f0a68fe8d22c34367a.thumbnail.0000000000.jpg?v=1746255137&width=2800",
    src:
      "https://www.earthstore.in/cdn/shop/videos/c/vp/99cdacfe0ed245f0a68fe8d22c34367a/99cdacfe0ed245f0a68fe8d22c34367a.HD-1080p-4.8Mbps-46941445.mp4?v=0",
  },
  {
    poster:
      "https://www.earthstore.in/cdn/shop/files/preview_images/8208a560238f4a6092a7ff7dba4b27c7.thumbnail.0000000000.jpg?v=1740138562&width=2800",
    src:
      "https://www.earthstore.in/cdn/shop/videos/c/vp/8208a560238f4a6092a7ff7dba4b27c7/8208a560238f4a6092a7ff7dba4b27c7.HD-1080p-4.8Mbps-43002725.mp4?v=0",
  },
];

const VideoSlider = () => {
  return (
    <div className="w-full py-10 overflow-hidden">
      {/* KEYFRAMES INLINE */}
      <style>
        {`
          @keyframes scrollVideos {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className="flex w-[200%] animate-[scrollVideos_25s_linear_infinite]">

        {/* ORIGINAL VIDEOS */}
        <div className="flex gap-6">
          {videos.map((v, idx) => (
            <video
              key={idx}
              className="w-[350px] h-[500px] object-cover rounded-xl"
              playsInline
              muted
              loop
              autoPlay
              poster={v.poster}
            >
              <source src={v.src} />
            </video>
          ))}
        </div>

        {/* CLONE FOR INFINITE LOOP */}
        <div className="flex gap-6 ml-6">
          {videos.map((v, idx) => (
            <video
              key={idx + "clone"}
              className="w-[350px] h-[500px] object-cover rounded-xl"
              playsInline
              muted
              loop
              autoPlay
              poster={v.poster}
            >
              <source src={v.src} />
            </video>
          ))}
        </div>

      </div>
    </div>
  );
};

export default VideoSlider;
