import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

// let userAccount = null

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({

      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const user = await fetch(`http://ajuu-store-6ge3ie8xy-ajuu-vroo.vercel.app/api/loginChecker`,{
          method: "POST",
          body:JSON.stringify(credentials),
          headers: {
            "Content-Type":"application/json"
          }
        }).then(data =>data.json() )
  
        if (user.emailID) {
          // userAccount = user
          return Promise.resolve(user);
        } else {
          // If you return null or false then the credentials will be rejected
          // return null;
          // You can also Reject this callback with an Error or with a URL:
          throw new Error(user.message) // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL
        }
      }
    })
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  pages: {
    signin: '/login',
    signout: '/',
    error: '/login'
  },
  // callbacks: {
  //   // Getting the JWT token from API response
  //   async jwt(token, user) {
  //     if (user) {
  //       token.accessToken = user.token
  //     }
  
  //     return token
  //   },
  
  //   async session(session, token) {
  //     session.accessToken = token.accessToken
  //     return session
  //   }
  // },
  callbacks: {
    session(session, payload) {
      if (payload.account) session.user = payload.account
      return session
    },
    jwt(token, account, user, userInfo) {
      if (userInfo) token.account = userInfo
      return token
    },
  },
})