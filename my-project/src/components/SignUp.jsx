import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/logo.svg';

function SignUp() {
  return (
    <Container>
      <Row>
        <Col>
             <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '400px'  , marginBottom : "10px"}}>
        <div className="text-center mb-4">
          <img src={logo} alt="Logo" className="img-fluid rounded-circle" style={{ width: '150px' ,  }} />
        </div>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
        </Col>
        <Col >
            <div style={{background:"blue" , height:"100%" }}>
                <div style={{margin:"auto" , width:"60%" , textAlign:"center"}}><h2 style={{paddingTop:"30%"}}>Welcome to Vride</h2></div>
            </div>
        </Col>
      </Row>
      
    </Container>
  );
}

export default SignUp;
