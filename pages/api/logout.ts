import type {NextApiRequest, NextApiResponse} from 'next'
import cookie from 'cookie'

type Data = {
    status: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.setHeader(
        "set-Cookie",
        cookie.serialize("user_token", "", {
            httpOnly: true,
            maxAge: 0,
            sameSite: "lax",
            path: '/',
            // domain:''
        })
    )
    res.status(200).json({status: 'success'})
}

