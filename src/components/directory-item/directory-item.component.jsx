import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <DirectoryItemContainer key={id}>
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
