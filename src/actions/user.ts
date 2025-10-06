"use server";

import { createClient } from "@/auth/server";
import { handleError } from "@/lib/utils";

export const loginAction = async (email: string, password: string) => {
  try {
    const { auth } = await createClient();
    const { error } = await auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};

export const logOutAction = async () => {
  try {
    const { auth } = await createClient();
    const { error } = await auth.signOut();
    if (error) throw error;
    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};

export const signUpAction = async (email: string, password: string) => {
  try {
    const { auth } = await createClient();
    const { data, error } = await auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    const userId = data.user?.id;
    if (!userId) throw new Error("User ID not found after sign up");
    //will add user to db here later
    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};
