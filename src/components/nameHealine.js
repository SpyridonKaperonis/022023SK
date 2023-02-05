import React from 'react'

export const NameHeadline = (props) => {
    const name = props.name;
  return (
    <>
        <p style={styles.name}>{name}</p>
    </>
  )
};


const styles = {
    name: {
        fontSize: '40px',
        fontWeight: 'bold',

    }
}
