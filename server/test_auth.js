(async () => {
  try {
    console.log('Registering...');
    let r = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Test Institute', email: 'test@example.com', password: 'password123' }),
    });
    console.log('Register status', r.status);
    console.log('Register body:', await r.text());

    console.log('Logging in...');
    r = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com', password: 'password123' }),
    });
    console.log('Login status', r.status);
    console.log('Login body:', await r.text());
  } catch (e) {
    console.error('Request failed:', e);
  }
})();
