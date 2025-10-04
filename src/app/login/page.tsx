import AuthForm from "@/components/AuthForm";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
const LogInPage = () => {
  return (
    <div className="mt-20 flex flex-1 flex-col items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="mb-4">
          <CardTitle className="text-center text-3xl">LogIn</CardTitle>
          <AuthForm type="login" />
        </CardHeader>
      </Card>
    </div>
  );
};
export default LogInPage;
