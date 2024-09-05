import Link from "next/link";

export default function Home() {
  return (
    <>
    <section>
      <form>
        <h1>Login</h1>
        <div className="inputBox">
          <input minLength={5} type="email"  required/>
          <label htmlFor="">Email</label>
        </div>
        <div className="inputBox">
          <input type="password" required/>
          <label htmlFor="">Password</label>
        </div>
        <div className="forget">
          <label htmlFor=""><input type="checkbox" />Remember</label>
          <Link href="#" className="mt-6 mb-6">Forgot Password?</Link>
        </div>
        <button type="submit">Login</button>
        <div className="register">
        <Link href="/signUp">{`Don't`} have an account? Sign Up</Link>
        </div>
      </form>
    </section>
    </>
  );
}
