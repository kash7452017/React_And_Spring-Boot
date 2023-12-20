export const oktaConfig = {
    clientId: "{ClientId}",
    issuer: "https://{Path}/oauth2/default",
    redirectUri: "https://localhost:3000/login/callback",
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: true,
}