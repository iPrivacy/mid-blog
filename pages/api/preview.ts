import type { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse){
    res.setPreviewData({}) // token can be passed here if you have authentication
    res.writeHead(307, { Location:"/" });
    res.end();
}