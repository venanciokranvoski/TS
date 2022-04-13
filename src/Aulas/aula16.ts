// ======================
// tipagem estruturada
// ======================
type verifyUser = ( user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyLoggin: verifyUser = (user, sentValue) => {
  return (
    user.username === sentValue.username &&
    user.password === sentValue.password
  )
};

const bdUser   = { username: 'joao', password: '123456789'};
const sendUser = { username: 'joao', password: '123456789',
                 permissions: '' };
const SignIn = verifyLoggin(bdUser, sendUser);
console.log(SignIn);


