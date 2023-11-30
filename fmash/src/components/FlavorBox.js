

const textBoxStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    textAlign: 'center',
  };

function FlavorBox(title) {
    return(
        <div style={textBoxStyle}>
            {title}
        </div>
    )
}

export default FlavorBox;