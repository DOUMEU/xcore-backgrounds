import ImageTrail from "../../components/backgrounds/ImageTrail";

function ImageTrailPage() {
  return (
    <div style={{ height: "100%", position: "relative", overflow: "hidden" }}>
      <ImageTrail
        items={[
          "https://picsum.photos/id/287/300/300",
          "https://picsum.photos/id/1001/300/300",
          "https://picsum.photos/id/1025/300/300",
          "https://picsum.photos/id/1026/300/300",
          "https://picsum.photos/id/1027/300/300",
          "https://picsum.photos/id/1028/300/300",
          "https://picsum.photos/id/1029/300/300",
          "https://picsum.photos/id/1030/300/300",
          // ...
        ]}
        variant="1"
      />
    </div>
  );
}

export default ImageTrailPage;
