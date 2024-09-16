import useFetch from "./useFetch";

export const useEntries = () =>
  useFetch("https://travel-diary-api.anxoso.com/entries");

export const useRegister = () =>
  useFetch("https://travel-diary-api.anxoso.com/users/register");
