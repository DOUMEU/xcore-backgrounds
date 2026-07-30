import DemoLayout from "../../components/DemoLayout";
import DecryptedText from "../../components/text-animations/DecryptedText";

function DecryptedTextPage() {
  return (
    <DemoLayout>
      <div
        style={{
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          fontSize: "4rem",
        }}
      >
        <DecryptedText text="Hover me!" />

        <DecryptedText
          text="Customize me"
          speed={60}
          maxIterations={10}
          characters="ABCD1234!?"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
        />

        <DecryptedText
          text="Click to decrypt"
          animateOn="view"
          clickMode="once"
        />

        <DecryptedText
          text="This text animates when in view"
          revealDirection="start"
          sequential
          useOriginalCharsOnly={false}
        />
      </div>
    </DemoLayout>
  );
}

export default DecryptedTextPage;
