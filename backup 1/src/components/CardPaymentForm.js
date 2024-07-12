import React, { useState } from 'react';
import { Container, TextField, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import checkImage from '../assets/check.png'; // Importando a imagem check.png
import setaUpImage from '../assets/seta-up.png';


const CustomContainer = styled(Container)({
  padding: '20px',
  textAlign: 'center',
  maxWidth: '500px',
  maxHeight: '1100px',
  overflow: 'auto',
});

const MainText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '800',
  fontSize: '22px',
  color: '#4D4D4D',
});

const CustomButton = styled(Button)({
  width: '427px',
  height: '39px',
  backgroundColor: '#133A6F',
  color: '#FFFFFF',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#0f2e54',
  },
});

const FieldTitle = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '600',
  fontSize: '14px',
  color: '#4D4D4D',
  position: 'relative',
  right: '125px',
  top: '6px',
  background: '#FFFFFF',
  zIndex: 1,
  width: 'fit-content',
  margin: '-5px auto',
  padding: '0 5px'
});

const StyledTextField = styled(TextField)({
  width: '424px',
  marginBottom: '10px', // Increased margin bottom for space below
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E5E5E5', // Changed border color
      borderWidth: '3px', // Changed border width
    },
  },
});

const HalfWidthTextField = styled(TextField)(({ align }) => ({
  width: '200px',
  marginBottom: '10px', // Increased margin bottom for space below
  marginRight: align === 'left' ? '10px' : '15px',
  marginLeft: align === 'right' ? '10px' : '15px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E5E5E5', // Changed border color
      borderWidth: '3px', // Changed border width
    },
  },
}));

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

  const PrazoText = styled(Typography)({
    fontFamily: 'Nunito, Arial, sans-serif',
    fontWeight: '600',
    fontSize: '14px',
    color: '#B2B2B2',
    marginTop: '20px',
    marginBottom: '7px'
  });

  const DataText = styled(Typography)({
    fontFamily: 'Nunito, Arial, sans-serif',
    fontWeight: '800',
    fontSize: '14px',
    color: '#4D4D4D',
    marginTop: '-5px',
  });

  const DividerLine = styled(Box)({
    width: '427px',
    height: '2px',
    backgroundColor: '#E5E5E5',
    margin: '20px auto',
  });

  const CETText = styled(Typography)({
    fontFamily: 'Nunito, Arial, sans-serif',
    fontWeight: '550',
    fontSize: '14px',
    color: '#4D4D4D',
    textAlign: 'left',
    marginLeft: '20px',
    marginRight: 'auto',
  });

  const TotalText = styled(Typography)({
    fontFamily: 'Nunito, Arial, sans-serif',
    fontWeight: '600',
    fontSize: '17px',
    color: '#4D4D4D',
    textAlign: 'right',
    marginRight: '20px',
    marginLeft: 'auto',
  });

  const ComoFuncionaText = styled(Typography)({
    fontFamily: 'Nunito, Arial, sans-serif',
    fontWeight: '800',
    fontSize: '16px',
    color: '#4D4D4D',
    textAlign: 'left',
    marginLeft: '20px',
    marginRight: 'auto',
  });

  const SetaUpImage = styled('img')({
    marginRight: '20px',
    marginLeft: 'auto',
    verticalAlign: 'middle',
  });

  const AmountText = styled(Typography)({
    fontFamily: 'Nunito, Arial, sans-serif',
    fontSize: '18px',
    fontWeight: '800',
    color: '#4D4D4D',
    position: 'absolute',
    right: '18px',
  });

  const CircleContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '25px 0',
    position: 'relative',
    paddingLeft: '18px',
  });

  const Circle = styled(Box)(({ borderColor, isFilled }) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: `3px solid ${borderColor}`, // Fixed template literal syntax
    backgroundColor: isFilled ? borderColor : 'transparent', // Pinta o círculo de verde se isFilled for true
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
    position: 'relative',
  }));

  const Line = styled(Box)({
    width: '3px',
    height: '28px',
    backgroundColor: '#E5E5E5',
    position: 'absolute',
    left: '5.5%',
    top: '16px',
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
