import * as firebase from "firebase" ;

export class AuthActions{
    static signupUser = (data) => {
        return (dispatch) => {
            console.log(data.email, data.password)
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                .then(user  => {
                    console.log('good job')
            //         const ref = firebase.database.ref('signupUser/' + user.uid);
            //         ref.set({
            //             uid: user.uid,
            //             name: data.name,
            //             email: data.email
            //         })
            //         console.log('Good job')
            //         // AuthActions.signupUserSuccess(dispatch, user)
                })
                .catch(() => console.log('wrong password'))
               
        };
    }
}