import { test, expect } from '@playwright/test';

test('API flow with token - working demo', async ({ request }) => {

  // Login (fake store API)
  const loginResponse = await request.post('https://fakestoreapi.com/auth/login', {
    data: {
      username: 'mor_2314',
      password: '83r5^_'
    }
  });

  expect(loginResponse.status()).toBe(201);

  const { token } = await loginResponse.json();

  // Secure request
  const secureResponse = await request.get('https://fakestoreapi.com/products', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  expect(secureResponse.status()).toBe(200);
});
