import React from "react";
import { useRouter } from "next/navigation";

export default function userProfile({ params }: any) {
  return (
    <div>
      <h1 className="text-red bg-orange-400">{params.id}</h1>
    </div>
  );
}
