import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import UserInfo from '@/components/UserInfo';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';



const Home = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div>

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
      user information form client
      <UserInfo />
      
      user infor from sever {JSON.stringify(session)}
</div>
  );
};

export default Home;