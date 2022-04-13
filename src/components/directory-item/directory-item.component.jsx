import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
