import { useSelector } from 'react-redux';

function useSession() {
  const user = useSelector((state) => state.users.user);
  return user?.id && { user };
}

export default useSession;
