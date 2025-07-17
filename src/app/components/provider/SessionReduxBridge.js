'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/app/redux/slice/userSlice';

const SessionReduxBridge = () => {
  const { data: session, status } = useSession();
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (session?.user && !userData?.user) {
      dispatch(setUser({ user: session.user }));
    }
  }, [session, userData?.user, dispatch]);

  return null; 
};

export default SessionReduxBridge;
