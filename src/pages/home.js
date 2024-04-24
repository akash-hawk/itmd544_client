import Layout from '../components/layout';

function HomePage() {
  return (
    <Layout>
      <div className='d-flex justify-content-center align-items-center' style={{height: "100vh"}}>
        <div style={{
            width: "60%", 
            margin: "auto", 
            backgroundColor: "rgba(0,0,0,0.1)", 
            padding: "24px", 
            borderRadius: "12px", 
            wordBreak: "break-all" }}>
          <h3>{localStorage.getItem('token')}</h3>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
