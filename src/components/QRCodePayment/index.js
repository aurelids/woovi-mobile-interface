import React from 'react';
import { CustomContainer, MainText, QRCodeContainer, QRCodeImage, CopyButton, VectorImage, PrazoText, DataText, CircleContainer, Circle, Line, FirstText, AmountText, DividerLine, CETText, TotalText, ComoFuncionaText, SetaUpImage } from './styles';
import { Typography, Box } from '@mui/material';
import qrCodeImage from '../../assets/qr-code.png';
import setaUpImage from '../../assets/seta-up.png';
import vectorImage from '../../assets/Vector.png';

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
