import React, { useState } from 'react';
import { Typography, Box} from '@mui/material';
import { CustomContainer, MainText, CustomButton, FieldTitle, StyledTextField, HalfWidthTextField, PrazoText, DataText, CircleContainer, Circle, Line, FirstText, AmountText, DividerLine, CETText, TotalText, ComoFuncionaText, SetaUpImage } from './styles';
import checkImage from '../../assets/check.png';
import setaUpImage from '../../assets/seta-up.png';

const CardPaymentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    cpf: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    parcelas: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementar lógica de submissão
  };

  return (
    <CustomContainer>
      <Box my={4}>
        <MainText>João, pague o restante em 1x no cartão</MainText>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box my={2}>
          <FieldTitle>Nome completo</FieldTitle>
          <StyledTextField
            fullWidth
            variant="outlined"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </Box>
        <Box my={2}>
          <FieldTitle position="relative" left='-170px'>CPF</FieldTitle>
          <StyledTextField
            fullWidth
            variant="outlined"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
          />
        </Box>
        <Box my={2}>
          <FieldTitle>Número do cartão</FieldTitle>
          <StyledTextField
            fullWidth
            variant="outlined"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Box>
            <FieldTitle position="relative" left='-30px'>Vencimento</FieldTitle>
            <HalfWidthTextField
              variant="outlined"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              align="left"
            />
          </Box>
          <Box position="relative" top="0px">
            <FieldTitle position="relative" left='-65px'>CVV</FieldTitle>
            <HalfWidthTextField
              variant="outlined"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              align="right"
            />
          </Box>
        </Box>
        <Box my={2}>
          <FieldTitle position="relative" left='-155px'>Parcelas</FieldTitle>
          <StyledTextField
            fullWidth
            variant="outlined"
            name="parcelas"
            value={formData.parcelas}
            onChange={handleChange}
          />
        </Box>
        <Box my={2}>
          <CustomButton variant="contained" type="submit">
            Pagar
          </CustomButton>
        </Box>
      </form>
      <PrazoText>Prazo de pagamento:</PrazoText>
      <DataText>15/12/2021 - 08:17</DataText>
      <CircleContainer>
        <Circle borderColor="#03D69D" isFilled>
          <img src={checkImage} alt="Check" style={{ width: '7px', height: '7px' }} />
          <FirstText>1ª entrada no Pix</FirstText>
        </Circle>
        <Line />
        <Circle borderColor="#03D69D" position="relative" top='15px'>
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
        <Typography variant="subtitle1" style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '14px', color: '#4D4D4D' }}>
          2c1b951f356c4680b13ba1c9fc889c47
        </Typography>
      </Box>
    </CustomContainer>
  );
};


export default CardPaymentForm;
