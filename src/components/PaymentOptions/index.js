import React, { useState } from 'react';
import { Typography, RadioGroup, Radio, Box } from '@mui/material';
import { CustomContainer, StyledFormControlLabel, BlueBox, PixBox, PixBox2 } from './styles';

const PaymentOptions = ({ name }) => {
  const [selectedOption, setSelectedOption] = useState('2x');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    // Remove navigation logic here
  };

  return (
    <CustomContainer>
      <Box my={4}>
        <Typography variant="h5" sx={{ fontFamily: 'Nunito, Arial, sans-serif', fontWeight: '800', fontSize: '24px', color: '#4D4D4D' }}>
          {name}, como você quer pagar?
        </Typography>
      </Box>
      <RadioGroup value={selectedOption} onChange={handleChange} sx={{ flexDirection: 'column', gap: 0 }}>
        <PixBox>Pix</PixBox>
        <StyledFormControlLabel
          value="1x"
          control={<Radio />}
          label={
            <Box>
              <Typography variant="body1" sx={{ fontFamily: 'Nunito, Arial, sans-serif', fontSize: '24px', color: '#4D4D4D' }}>
                <strong>1x</strong> <span style={{ color: '#4D4D4D' }}>R$ 30.500,00</span>
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Nunito, Arial, sans-serif', fontSize: '16px', color: '#03D69D', fontWeight: '600' }}>
                Ganhe 3% de Cashback
              </Typography>
              <BlueBox>
                <Typography component="span" sx={{ fontWeight: 'bold', marginRight: '5px' }}>
                  🤑 R$300,00
                </Typography>
                <Typography component="span">
                  de volta no seu Pix na hora
                </Typography>
              </BlueBox>
            </Box>
          }
          isFirst={true}
          isSelected={selectedOption === '1x'}
        />
        <PixBox2>Pix Parcelado</PixBox2>
        <StyledFormControlLabel
          value="2x"
          control={<Radio />}
          label={
            <Box>
              <Typography variant="body1" sx={{ fontFamily: 'Nunito, Arial, sans-serif', fontSize: '24px', color: '#4D4D4D' }}>
                <strong>2x</strong> <span style={{ color: '#4D4D4D' }}>R$ 15.300,00</span>
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Nunito, Arial, sans-serif', fontSize: '16px', color: '#AFAFAF', fontWeight: '600' }}>
                Total: R$ 30.600,00
              </Typography>
            </Box>
          }
          isSecond={true}
          isSelected={selectedOption === '2x'}
        />
        <StyledFormControlLabel
          value="3x"
          control={<Radio />}
          label={
            <Box>
              <Typography variant="body1" sx={{ fontFamily: 'Nunito, Arial, sans-serif', fontSize: '24px', color: '#4D4D4D' }}>
                <strong>3x</strong> <span style={{ color: '#4D4D4D' }}>R$ 10.196,66</span>
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Nunito, Arial, sans-serif', fontSize: '16px', color: '#AFAFAF', fontWeight: '600' }}>
                Total: R$ 30.620,00
              </Typography>
            </Box>
          }
          isSelected={selectedOption === '3x'}
        />
        <StyledFormControlLabel
          value="4x"
          control={<Radio />}
          label={
            <Box>
              <Typography variant="body1" sx={{ fontFamily: 'Nunito, Arial, sans-serif', fontSize: '24px', color: '#4D4D4D' }}>
                <strong>4x</strong> <span style={{ color: '#4D4D4D' }}>R$ 7.725,00</span>
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Nunito, Arial, sans-serif', fontSize: '16px', color: '#AFAFAF', fontWeight: '600' }}>
                Total: R$ 30.900,00
              </Typography>
              <BlueBox>
                <Typography component="span" sx={{ fontWeight: 'bold', marginRight: '5px' }}>
                  -3% de juros: 
                </Typography>
                <Typography component="span">
                  Melhor opção de parcelamento
                </Typography>
              </BlueBox>
            </Box>
          }
          isSelected={selectedOption === '4x'}
        />
        <StyledFormControlLabel
          value="5x"
          control={<Radio />}
          label={
            <Box>
              <Typography variant="body1" sx={{ fontFamily: 'Nunito, Arial, sans-serif', fontSize: '24px', color: '#4D4D4D' }}>
                <strong>5x</strong> <span style={{ color: '#4D4D4D' }}>R$ 6.300,00</span>
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Nunito, Arial, sans-serif', fontSize: '16px', color: '#AFAFAF', fontWeight: '600' }}>
                Total: R$ 31.500,00
              </Typography>
            </Box>
          }
          isSelected={selectedOption === '5x'}
        />
        <StyledFormControlLabel
          value="6x"
          control={<Radio />}
          label={
            <Box>
              <Typography variant="body1" sx={{ fontFamily: 'Nunito, Arial, sans-serif', fontSize: '24px', color: '#4D4D4D' }}>
                <strong>6x</strong> <span style={{ color: '#4D4D4D' }}>R$ 5.283,33</span>
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Nunito, Arial, sans-serif', fontSize: '16px', color: '#AFAFAF', fontWeight: '600' }}>
                Total: R$ 31.699,98
              </Typography>
            </Box>
          }
          isSelected={selectedOption === '6x'}
        />
        <StyledFormControlLabel
          value="7x"
          control={<Radio />}
          label={
            <Box>
              <Typography variant="body1" sx={{ fontFamily: 'Nunito, Arial, sans-serif', fontSize: '24px', color: '#4D4D4D' }}>
                <strong>7x</strong> <span style={{ color: '#4D4D4D' }}>R$ 4.542,85</span>
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Nunito, Arial, sans-serif', fontSize: '16px', color: '#AFAFAF', fontWeight: '600' }}>
                Total: R$ 31.800,00
              </Typography>
            </Box>
          }
          isSeventh={true}
          isSelected={selectedOption === '7x'}
        />
      </RadioGroup>
    </CustomContainer>
  );
};

export default PaymentOptions;
