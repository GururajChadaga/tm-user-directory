import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDirectory from './components/UserDirectory';
import UserDetails from './components/UserDetails';
import { UserContext } from './store/UserContext';
import { useFetch } from './utils/hooks/useFetch';
import { URLS } from './utils/constants';
import { getUsersWithPosts } from './utils/helpers';

const App = () => {
  const {
    data: users,
    loading: usersLoading,
    error: usersError,
  } = useFetch(URLS.USERS);

  const {
    data: posts,
    loading: postsLoading,
    error: postsError,
  } = useFetch(URLS.POSTS);

  const hasError = usersError || postsError;
  const isLoading = usersLoading || postsLoading;
  const usersWithPosts = getUsersWithPosts(users, posts);

  return (
    <UserContext.Provider value={{ usersWithPosts, isLoading, hasError }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserDirectory />} />
          <Route path='/users/:userId' element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
