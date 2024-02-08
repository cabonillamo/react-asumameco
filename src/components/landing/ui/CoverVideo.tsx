import HomeImage from "../../../assets/Home Image.png";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

function CoverVideo() {
  return (
    <ImageContainer>
      <StyledImage src={HomeImage} />
    </ImageContainer>
  );
}

export default CoverVideo;
