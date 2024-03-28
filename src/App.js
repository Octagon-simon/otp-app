import OTPInputGroup from "./otpInputs";

function App() {

  const styles = {
    app: {
      fontSize: '.89rem',
      height: '100dvh',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: '#f9f9f9'
    },

    formWrapper: {
      padding: '20px',
      maxWidth: 'calc(340px - 20px)',
      width: '100%',
      margin: 'auto',
      boxShadow: '0px 0px 8px #ddd',
      // borderRadius: '10px',.
      backgroundColor: '#fff',
      border: '1px solid #ffffff'
    },

    title: {
      textAlign: 'center',
      margin: '0 0 1.4rem 0',
      fontSize: '1.3rem',
      fontWeight: '500',
    },

    notification: {
      margin: '20px 0',
      padding: '20px',
      backgroundColor: '#eff5fb',
      color: '#296fa8',
      fontWeight: '500'
    }
  }

  return (
    <div className="app" style={styles.app}>
      <div style={styles.formWrapper}>
        <form method="post">
          <h2 style={styles.title}>Enter verification code</h2>
          <div style={styles.notification}>Check your inbox for a verification code and enter it below</div>
          <OTPInputGroup />
        </form>
      </div>
    </div>
  );
}

export default App;
