import Ballpit from "../../components/backgrounds/Ballpit";

function BallpitPage() {
  return (
    <Ballpit
      count={100}
      gravity={0.5}
      friction={0.9975}
      wallBounce={0.95}
      followCursor
      colors={["#5227FF", "#7cff67", "#ff6b6b"]}
    />
  );
}

export default BallpitPage;
