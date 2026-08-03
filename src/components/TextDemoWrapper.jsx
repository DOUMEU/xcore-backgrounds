export const textVariants = {
  display: {
    fontSize: "clamp(120px, 15vw, 300px)",
    fontWeight: 800,
    lineHeight: 1,
  },

  hero: {
    fontSize: "clamp(56px, 8vw, 120px)",
    fontWeight: 700,
    lineHeight: 1.1,
  },

  title: {
    fontSize: "clamp(24px, 4vw, 48px)",
    fontWeight: 700,
    lineHeight: 1.2,
  },

  body: {
    fontSize: "clamp(14px, 2vw, 24px)",
    fontWeight: 400,
    lineHeight: 1.5,
  },
};

function TextDemoWrapper({
  children,
  variant = "hero",
  color = "#FFFFFF",
  align = "center",
  maxWidth = "1200px",
}) {
  const style = textVariants[variant];

  return (
    <div
      style={{
        width: "100%",
        maxWidth,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: align,

        color,

        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default TextDemoWrapper;
