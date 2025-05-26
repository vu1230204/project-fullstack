"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/hello")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-2">Test kết nối FE - BE</h1>
      <p className="text-lg text-green-600">{message}</p>
    </main>
  );
}
