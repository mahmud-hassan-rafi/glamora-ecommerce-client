export const errorsString = (error) => {
  return (
    error?.data?.errors?.map((e) => e?.msg).join(" & ") ||
    error?.data?.message ||
    error?.message ||
    error
  );
};
