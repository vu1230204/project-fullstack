import { redirect } from "next/navigation";
import "../styles/globals.css";

export default function Home() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    redirect("/auth/login");
  }

  return <div>Welcome to the dashboard!</div>;
}
