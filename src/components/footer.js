import React from 'react'

export const Footer = () => {
  return (
    <footer style={styles.footer}>
        <p>&copy; Spyridon Kaperonis 2023</p>
    </footer>
  )
}

const styles = {
    footer: {

        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        marginTop: '100%',
        backgroundColor: 'lightblue',
        width: '98%',
        justifyContent: 'center',
        padding: '2vh',
    }
}
