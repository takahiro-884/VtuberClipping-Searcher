import { signInWithEmailAndPassword, type User } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../config/firebase-config';

export const Login = () => {
  // User管理用のState
  const [user, setUser] = useState<User>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((e) => {
        setUser(e.user);
        alert('Loginできました~!');
      })
      .catch((error) => {
        alert(`失敗しましたぜ ${error.message}`);
      });
  };

  return (
    <>
      <div>
        <label htmlFor="email">メールアドレス</label>
        <input
          id="email"
          type="text"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">パスワード</label>
        <input
          id="password"
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={handleLogin}>
          ログインする
        </button>
      </div>
    </>
  );
};
