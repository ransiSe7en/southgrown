import Southgrown from './southgrown';
import { getChatGPTUser } from './chatgpt-auth';
export const dynamic = 'force-dynamic';
export default async function Page() { const user = await getChatGPTUser(); return <Southgrown initialPath="/" user={user ? {id:user.userId, name:user.fullName || 'My account'} : null}/>; }
