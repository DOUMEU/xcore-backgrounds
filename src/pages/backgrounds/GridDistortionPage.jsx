import GridDistortion from "../../components/backgrounds/GridDistortion";

function GridDistortionPage() {
  return (
    <GridDistortion
      imageSrc="https://picsum.photos/1920/1080?grayscale"
      grid={10}
      mouse={0.25}
      strength={0.15}
      relaxation={0.9}
      className="custom-class"
    />
  );
}

export default GridDistortionPage;
