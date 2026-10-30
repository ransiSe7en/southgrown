import Southgrown from '../southgrown';
import { getChatGPTUser } from '../chatgpt-auth';
export const dynamic = 'force-dynamic';
export default async function Page({params}: {params: Promise<{path:string[]}>}) { const {path} = await params; const user = await getChatGPTUser(); return <Southgrown initialPath={'/'+path.join('/')} user={user ? {id:user.userId, name:user.fullName || 'My account'} : null}/>; }
