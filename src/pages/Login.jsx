import { useState, useEffect } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { publicRequest } from "../requestMethods";
import { loginStart, loginFailure, loginSucess } from "../redux/userRedux";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://coolbackgrounds.io/images/backgrounds/black/black-compute-ea4c57a4.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;



const Login = ({ user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { isFetching, currentUser, isLoggedIn } = useSelector((state) => state.user);

  console.log(isLoggedIn, "Login Status")

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home")
    }
  }, [isLoggedIn])


  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsError(false);
    try {
      dispatch(loginStart());
      const res = await publicRequest.post("/auth/login", { username, password });
      dispatch(loginSucess(res.data));
      setLoading(false);
    } catch (err) {
      console.log(err);
      setIsError(true);
      setLoading(false);
      dispatch(loginFailure());
    }
  };

  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {isError && <span style={{
            color: "red"
          }}>Wrong Username or Password!</span>}
          <Button onClick={(e) => handleClick(e)}>
            {loading ? "Loading..." : "LOGIN"}
          </Button>

          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link onClick={() => navigate("/register")}>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
