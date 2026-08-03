import DemoLayout from "../../components/DemoLayout";
import TextDemoWrapper from "../../components/TextDemoWrapper";
import DecryptedText from "../../components/text-animations/DecryptedText";

function DecryptedTextPage() {
  return (
    <DemoLayout>
      <TextDemoWrapper variant="title">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
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
      </TextDemoWrapper>
    </DemoLayout>
  );
}

export default DecryptedTextPage;
