import { Container, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

export const CustomContainer = styled(Container)({
  padding: '20px',
  textAlign: 'center',
  maxWidth: '500px',
  maxHeight: '1100px',
  overflow: 'auto',
});

export const QRCodeContainer = styled(Box)({
  position: 'relative',
  border: '4px solid #03D69D',
  borderRadius: '10px',
  display: 'inline-block',
  marginTop: '10px',
});

export const QRCodeImage = styled('img')({
  width: '100%',
  maxWidth: 300,
  margin: '9px 9px',
});

export const CircleContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: '25px 0',
  position: 'relative',
  paddingLeft: '18px',
});

export const Circle = styled(Box)(({ borderColor }) => ({
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

export const Line = styled(Box)({
  width: '3px',
  height: '26px', // Ajuste a altura para conectar corretamente os círculos
  backgroundColor: '#E5E5E5',
  position: 'absolute',
  left: '5.5%', // Centralize a linha entre os círculos
  top: '16px', // Posicione a linha corretamente
});

export const AmountText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontSize: '18px',
  fontWeight: '800',
  color: '#4D4D4D',
  position: 'absolute',
  right: '18px',
});

export const FirstText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '600',
  fontSize: '18px',
  color: '#4D4D4D',
  position: 'absolute',
  left: '30px',
  whiteSpace: 'nowrap',
});

export const MainText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontSize: '24px',
  color: '#4D4D4D',
  textAlign: 'center',
  fontWeight: '600',
  marginBottom: '5px',
});

export const CopyButton = styled(Button)({
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

export const VectorImage = styled('img')({
  marginLeft: '10px', // Ajuste o espaçamento conforme necessário
  verticalAlign: 'middle', // Centralize verticalmente com o texto
});

export const PrazoText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '600',
  fontSize: '14px',
  color: '#B2B2B2',
  marginTop: '20px',
});

export const DataText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '800',
  fontSize: '14px',
  color: '#4D4D4D',
  marginTop: '-5px', // Ajuste para remover o espaçamento entre os textos
});

export const DividerLine = styled(Box)({
  width: '427px',
  height: '2px',
  backgroundColor: '#E5E5E5',
  margin: '20px auto', // Centraliza horizontalmente com margem superior de 20px
});

export const CETText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '550',
  fontSize: '14px',
  color: '#4D4D4D',
  textAlign: 'left',
  marginLeft: '20px', // Margem esquerda de 20px
  marginRight: 'auto', // Margem direita automática para alinhar à esquerda
});

export const TotalText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '600',
  fontSize: '17px',
  color: '#4D4D4D',
  textAlign: 'right',
  marginRight: '20px', // Margem direita de 20px
  marginLeft: 'auto', // Margem esquerda automática para alinhar à direita
});

export const ComoFuncionaText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '800',
  fontSize: '16px',
  color: '#4D4D4D',
  textAlign: 'left',
  marginLeft: '20px', // Margem esquerda de 20px
  marginRight: 'auto', // Margem direita automática para alinhar à esquerda
});

export const SetaUpImage = styled('img')({
  marginRight: '20px', // Margem direita de 20px
  marginLeft: 'auto', // Margem esquerda automática para alinhar à direita
  verticalAlign: 'middle', // Centralize verticalmente com o texto
});
