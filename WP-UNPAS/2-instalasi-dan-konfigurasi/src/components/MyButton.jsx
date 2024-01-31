/* eslint-disable react/prop-types */
export default  function MyButton({ text, onClick, counter }) {

    const disabled = (text !== 'Reset!') ? ((counter > 9 || counter < 0) ? true : false) : ((counter > 9 || counter < 0) ? false : true);

    const myStyle = (text !== 'Reset!') ? {} : {margin: 20, display: 'block'};


    return (
      <button onClick={onClick} disabled={disabled} style={myStyle}>
        {text}
      </button>
    );
  }