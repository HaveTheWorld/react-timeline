const styles = {
  item: {
    position: 'absolute',
    width: '100%',
    '& .input-range__track .input-range__track--active': {
      background: props => props.isPoint && 'transparent',
      zIndex: 9999,
    },
    '& .input-range__slider-container': {
      zIndex: 9999,
    },
  },
};

export default styles;
