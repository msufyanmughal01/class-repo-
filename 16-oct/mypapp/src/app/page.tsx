import Posts from "@/components/post";
import Users from "@/components/users";
import { Suspense } from "react";


export default function Home() {
  return (
    <div>
      <Suspense>
      <Posts/>
      </Suspense>
      

      <Users/>
    </div>
  );
}
