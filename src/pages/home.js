import Layout from '../components/layout';

function HomePage() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Layout>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{height: "100vh"}}>
        <h4>Welcome, {user.firstName} {user.lastName}</h4>
        <h4>Role: <span className='text-info'>{user.userType}</span></h4>
        <h4>You are loggedin with: {localStorage.getItem('email')}</h4>
        <div style={{
              width: "60%", 
              backgroundColor: "rgba(0,0,0,0.1)", 
              padding: "24px", 
              borderRadius: "12px", 
              wordBreak: "break-all" 
            }}>
          <h3>{localStorage.getItem('token')}</h3>
        </div>

      </div>
    </Layout>
  );
}

export default HomePage;
