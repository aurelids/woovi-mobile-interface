import { styled } from '@mui/system';
import { Container, TextField, Typography, Box, Button } from '@mui/material';

export const CustomContainer = styled(Container)({
  padding: '20px',
  textAlign: 'center',
  maxWidth: '500px',
  maxHeight: '1100px',
  overflow: 'auto',
});

export const MainText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '800',
  fontSize: '22px',
  color: '#4D4D4D',
});

export const CustomButton = styled(Button)({
  width: '427px',
  height: '39px',
  backgroundColor: '#133A6F',
  color: '#FFFFFF',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#0f2e54',
  },
});

export const FieldTitle = styled(Typography)({
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
  padding: '0 5px',
});

export const StyledTextField = styled(TextField)({
  width: '424px',
  marginBottom: '10px', // Increased margin bottom for space below
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E5E5E5', // Changed border color
      borderWidth: '3px', // Changed border width
    },
  },
});

export const HalfWidthTextField = styled(TextField)(({ align }) => ({
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

export const PrazoText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '600',
  fontSize: '14px',
  color: '#B2B2B2',
  marginTop: '20px',
  marginBottom: '7px',
});

export const DataText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '800',
  fontSize: '14px',
  color: '#4D4D4D',
  marginTop: '-5px',
});

export const DividerLine = styled(Box)({
  width: '427px',
  height: '2px',
  backgroundColor: '#E5E5E5',
  margin: '20px auto',
});

export const CETText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '550',
  fontSize: '14px',
  color: '#4D4D4D',
  textAlign: 'left',
  marginLeft: '20px',
  marginRight: 'auto',
});

export const TotalText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '600',
  fontSize: '17px',
  color: '#4D4D4D',
  textAlign: 'right',
  marginRight: '20px',
  marginLeft: 'auto',
});

export const ComoFuncionaText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '800',
  fontSize: '16px',
  color: '#4D4D4D',
  textAlign: 'left',
  marginLeft: '20px',
  marginRight: 'auto',
});

export const SetaUpImage = styled('img')({
  marginRight: '20px',
  marginLeft: 'auto',
  verticalAlign: 'middle',
});

export const AmountText = styled(Typography)({
  fontFamily: 'Nunito, Arial, sans-serif',
  fontSize: '18px',
  fontWeight: '800',
  color: '#4D4D4D',
  position: 'absolute',
  right: '18px',
});

export const CircleContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: '25px 0',
  position: 'relative',
  paddingLeft: '18px',
});

export const Circle = styled(Box)(({ borderColor, isFilled }) => ({
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

export const Line = styled(Box)({
  width: '3px',
  height: '28px',
  backgroundColor: '#E5E5E5',
  position: 'absolute',
  left: '5.5%',
  top: '16px',
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
