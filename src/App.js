import React from "react";
import styled from "styled-components";

const Mfe2Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;
const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 14px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const FooterLinks = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); // multi-column grid for larger screens
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Single column on mobile screens
    gap: 10px; // Reduce gap on mobile
    padding: 10px; // Reduce padding on mobile
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin: 0;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin: 10px 0 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} MFE2. Dev. By Shoaib Mulla</p>
      <FooterLinks>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Terms of Service</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};

const App = ({ data }) => {
  const handleEvent = () => {
    const event = new CustomEvent("MFE2Event", {
      detail: { message: "Hello from MFE2!", timestamp: new Date() },
    });
    window.dispatchEvent(event);
  };

  return (
    <>
      <h1
        style={{
          borderTop: "2px solid #000",
          width: "100%",
          textAlign: "center",
        }}
      >
        This is MFE2 App
      </h1>
      <h3
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        {" (Below cards data are passed from MFE1)"}
      </h3>
      <button onClick={handleEvent}>Send Event to MFE1</button>
      <Mfe2Container>
        <CardGrid>
          {data.map((card) => (
            <Card key={card.id}>
              <CardImage src={card.image} alt={card.title} />
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </CardGrid>

        <Footer />
      </Mfe2Container>
    </>
  );
};

export default App;
