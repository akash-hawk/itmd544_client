import React from "react";
import Layout from "../components/layout";

function ErrorPage() {
  return(
    <Layout>
    <div className="d-flex justify-content-center align-items-center" style={{height: "50vh"}}>
      <h4 className="text-deark">Page Not Found !</h4>
    </div>
    </Layout>
  )
}

export default ErrorPage;