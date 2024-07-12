import { styled } from '@mui/system';
import { Container, FormControlLabel, Box } from '@mui/material';

export const CustomContainer = styled(Container)({
  padding: '20px',
  textAlign: 'center',
  maxWidth: '500px',
  maxHeight: '1100px',
  overflow: 'auto',
});

export const StyledFormControlLabel = styled(FormControlLabel)(({ isFirst, isSecond, isSeventh, isSelected }) => ({
  marginBottom: isFirst ? '36px' : '0',
  border: isSelected ? '2px solid #03D69D' : '1px solid #ccc',
  padding: '20px 10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textAlign: 'left',
  flexDirection: 'row-reverse',
  backgroundColor: isSelected ? '#F4FBF9' : 'transparent',
  '& .MuiRadio-root': {
    color: isSelected ? '#03D69D' : '#000',
  },
  borderRadius: isFirst 
    ? '5px'
    : isSecond 
      ? '5px 5px 0 0'
      : isSeventh 
        ? '0 0 5px 5px'
        : '0',
}));

export const BlueBox = styled(Box)({
  backgroundColor: '#133A6F',
  color: '#fff',
  fontSize: '14px',
  height: '33px',
  width: '387px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: '',
  marginTop: '5px',
  padding: '0 10px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '0',
    right: '-1px', // Adjust as needed
    width: '0',
    height: '0',
    borderTop: '16px solid transparent',
    borderBottom: '16px solid transparent',
    borderRight: '16px solid #FFFF', // Match background color
  },
});

export const PixBox = styled(Box)({
  position: 'relative',
  top: '15px', // Adjust to position above the border
  right: '-10px', // Adjust to position from the left edge
  width: '67px',
  height: '22px',
  backgroundColor: '#E5E5E5',
  borderRadius: '100px',
  border: '1px solid #ccc', // Example border style
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '700',
  fontSize: '17px',
  color: '#4D4D4D',
});

export const PixBox2 = styled(Box)({
  position: 'relative',
  top: '15px',
  right: '-10px',
  width: '157px',
  height: '22px',
  backgroundColor: '#E5E5E5',
  borderRadius: '100px',
  border: '1px solid #ccc',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Nunito, Arial, sans-serif',
  fontWeight: '700',
  fontSize: '17px',
  color: '#4D4D4D',
});
