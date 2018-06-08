import { userConstants }   from "../_constants/user-constant";
import { userService } from "../services/userService";

var intialState = {
      loggedIn : false,
      message: '',
      msg: ''
}
export const loginReducer = (state = intialState , action)=>{

          //  console.log("..In Login reducer",action);
           switch(action.types){

                case userConstants.LOGIN_FAILURE:
                console.log("..In loginfailure reducer"); 
                return{
                         ...state,
                         loggedIn : action.data.error,
                         message: action.data.message,
                         msg : action.msg
                  }  

                case userConstants.LOGIN_SUCCESS:
                console.log("..In loginsucc reducer");
                return{
                        ...state,
                        loggedIn : action.data.error,
                        message: action.data.message,
                        msg : action.msg
                  } 

                default:
                 console.log("..IndefaultLoginreducer");
                    return {
                       ...state,
                       loggedIn: userService.isUserLogIn(),
                    };

           }
}

export default loginReducer;