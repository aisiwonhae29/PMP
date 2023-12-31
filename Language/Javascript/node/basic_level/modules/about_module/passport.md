# passport

### what is passport

- do a role like passport to use user service

- kind of sing in / login role

- passport module does work to login SNS account like google, kakao, naver.

### kind of strategy

1. Local Strategy(passport-local)
   
- use local DB to login Authentication

2. Social Authentication(passport-kakao, passport-twitter ...)

- Social network login authentication

### passport Sequence

1. user request authentication to  (to router)

2. after middleware do passport.authenticate()(on message in passport, passport module make a decision what work to do.)

3. from authenticate, call passport/localStrategy.js (call Passport.use)



