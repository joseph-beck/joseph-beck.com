export const Divider = (): JSX.Element => {
  return (
    <div className="w-1/2 mx-auto">
      <span className="relative flex justify-center">
        <div
          className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
        />
      </span>
    </div>
  );
};
