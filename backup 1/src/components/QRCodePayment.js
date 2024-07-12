import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import qrCodeImage from '../assets/qr-code.png'; // Adicione a imagem do QR Code na pasta assets
import setaUpImage from '../assets/seta-up.png';
import vectorImage from '../assets/Vector.png';

const CustomContainer = styled(Container)({
  padding: '20px',
  textAlign: 'center',
  maxWidth: '500px',
  maxHeight: '1100px',
  overflow: 'auto',
});

const QRCodeContainer = styled(Box)({
  position: 'relative',
  border: '4px solid #03D69D',
  borderRadius: '10px',
  display: 'inline-block',
  marginTop: '10px',
});

const QRCodeImage = styled('img')({
  width: '100%',
  maxWidth: 300,
  margin: '9px 9px',
});

const CircleContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: '25px 0',
  position: 'relative',
  paddingLeft: '18px',
});

const Circle = styled(Box)(({ borderColor }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  border: `3px solid ${borderColor}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '10px',
  position: 'relative',
}));

const Line = styled(Box)({
  width: '3px',
  height: '26px', // Ajuste a altura para conectar corretamente os círculos
  backgroundColor: '#E5E5E5',
  position: 'absolute',
  left: '5.5%', // Centralize a linha entre os círculos
  top: '16px', // Posicione a linha corretamente
});

const AmountText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontSize: '18px',
  fontWeight: '800',
  color: '#4D4D4D',
  position: 'absolute',
  right: '18px',
});

const FirstText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '600',
  fontSize: '18px',
  color: '#4D4D4D',
  position: 'absolute',
  left: '30px',
  whiteSpace: 'nowrap',
});

const MainText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontSize: '24px',
  color: '#4D4D4D',
  textAlign: 'center',
  fontWeight: '600',
  marginBottom: '5px',
});

const CopyButton = styled(Button)({
  backgroundColor: '#133A6F',
  color: '#FFFFFF',
  width: '310px',
  height: '39px',
  marginTop: '20px',
  textTransform: 'none',
  borderRadius: '8px',
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '500',
  fontSize: '18px',
});

const VectorImage = styled('img')({
  marginLeft: '10px', // Ajuste o espaçamento conforme necessário
  verticalAlign: 'middle', // Centralize verticalmente com o texto
});

const PrazoText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '600',
  fontSize: '14px',
  color: '#B2B2B2',
  marginTop: '20px',
});

const DataText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '800',
  fontSize: '14px',
  color: '#4D4D4D',
  marginTop: '-5px', // Ajuste para remover o espaçamento entre os textos
});

const DividerLine = styled(Box)({
  width: '427px',
  height: '2px',
  backgroundColor: '#E5E5E5',
  margin: '20px auto', // Centraliza horizontalmente com margem superior de 20px
});

const CETText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '550',
  fontSize: '14px',
  color: '#4D4D4D',
  textAlign: 'left',
  marginLeft: '20px', // Margem esquerda de 20px
  marginRight: 'auto', // Margem direita automática para alinhar à esquerda
});

const TotalText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '600',
  fontSize: '17px',
  color: '#4D4D4D',
  textAlign: 'right',
  marginRight: '20px', // Margem direita de 20px
  marginLeft: 'auto', // Margem esquerda automática para alinhar à direita
});

const ComoFuncionaText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '800',
  fontSize: '16px',
  color: '#4D4D4D',
  textAlign: 'left',
  marginLeft: '20px', // Margem esquerda de 20px
  marginRight: 'auto', // Margem direita automática para alinhar à esquerda
});

const SetaUpImage = styled('img')({
  marginRight: '20px', // Margem direita de 20px
  marginLeft: 'auto', // Margem esquerda automática para alinhar à direita
  verticalAlign: 'middle', // Centralize verticalmente com o texto
});

const QRCodePayment = () => {
  return (
    <CustomContainer>
      <MainText>João, pague a entrada de</MainText>
      <MainText>R$ 15.300,00 pelo Pix</MainText>
      <QRCodeContainer>
        <QRCodeImage src={qrCodeImage} alt="QR Code" />
      </QRCodeContainer>
      <CopyButton>
        Clique para copiar QR CODE
        <VectorImage src={vectorImage} alt="Vector Icon" />
      </CopyButton>
      <PrazoText>Prazo de pagamento:</PrazoText>
      <DataText>15/12/2021 - 08:17</DataText>
      <CircleContainer>
        <Circle borderColor="#03D69D">
          <FirstText>1ª entrada no Pix</FirstText>
        </Circle>
        <Line />
        <Circle borderColor="#E5E5E5" sx={{ marginTop: '16px' }}>
          <FirstText>2ª no cartão</FirstText>
        </Circle>
        <AmountText sx={{ top: '0px' }}>R$ 15.300,00</AmountText>
        <AmountText sx={{ top: '37px' }}>R$ 15.300,00</AmountText>
      </CircleContainer>
      <DividerLine />
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <CETText>CET: 0,5%</CETText>
        <TotalText>Total: R$ 30.600,00</TotalText>
      </Box>
      <DividerLine />
      <Box display="flex" alignItems="center">
        <ComoFuncionaText>Como funciona?</ComoFuncionaText>
        <SetaUpImage src={setaUpImage} alt="Seta Up" />
      </Box>
      <DividerLine />
      <Box display="flex" flexDirection="column" alignItems="center" marginBottom="20px">
        <Typography variant="subtitle1" style={{ fontFamily: 'Nunito', fontWeight: 600, fontSize: '14px', color: '#B2B2B2' }}>
          Identificador:
        </Typography>
        <Typography variant="subtitle1" style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '14px', color: '#4D4D4D'}}>
          2c1b951f356c4680b13ba1c9fc889c47
        </Typography>
      </Box>
    </CustomContainer>
    
  );
};

export default QRCodePayment;
