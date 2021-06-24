export default function InputWithError({ props }:InputWithErrorProps) {
  return (
    <div className="flex flex-col ">

      <input
        placeholder="Email"
        className={`
        rounded-lg border-blue-200 border-solid
        border-2 h-16 w-80 max-w-full pl-4 text-blue-400
        outline-none placeholder-blue-300
         ${props}`}
      />
      <span className="text-red-400 text-xs mt-1.5 ml-3">
        Email deve estar no formato: aaaa@email.com
      </span>
    </div>
  );
}
type InputWithErrorProps ={
props?:string;
}
