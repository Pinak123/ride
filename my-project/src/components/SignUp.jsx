import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/logo.svg';

function SignUp() {
  return (
    <Container>
      <Row>
        <Col>
             <div className="d-flex justify-content-center align-items-center vh-100 items-center">
      <div className="card p-4" style={{ width: '400px'  , marginBottom : "8%",marginTop:"8%" , height:"auto" }}>
        <div className="text-center mb-2 items-center">
          <img src={logo} alt="Logo" className="img-fluid rounded-circle " style={{ width: '150px' ,marginLeft:"25%"  }} />
        </div>
        <h2 className="text-3xl font-semibold mt-4 text-center" style={{marginBottom:"10px"}}>Unlock Campus Rides with Ease</h2>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="email" className='font-semibold'>Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className='font-semibold'>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 font-semibold">
            Login
          </button>
        </form>
      </div>
    </div>
        </Col>
        <Col >
            <div className='bg-gradient-to-r from-blue-400 to-blue-600 text-white p-8 flex flex-col justify-center' style={{background:"blue" , height:"100%" }}>
                <div  style={{margin:"auto" , width:"60%" , textAlign:"center"}}>
                    <h2 className="text-2xl font-semibold mb-2">Welcome to vRide!</h2>
                    <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
                </div>
            </div>
        </Col>
      </Row>
      
    </Container>
  );
}

export default SignUp;
