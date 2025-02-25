function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" /><br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" /><br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default App;
