export const CheckBox = ({ checked }: any) => {
  return (
    <span
      className={`flex items-center justify-center border border-cyan ${
        checked ? 'bg-cyan' : 'bg-transparent'
      } w-6 h-6 mr-2`}
      style={{ top: '40%' }}>
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-dark-green-secondary"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        {checked && (
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"></path>
        )}
      </svg>
    </span>
  );
};
