import { AUTH } from 'three0-js-sdk';

async function handleSignIn() {
  await AUTH.login(
    'Tweeter',
    `${window.location.origin}/home`,
    `${window.location.origin}/`,
  );
}

async function handleSignOut() {
  await AUTH.logout();
}

export { handleSignIn, handleSignOut };
