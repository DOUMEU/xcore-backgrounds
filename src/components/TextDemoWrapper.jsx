function TextDemoWrapper({
  children,
  variant = "hero",
  color = "#FFFFFF",
  align = "center",
  maxWidth = "1200px",
}) {
  const variants = {
    hero: {
      fontSize: "clamp(64px, 8vw, 120px)",
      fontWeight: 700,
      lineHeight: 1.1,
    },

    title: {
      fontSize: "clamp(24px, 6vw, 80px)",
      fontWeight: 700,
      lineHeight: 1.2,
    },

    body: {
      fontSize: "clamp(14px, 2vw, 24px)",
      fontWeight: 400,
      lineHeight: 1.5,
    },

    display: {
      fontSize: "clamp(120px, 15vw, 300px)",
      fontWeight: 800,
      lineHeight: 1,
    },
  };

  const style = variants[variant];

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
