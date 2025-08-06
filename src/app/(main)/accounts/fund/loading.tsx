import { SyncLoader } from 'react-spinners';

export default function Spinner() {
  return (
    <div className="flex justify-center items-center fixed inset-0 z-[50] bg-white bg-opacity-50">
      <SyncLoader color="#091fb0" />
    </div>
  );
}
