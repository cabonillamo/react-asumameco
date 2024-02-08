import HomeVideo from "../../../assets/Home Video3.mp4";
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 5px;
  mask-image: linear-gradient(
      to top,
      transparent,
      white 10%,
      white 90%,
      transparent
    ),
    linear-gradient(to bottom, transparent, white 10%, white 90%, transparent);
`;

function CoverVideo() {
  return (
    <VideoContainer>
      <StyledVideo src={HomeVideo} autoPlay muted loop />
    </VideoContainer>
  );
}

export default CoverVideo;
