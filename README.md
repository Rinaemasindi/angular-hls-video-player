# angular-hls-video-player

### ffpeg create each video variant
ffmpeg -i myVideo.mp4 -c:v libvpx-vp9 -keyint_min 150 \
-g 150 -tile-columns 4 -frame-parallel 1 -f webm -dash 1 \
-an -vf scale=160:90 -b:v 250k -dash 1 video_160x90_250k.mp4 \
-an -vf scale=320:180 -b:v 500k -dash 1 video_320x180_500k.mp4 \
-an -vf scale=640:360 -b:v 750k -dash 1 video_640x360_750k.mp4 \
-an -vf scale=640:360 -b:v 1000k -dash 1 video_640x360_1000k.mp4 \
-an -vf scale=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.mp4
