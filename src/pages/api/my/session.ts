import { getAccessToken, getSession } from "@auth0/nextjs-auth0";

export default async function Session(req: any, res: any) {
  try {
    const token = await getAccessToken(req, res);
    /**
     * use getSession to get refresh token
     */
    const session = await getSession(req, res);

    // logout user
    if (!token) {
      throw new Error(`Cannot get token from auth0`);
    }
    if (!session) {
      throw new Error(`Cannot get session from auth0`);
    }
    res.status(200).json({ token: token.accessToken, session });
  } catch ({ error }: any) {
    /**
     * error.code === invalid_session
     */
    console.log("Error in getting session", error);
    return res.status(400).json({ error: error.message });
  }
}
