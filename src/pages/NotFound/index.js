import { useNavigate } from "react-router-dom";
import NotFoundImage from "../../components/assets/notfound.jpg";
import { BackDiv, Container, Image } from "./NotFound";
import {
  Button,
  HoverableSpan,
  StyledCenter,
  StyledOuterButton,
} from "./Hover";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Container>
      <BackDiv>
        <StyledCenter>
          <StyledOuterButton>
            <Button onClick={() => navigate(-1)}>{"< Back"}</Button>
            <HoverableSpan></HoverableSpan>
            <HoverableSpan></HoverableSpan>
          </StyledOuterButton>
        </StyledCenter>
      </BackDiv>

      <Image src={NotFoundImage} alt="Not Found" />
    </Container>
  );
}
