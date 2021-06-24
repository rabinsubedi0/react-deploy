
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import Input from "@material-ui/core/Input";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './/Component/04_JioType/JioType-Medium.ttf';
import './App.css';
import Nav from './Component/Loginpage/Nav'
function App() {
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    return (
        <div className="App">
            <nav class="navbar navbar-expand-lg navbar-light ">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    </ul>
                    <div class=" my-2 my-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-white" data-toggle="modal" data-target="#exampleModal" >Sign In</a>
                        </li>
                    </div>
                </div>
            </nav>





            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">

                        <div class="text-white mymodel modal-body ">
                            <form>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className="crossbtn">&times;</span>
                            </button>
                            <p class="modal-title text-white" id="exampleModalLabel">Sign in now</p>
                            <p><span className="or">or</span> <a href="" className="signup">Sign Up</a></p>
                                <div className="form-group">
                                   <label class="labelss">Email ID</label>
                                    <Input
                                        type="email"
                                        value={values.email} className="text-white inputline" required />
                                </div>

                                <div className="form-group">
                                 <label  class="labelss">Password</label>
                                    <Input
                                        type={values.showPassword ? "text" : "password"}
                                        onChange={handlePasswordChange("password")}
                                        className="inputline text-white"
                                        value={values.password}
                                        endAdornment={
                                            <InputAdornment position="end" >
                                                <IconButton
                                                     className="text-white view"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {values.showPassword ? <VisibilityOutlinedIcon className="" /> : <VisibilityOutlinedIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                            
                                        }
                                    />
                                    <div className="form-group mt-1">
                                        <label><a href="" class="forgotpass">Forgot Password? </a></label>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" id="fruit1" name="fruit-1" value="Apple" />
                                        <label for="fruit1" className="mylabel">Remember me</label>
                                        <button className="btn  float-right submitbtn" type="submit" ><p className="signin">Sign in</p></button>
                                   </div>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
